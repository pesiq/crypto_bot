
import { Dashboard } from "@/components/dashboard"
import { Sidebar } from "@/components/sidebar"


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
    return (
        <div>
            <Dashboard/>
            <Sidebar 
            items={sidebarNavItems}
            className="fixed left-0 w-20 flex flex-col h-full py-20"
            />
                {children}
        </div>
    )
  }