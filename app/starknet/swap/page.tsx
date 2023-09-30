"use client"

import { invoke } from "@tauri-apps/api/tauri";
import { listen } from "@tauri-apps/api/event";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

function Box() {

    const bruh = () => {
        console.log("envoked btuh");
        redirect('/');
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

function TBox () {

    type Payload = {
        message: string;
    };
    

    async function orderLinstener() {
        await listen<Payload>('order', (event) => {
            console.log("Hehehehhe: " + event.payload.message);
            redirect('/')
        });
    }

    async function invokeOrder() {
        await invoke('goto_main')
    }

    useEffect( () => {
        orderLinstener();
    }, [])

    return(
        <div>
            <Button
                onClick={invokeOrder}
            >Go to main</Button>
        </div>
    )
}

function FBox(){


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