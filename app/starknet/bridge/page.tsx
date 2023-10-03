'use client'

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"



export default function Bridge(){
    return(
        <div>
            <div className="m-2">
                <h1><b>Select bridge and source network to transfer ETH to Starknet</b></h1>
            </div>
            <div>
            <form>
                <div className="m-2 flex flex-row">
                    <div className="m-2">
                        <Label> Starkgate</Label>
                    </div>
                    <div className="w-3/12 mx-10">
                    <Select>
                        <SelectTrigger id="starkgate-select">
                            <SelectValue placeholder="Source" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="etherium"> Etherium </SelectItem>
                            <SelectItem value="arbitrum"> Arbitrum One </SelectItem>
                        </SelectContent>
                    </Select>
                    </div>
                    <Button disabled> Run </Button>
                </div>
            </form>
            <form>
                <div className="m-2 flex flex-row">
                    <div className="m-2">
                        <Label> Layerswap </Label>
                    </div>
                    <div className="w-3/12 mx-10">
                    <Select>
                        <SelectTrigger id="starkgate-select">
                            <SelectValue placeholder="Source" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="etherium"> Etherium </SelectItem>
                            <SelectItem value="arbitrum"> Arbitrum One </SelectItem>
                        </SelectContent>
                    </Select>
                    </div>
                    <Button disabled> Run </Button>
                </div>
            </form>
            </div>
            <div>
                <h1><b>Select bridge and target network to transfer ETH from Starknet</b></h1>

                <div className="m-2 flex flex-row">
                    <div className="m-2">
                        <Checkbox/> 
                        <Label> Starkgate </Label>
                    </div>
                    <div className="w-3/12 mx-10">
                    <Select>
                        <SelectTrigger id="starkgate-select">
                            <SelectValue placeholder="Source" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="etherium"> Etherium </SelectItem>
                            <SelectItem value="arbitrum"> Arbitrum One </SelectItem>
                        </SelectContent>
                    </Select>
                    </div>
                    <Button> Run </Button>
                </div>

            </div>
        </div>
    )
}