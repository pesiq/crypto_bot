'use client'

import { LogPanel } from "@/components/log-panel"
import { Sidebar } from "@/components/sidebar"

export default function RootLayout({ children }: {children: React.ReactNode}){

    const sidebarNavItems = [
      {
        title: "Back",
        href: "/"
      },
      {
        title: "Main",
        href: "/base"
      },
      {
        title: "Swap",
        href: "/base/swap"
      }
      ]

    return(
        <div>
            <div>
                <Sidebar items={sidebarNavItems}/>
            </div>
            <div>
                {children}
            </div>
            <div>
                <LogPanel className="w-[99%]" />
            </div>
        </div>
    )
}