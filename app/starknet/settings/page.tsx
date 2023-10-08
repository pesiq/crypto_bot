"use client"
import { BaseDirectory, createDir, writeTextFile} from "@tauri-apps/api/fs"
import { TestInvoker } from "./test"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const createDataFolder = async () => {
    await createDir("Data", {
        recursive: true,
        dir: BaseDirectory.Desktop
    })
    .then(() => {
        console.log("Created folder");
    })
    .catch(e => {
        console.error(e);
    })
}

const createDataFile = async () => {
    await writeTextFile('./Data/data.conf', 'asdasdasd' , {dir: BaseDirectory.Desktop})
    .then(() => {
        console.log("made file")
    })
    .catch( e => {
        console.error(e)
    })
}


export default function Settings(){

    return(
        <div className="flex flex-col">
            Settings
            <div className="box-content">
                <Button onClick={createDataFolder}>Create folder</Button>
                <Button onClick={createDataFile}>Create file</Button>
            </div>
            <TestInvoker />
            <Link href="https://www.youtube.com/watch?v=GtezzREeoaE"> Google </Link>
        </div>
    )
}