"use client"

import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Settings, Shuffle, ArrowLeftRight } from "lucide-react"



export function Sidebar(){


    return(
    <div className="fixed top-0 left-0 h-screen flex flex-col py-7 w-24">
        <h2 className="text-center">
            Main
        </h2>
        <div className="space-y-1 p-1">
            <Button variant="secondary" className="w-full"
            onClick={() => {console.log("Swap clicked")}}
            > 
                <Shuffle /> Swap
            </Button>
            <Button variant="secondary" className="w-full" disabled> 
                <ArrowLeftRight/>Bridge
            </Button>
            <Button variant="secondary" className="w-full" disabled> 
                Withdraw
            </Button>
        </div>
        <Separator  className="my-1"/>
        <h2 className="text-center">
            Misc
        </h2>
        <Button>
            Logs
        </Button>
        <Button className="">
            <Settings className=""/>
        </Button>
    </div>
    )
}

