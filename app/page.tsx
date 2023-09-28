
import { InputBox } from "@/components/input-box"
import { Sidebar } from "@/components/sidebar"
import { Separator } from "@/components/ui/separator"
import { PJCard } from "@/components/project-card"
import Link from "next/link"

export default function Home(){


  return(
    <>
      <div>
        <PJCard name="Starknet" href="/starknet"/>
      </div>
    </>
  )
}