"use client"

import { useEffect, useRef, useState } from "react"
import { listen } from '@tauri-apps/api/event'
import { createElement } from "react"

interface msgArg {
    text: string
}

const Message = ( {text}: msgArg ) => {

    return(
        <div className="w-full">
            {text}
        </div>
    )
}

export function LogPanel () {

    const [messages, setMessages] = useState<string>("")

    type msgPayload = {
        message: string
    }

    const msgListener = async () => {
        await listen<msgPayload>("log", event => {
            newMsg(event.payload.message);
        })
    }

    const newMsg = (msg: string) => {
        var timestamp = 
        setMessages( messages => messages.concat(msg));
    }

    useEffect( () => {
        msgListener();
    })

    const scrollRef = useRef<HTMLDivElement>(null);
    // scroll to bottom
    function scrollToBottom() {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'})
    };

    useEffect(scrollToBottom, [messages]);

    return (

            <div ref={scrollRef} className="flex-col fixed bottom-4 h-1/5 w-[calc(100%-150px)] bg-secondary overflow-y-scroll mx-3 p-5 rounded-md">
                {messages.split('\n').map( msg => (
                    <Message text={msg}/>
                ))}
            </div>
    )
}