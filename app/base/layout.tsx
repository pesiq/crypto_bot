"use client";

import { LogPanel } from "@/components/log-panel";
import { Sidebar } from "@/components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarNavItems = [
    {
      title: "Main",
      href: "/base",
    },
    {
      title: "Swap",
      href: "/base/swap",
    },
    {
      title: "Settings",
      href: "/base/settings"
    },
    {
      title: "Utils",
      href: "/base/utils"
    },
    {
      title: "Back",
      href: "/",
    },
  ];

  return (
    <div className="h-screen overflow-hidden">
      <div></div>
      <div className="flex">
        <div className="flex left-0 w-30 h-screen">
          <Sidebar items={sidebarNavItems} className="flex-col h-fill" />
        </div>
        <div className="flex flex-col h-screen overflow-hidden w-full ml-3 bg-background">
          <div className="h-min overflow-y-scroll">{children}</div>
          <div className="">
            <LogPanel className="w-[calc(100%-150px)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
