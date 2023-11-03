"use client"

import { useEffect, useRef, useState } from "react"
import { listen } from '@tauri-apps/api/event'
import { createElement } from "react"
import { cn } from "@/lib/utils"
import Image  from "next/image"
import { Scroll } from "lucide-react"
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

    const lz = (num: any) => { return String(num).padStart(2, '0')}

    const newMsg = (msg: string) => {
        var timestamp = new Date;
        var hrs = timestamp.getHours();
        var mins = timestamp.getMinutes();
        var sec = timestamp.getSeconds()
        var nmsg = lz(hrs) + ':' + lz(mins) + ':' + lz(sec) + ':   ' + msg
        setMessages( messages => messages.concat(nmsg));
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

    //gas listener
    useEffect( () => {
        const unlisten = listen<msgPayload>("gas_price", event => {
            newMsg("Current recomended gas price: " + event.payload.message + ' GWEI \n')
        })
        
        return( () => {
            unlisten.then(f => f())
        })
    })

    const container = useRef<HTMLDivElement>(null)

    // auto scroll to bottom
    const Scroll = () => {
        const { offsetHeight, scrollHeight, scrollTop } = container.current as HTMLDivElement
        if (scrollHeight <= scrollTop + offsetHeight + 100) {
          container.current?.scrollTo(0, scrollHeight)
        }
      }

    useEffect(() => {
        Scroll()
    }, [messages])


    return (

            <div ref={container} 
            className={
                cn( "flex-col fixed bottom-4 h-1/5 bg-secondary overflow-y-scroll mx-3 p-5 rounded-md",
                className)
            }>
                {messages.split('\n').map( msg => (
                    <Message key={Date.now()} text={msg}/>
                    
                ))}
            </div>
    )
}