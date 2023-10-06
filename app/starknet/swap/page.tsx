"use client"

import { invoke } from "@tauri-apps/api/tauri";
import { listen } from "@tauri-apps/api/event";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import Link from "next/link";
import { Input } from "@/components/ui/input";

function Box() {

    const bruh = () => {
        console.log("envoked bruh");
        redirect('/starknet/bridge');
    }


    type Payload = {
        message: string;
    };

    async function listener1(){
        await listen<Payload>('order', (event) => {
            console.log(event.payload.message)
            bruh();
        })
    }

    async function listener2(){
        await listen<Payload>('Synced', (event) => {
            console.log(event.payload.message)
        })
    }

    async function invokeOrder() {
        await invoke('goto_main')
    }

    async function invokeEmitter() {
        await invoke('test_api_handle')
    }

    useEffect( () => {
        listener1();
        listener2();
    })

    return(
        <div>
            <div>
            <Button
                onClick={invokeOrder}
            >Go to main</Button>
            </div>
            <div>
            <Button
            onClick={invokeEmitter}
            >
                Call emitter
            </Button>
            </div>

        </div>
    )
}

const DocsButton = () => {

    async function openWindow () {
        await invoke ('open_docs')
        .then( () => {
            console.log("Called")
        })
        .catch(()=>{
            console.log("Failed to open window")
        })
    }

    return(
        <div>
            <Button onClick={openWindow}> Docs Window</Button>
        </div>
    )
}

const Web3button = () => {

    const [adress, setAdress] = useState("");

    async function w3call (adr: String) {
        await invoke ('check_balance', {adress: adr})
        .then( () => {
            console.log("Checking balance")
        })
        .catch(() => {
            console.log("Failed to check balance")
        })
    }

    return(
        <div>
            <Input id="adress_input" placeholder="enter adress to check" onChange={
                e => setAdress(e.currentTarget.value)
            }/>
            <Button onClick={() => {
                w3call(adress)
            }}>Check balance</Button>
        </div>
    )
}

export default function Swap(){


    async function openLink(link: string){
        await invoke('open_link', {link: link})
        .then( () => 
            console.log("Attemting to open a webview window")
        )
        .catch( () => {
            console.log("Couldn't open window")
        })
    }

    const href = "google.com"

    return(

        <div>
            <Box />
            <DocsButton />
            <Web3button />
        </div>
    )
}