"use client"

import { Dashboard } from "@/components/dashboard"
import { Sidebar } from "@/components/sidebar"
import { Textarea } from "@/components/ui/textarea"
// import { LogPanel } from "@/components/log-panel"

const sidebarNavItems = [
    {
      title: "Main",
      href: "/starknet"
    },
    {
      title: "Swap",
      href: "/starknet/swap"
    },
    {
      title: "Bridge",
      href: "/starknet/bridge"
    },
    {
        title: "Settings",
        href: "/starknet/settings"
    }
  ]


  export default function RootLayout({ children }: { children: React.ReactNode }) {

    return(
      <div className="h-screen overflow-hidden">
          <div>
            <Dashboard />
          </div>
          <div className="flex">
            <div className="flex left-0 w-28 h-[calc(100vh-41px)]">
              <Sidebar items={sidebarNavItems} className="flex-col h-fill"/>
            </div>
              <div className="flex flex-col h-[calc(100vh-41px)] overflow-hidden ml-2 w-full">

                <div className="h-min overflow-y-scroll">
                  {children}
                </div>
                <div className="flex fixed bottom-0 w-[94%] hover:h-3/5">
                  <Textarea className=""
                  contentEditable="false"/>
                </div>
            </div>
          </div>
      </div>
    )
  }