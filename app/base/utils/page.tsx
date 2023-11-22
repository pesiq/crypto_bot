"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";


export default function Utils(){

    return(
        <div >
            <p>Page For utilities</p>

            <Separator className="my-5"/>

            <Label className="text-lg m-10">Make <b>ONE</b> swap for <b>ONE</b> account</Label>
            <div className="bg-cyan-950">
                <div className="p-2">
                    <Label className="m-2">RPC</Label>
                    <Input className="w-30" placeholder="RPC"/>

                    <Label>Private Key</Label>
                    <Input className="w-30" placeholder="Private key"/>
                </div>
                <div className="bg-blue-800 p-2">
                    <div className="">
                        <Label>From</Label>
                        <Select>
                            <SelectTrigger className="w-30">
                                <SelectValue placeholder="Select token"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select Token</SelectLabel>
                                    <SelectItem value="DAI">DAI</SelectItem>
                                    <SelectItem value="ETH">ETH</SelectItem>
                                    <SelectItem value="USDC">USDC</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Label>To</Label>
                        <Select>
                            <SelectTrigger className="w-30">
                                <SelectValue placeholder="Select token"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select Token</SelectLabel>
                                    <SelectItem value="DAI">DAI</SelectItem>
                                    <SelectItem value="ETH">ETH</SelectItem>
                                    <SelectItem value="USDC">USDC</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Label>Amount</Label>
                        <Input className="w-30" placeholder="Amount"/>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}