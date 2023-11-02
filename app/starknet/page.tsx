'use client'

import { Dashboard } from "@/components/dashboard"
import { InputBox } from "@/components/input-box"
import { Sidebar } from "@/components/sidebar"
import Image  from "next/image"
import ETH from "@/node_modules/cryptocurrency-icons/svg/icon/eth.svg"

const ETHicon = () => {
    
    return(
        <Image 
            src={ETH}
            width={16}
            height={16}
            alt="gay"
        />
    )
}

export default function Starknet(){

    return(
        <div>
            <p>Main page for adding wallets, maybe some general settings</p>
            <p>Maybe add some overview for wallets</p>
            <ETHicon/>
        </div>
    )
}