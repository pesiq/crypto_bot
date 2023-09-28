"use client"

import { Settings } from "lucide-react"

import { 
    Menubar,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger

 } from "./ui/menubar"
 import { Button } from "./ui/button"
 import { 
    Tabs,
    TabsTrigger,
    TabsList
 } from "./ui/tabs"



export function Dashboard () {

    return(
        <Menubar className="">
            <MenubarMenu>
                <MenubarTrigger className="m-1"> <Settings /> </MenubarTrigger>
                <div className="justify-center">
                    <Tabs>
                        <TabsList>
                                <TabsTrigger value="swap"> Swap </TabsTrigger>
                                <TabsTrigger value="bridge" disabled> Bridge </TabsTrigger>
                                <TabsTrigger value="withdraw" disabled> Withdraw </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </MenubarMenu>
        </Menubar>
    )
}