"use client"
import { BaseDirectory, createDir, writeTextFile} from "@tauri-apps/api/fs"
import { TestInvoker } from "./test"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { open } from '@tauri-apps/api/dialog';
import { useState } from "react"

const createDataFolder = async () => {
    await createDir("Data", {
        recursive: true,
        dir: BaseDirectory.AppData
    })
    .then(() => {
        console.log("Created folder");
    })
    .catch(e => {
        console.error(e);
    })
}

const createDataFile = async () => {
    await writeTextFile('./Data/data.conf', 'asdasdasd' , {dir: BaseDirectory.AppData})
    .then(() => {
        console.log("made file")
    })
    .catch( e => {
        console.error(e)
    })
}




export default function Settings(){

const [selected, setSelected] = useState("");

const openDialog = async () => {
    await open({
        multiple: true,
    })
    .then( result => {
        setSelected(String(result));
        console.log(selected)
    })
    .catch( e => {
        console.error(e)
    })
    .finally(() => {
        console.log(selected)
    })
}

    return(
        <div className="flex flex-col">
            Settings
            <div className="box-content">
                <Button onClick={openDialog}>Open</Button>
                <Button onClick={createDataFolder}>Create folder</Button>
                <Button onClick={createDataFile}>Create file</Button>
            </div>
            <div>{selected}</div>
            <TestInvoker />
            <Link href="google.com"> Google </Link>
        </div>
    )
}