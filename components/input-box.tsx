"use client"

import { Input } from "./ui/input";
import { 
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
    CardFooter
 } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

interface InputBoxParams {
    title: string,
    button: string,
    desc: string
}


export function InputBox ( {title, button, desc }: InputBoxParams) {
    return(
    <Card className="m-20">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label>From Откуда</Label>
                        <Input id="input-1" placeholder="cum" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label>To Куда</Label>
                        <Input id="input-2" placeholder="balls" />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter>
            <Button>{button}</Button>
        </CardFooter>
    </Card>
    )
}