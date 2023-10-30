"use client"

import { Button, buttonVariants } from "./ui/button"
import { Separator } from "./ui/separator"
import { Settings, Shuffle, ArrowLeftRight} from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
      href: string
      title: string
    }[]
}

export function Sidebar( {className, items, ...props}: SidebarNavProps ){

    const pathname = usePathname()

    return(
        <>
    <nav 
    className={cn(
        "flex items-center rounded-md border bg-background p-2 justify-center", className
    )}
    {...props}
    >
        {items.map((item) => (
            <Link
            key={item.href}
            href={item.href}
            className={
                cn(
                    buttonVariants({ variant: "ghost" }),
                    pathname === item.href
                    ? "bg-muted hover:bg-muted"
                    : "hover:bg-black",
                    "justify-start m-2"
                )
            }
            >
            {item.title =="Back" ? <ChevronLeft className="align-left"/>  :item.title}
            </Link>
        ))}

    </nav>
    </>
    )
}

