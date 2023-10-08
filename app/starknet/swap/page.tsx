"use client"

import { invoke } from "@tauri-apps/api/tauri";
import { listen } from "@tauri-apps/api/event";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Web3button } from "./test";

function Box() {




    type Payload = {
        message: string;
    };


    async function listener2(){
        await listen<Payload>('Synced', (event) => {
            console.log(event.payload.message)
        })
    }


    async function invokeEmitter() {
        await invoke('test_api_handle')
    }

    useEffect( () => {
        listener2();
    })

    return(
        <div>
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