'use client'

import { Dashboard } from "@/components/dashboard"
import { InputBox } from "@/components/input-box"
import { Sidebar } from "@/components/sidebar"


export default function Starknet(){

    return(
        <>
        <div className="bg-red-400 h-full w-full m-auto flex">
            <h1>Starknet page</h1>
            <div className=" bg-yellow-500 bg-center">
                Balls
            </div>
        </div>
        <div>
                <InputBox title="bruh" button="kys" desc="idfk"/>
        </div>
        </>
    )
}