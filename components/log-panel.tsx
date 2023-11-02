"use client"

import { useEffect, useRef, useState } from "react"
import { listen } from '@tauri-apps/api/event'
import { createElement } from "react"
import { cn } from "@/lib/utils"
import Image  from "next/image"
//import "@/node_modules/cryptocurrency-icons"

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

const ETHicon = () => {
    
    return(
        <Image 
            src="@/node_modules/cryptocurrency-icons/svg/eth.svg"
            alt="@/node_modules/cryptocurrency-icons/svg/etc.svg"
        />
    )
}

export function LogPanel ({className, ...props}: React.HTMLAttributes<HTMLElement>) {

    const [messages, setMessages] = useState<string>("")

    type msgPayload = {
        message: string
    }

    type balancePayload = {
        account: string,
        balance: string
    }

    // adds new message to log panel

    const newMsg = (msg: string) => {
        setMessages( messages => messages.concat(msg));
    }

    // hook msg listener 
    useEffect( () => {
        const unlisten = listen<msgPayload>("log", event => {
            newMsg(event.payload.message);
        })
        return( () => {
            unlisten.then((f) => f())
        })
    })

    //balance listener
    useEffect( () => {
        const unlisten = listen<balancePayload>("balance", event => {
            newMsg(event.payload.account + ": " + event.payload.balance+"\n");
        })
        return( () => {
            unlisten.then((f) => f())
        })
    })

    const scrollRef = useRef<HTMLDivElement>(null);
    // scroll to bottom
    function scrollToBottom() {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'})
    };

    useEffect(scrollToBottom, [messages]);

    return (

            <div ref={scrollRef} 
            className={
                cn( "flex-col fixed bottom-4 h-1/5 bg-secondary overflow-y-scroll mx-3 p-5 rounded-md",
                className)
            }>
                {messages.split('\n').map( msg => (
                    <Message text={msg}/>
                    
                ))}
            </div>
    )
}