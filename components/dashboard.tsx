"use client"


import { 
    Menubar,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger

 } from "./ui/menubar"



export function Dashboard () {

    return(
        <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
            <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarTrigger>Menu 2</MenubarTrigger>
                <MenubarTrigger>Menu 3</MenubarTrigger>
                <MenubarTrigger>Menu 4</MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}