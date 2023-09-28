"use client"

import { Button, buttonVariants } from "./ui/button"
import { Separator } from "./ui/separator"
import { Settings, Shuffle, ArrowLeftRight} from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
      href: string
      title: string
    }[]
}

export function Sidebar( {className, items, ...props}: SidebarNavProps ){

    const pathname = usePathname()

    return(
    <nav 
    className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className
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
                    : "hover:bg-transparent hover:underline",
                    "justify-start"
                )
            }
            >
            {item.title}
            </Link>
        ))}

    </nav>
    )
}
