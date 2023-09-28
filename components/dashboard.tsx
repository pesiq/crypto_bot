"use client"

import { Settings } from "lucide-react"

import { 
    Menubar,
    MenubarContent,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
    MenubarItem

 } from "./ui/menubar"
 import { Button } from "./ui/button"
 import { 
    Tabs,
    TabsTrigger,
    TabsList
 } from "./ui/tabs"
import Link from "next/link"



export function Dashboard () {

    return(
        <Menubar className="">
            <MenubarMenu>
                <MenubarTrigger className="m-1"> Settings </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link
                            key="/"
                            href="/"
                        >
                            Change proj
                        </Link>
                        </MenubarItem>
                </MenubarContent>
                
            </MenubarMenu>
        </Menubar>
    )
}