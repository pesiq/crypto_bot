"use client"

import { invoke } from "@tauri-apps/api/tauri";
import { listen } from "@tauri-apps/api/event";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";



function Box(){


    type Payload = {
        message: string;
    };
    
    const [message, setMessage] = useState("")
    async function startSerialEventListener() {
        await listen<Payload>('Synced', (event) => {
            console.log("Event triggered from rust!\nPayload: " + event.payload.message);
            setMessage(event.payload.message)
        });
    }

    const obey = (path: string) => {
        const router = useRouter();
        console.log(path)
        router.push("/starknet/bridge")
    }

    async function orderLinstener() {
        await listen<Payload>('order', (event) => {
            console.log("Hehehehhe: " + event.payload.message);
            obey(event.payload.message)
        });
    }
    
    const [status, setStatus] = useState("")
    async function invokeEmitter() {
        await invoke('test_api_handle')
        .then(() => {
            setStatus("Invoked")
        })
        .catch( (err) => {
            setStatus("Error, somehow: " + err)
        })
    }

    async function invokeOrder() {
        await invoke('goto_main')
    }

    useEffect( () => {
        orderLinstener();
    }, [])

    useEffect( () => {
        startSerialEventListener();
    }, [])



    return (
        <div>
            <div>
            <Button
            onClick={invokeEmitter}
            >
                Call emitter
            </Button>
            <div>
                <h1>Status</h1>
                {status}
            </div>
            <div>
                <h1> Response </h1>
                {message}
            </div> 
            <Button
            onClick={invokeOrder}
            >Go to main</Button>
            </div>
        </div>
    )

}

export default function Swap(){


    return(
        <div>
            <Box />
        </div>
    )
}