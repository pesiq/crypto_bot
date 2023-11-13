"use client"

import { Dashboard } from "@/components/dashboard"
import { Sidebar } from "@/components/sidebar"
import { LogPanel } from "@/components/log-panel"

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
    },
    {
      title: "Back",
      href: "/"
    }
  ]
  
  const ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, augue volutpat blandit mollis, felis enim commodo dui, eget suscipit odio nibh et sapien. Nunc molestie elit in sapien finibus, at sagittis massa laoreet. Aliquam erat volutpat. Vivamus interdum laoreet metus vitae ultricies. Donec dapibus varius felis, in mollis risus rutrum sed. Vestibulum non imperdiet leo, eget pharetra lorem. Fusce ornare leo ac ipsum commodo congue. Phasellus consectetur ex eget justo porttitor, pulvinar venenatis libero pulvinar. Nunc sagittis nisl sit amet quam lobortis interdum. "
  export default function RootLayout({ children }: { children: React.ReactNode }) {

    return(
      <div className="h-screen overflow-hidden">
          <div>
            
          </div>
          <div className="flex">
            <div className="flex left-0 w-28 h-screen">
              <Sidebar items={sidebarNavItems} className="flex-col h-fill"/>
            </div>
              <div className="flex flex-col h-screen overflow-hidden w-full bg-background ml-3">

                <div className="h-min overflow-y-scroll">
                  {children}
                </div>
                <div className="">
                  <LogPanel className="w-[calc(100%-150px)]"/>
                </div>
            </div>
          </div>
      </div>
    )
  }