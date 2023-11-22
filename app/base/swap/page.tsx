"use client"

import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";


export default function Swap(){

    return(
        <div>
            <p>Auto-Swap module</p>
            <p>NOT OPERATIONAL</p>
            <div>
                <div className="flex align-middle">
                    <Label className="">RPC: </Label>
                    <Input className="w-[20%] m-3"></Input>
                    <p>no workie</p>
                </div>
            </div>
            <div>
                <p>select swappers</p>
                <Switch id='aerodrome' /> 
                <Label>Aerodrome</Label>
            </div>
            <div>
                <Label>select % of balance</Label>
                <Slider min={50} max={80} step={1} defaultValue={[60]}/>
            </div>
            <p>input fields for </p>
            <p></p>
        </div>
    )
}