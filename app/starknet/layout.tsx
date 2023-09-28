
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
          <div>
              <Dashboard/>
            </div>
            <div className="h-screen">
              <Sidebar 
              items={sidebarNavItems}
              className="left-0 w-28 flex-col"
              />
            </div>
            <div className="flex">{children}</div>
        </div>
    )
  }