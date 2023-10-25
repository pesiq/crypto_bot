
import { InputBox } from "@/components/input-box"
import { Sidebar } from "@/components/sidebar"
import { Separator } from "@/components/ui/separator"
import { PJCard } from "@/components/project-card"
import Link from "next/link"

export default function Home(){


  return(
    <>
      <div className="h-screen w-full flex justify-center my-20">
        <PJCard name="Starknet" href="/starknet"/>
        <PJCard name="Base" href="/base" />
      </div>
    </>
  )
}