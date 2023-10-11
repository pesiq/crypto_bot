"use client"

import { useEffect } from "react"
import { listen } from '@tauri-apps/api/event'
import { createElement } from "react"

interface msgArg {
    text: string
}

const Message = ({text} : msgArg ) => {

    return(
        <div>
            {text}
        </div>
    )
}

export function LogPanel () {

    type msgPayload = {
        message: string
    }

    //const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "

    var content: string[] = ["Lorem ipsum", "dolor sit amet"];


    const msgListener = async () => {
        await listen<msgPayload>("log", event => {
            console.log(event)
            content.push(event.payload.message);
            
            console.log(content)
        })
    }

    useEffect( () => {
        msgListener();
    })


    return (
        <div>
            <div className="flex flex-col h-1/5 fixed bottom-0 w-[screen * 94%] bg-secondary overflow-y-scroll overflow-x-auto m-3 p-5 rounded-md">
                
                {content.map( msg => (
                    <Message text={msg}/>
                ))}
            </div>
        </div>
    )
}