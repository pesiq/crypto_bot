
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { listen } from "@tauri-apps/api/event";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Web3button = () => {

    type Payload = {
        account: string,
        balance: string
    }

    const [adress, setAdress] = useState("0xe688b84b23f322a994A53dbF8E15FA82CDB71127");
    const [rpc, setRpc] = useState("https://eth.llamarpc.com")
    const [response, setResponse] = useState("")

    async function w3call (adr: String, url: String) {
        await invoke ('check_balance', {adress: adr, rpc: url})
        .then( () => {
            console.log("Checking balance")
        })
        .catch(() => {
            console.log("Failed to check balance")
        })
    }

    async function balanceListener() {
        await listen<Payload>("balance", event => {
            console.log("Got balance emission")
            console.log(event)
            setResponse(event.payload.balance)
        })
        .catch( e => {
            console.error(e);
        })
        .then(event => {
            console.log("Got balance emission")
            console.log(event)
        })
    }

    useEffect( () => {
        balanceListener();
    })

    return(
        <div>
            <Input id="RPC_input" placeholder="Enter node provider" defaultValue="https://eth.llamarpc.com" onChange={
                e => setRpc(e.currentTarget.value)
            }/>
            <Input id="adress_input" placeholder="enter adress to check" defaultValue="0xe688b84b23f322a994A53dbF8E15FA82CDB71127" onChange={
                e => setAdress(e.currentTarget.value)
            }/>
            <Button onClick={() => {
                w3call(adress, rpc)
            }}>Check balance</Button>
            <div>
                {response}
            </div>
        </div>
    )
}