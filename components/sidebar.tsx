"use client"

import { Button } from "./ui/button"


export function Sidebar(){


    return(
    <div className="space-y-4 py-4 lg:block pb-4">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Main
        </h2>
        <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start"> 
                Swap 
            </Button>
            <Button variant="secondary" className="w-full justify-start" disabled> 
                Bridge
            </Button>
            <Button variant="secondary" className="w-full justify-start" disabled> 
                Withdraw
            </Button>

        </div>
    </div>
    )
}

