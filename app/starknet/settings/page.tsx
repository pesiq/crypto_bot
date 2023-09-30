
import { TestInvoker } from "./test"
import Link from "next/link"

export default function Settings(){

    return(
        <>
        Settings
            <TestInvoker />
            <Link href="https://www.youtube.com/watch?v=GtezzREeoaE"> Google </Link>
        </>
    )
}