'use client'


import { invoke } from '@tauri-apps/api/tauri'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const TestInvoker = () => {

    const [displayThing, setDisplayThing] = useState("")
    const [amount, setAmount] = useState(0)

    async function testStr(lenth: number) {
        await invoke('random_str', {len: lenth})
        .then((str: any) => {
            setDisplayThing(str)
        })
        .catch((err: any) => {
            console.error(err)
            setDisplayThing("Invalid argument")
        })

    }

    
    
    return(
        <>
        <div>
            <Input id="IA" placeholder='Enter smth' 
            onChange={(e) => setAmount(Number(e.currentTarget.value))}
            />

            <Button
                onClick={() => {
                    testStr(amount)
                }}
            >Get string</Button>
            {displayThing}
        </div>
        </>
    )
}