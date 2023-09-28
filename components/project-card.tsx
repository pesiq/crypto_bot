
import { Label } from "./ui/label";

import { 
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
    CardFooter
 } from "./ui/card";
import Link from "next/link";

 interface JPCrdProps {
    name: string
    href: string
 }

 export function PJCard ({name, href}: JPCrdProps){

    return (
        <Link
            key = {href} 
            href ={href}
        >
            <Card>
                <CardHeader>
                    <CardTitle>
                        {name}
                    </CardTitle>
                </CardHeader>
            </Card>

        </Link>
    )

 }