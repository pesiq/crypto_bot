'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"

export default function Base(){

    return(
        <div className="overflow-hidden overflow-y-hidden">
            <div>
                <p>
                    ETH gas price
                    Base gas price
                </p>
            </div>
            <div className="p-10">
                <p>Table of wallets</p>
                <Table className="">
                <TableHeader>
                    <TableRow>
                            <TableHead >Adress</TableHead>
                            <TableHead>tx count</TableHead>
                            <TableHead>ETH</TableHead>
                            <TableHead >USDC</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell> <Skeleton className="bg-red-200 w-[100px]"/> </TableCell>
                            <TableCell> <Skeleton className="bg-red-200 w-16"/> </TableCell>
                            <TableCell> <Skeleton className="bg-red-200 w-16"/> </TableCell>
                            <TableCell> <Skeleton className="bg-red-200 w-16"/> </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell> <Skeleton/> </TableCell>
                            <TableCell> <Skeleton/> </TableCell>
                            <TableCell> <Skeleton/> </TableCell>
                            <TableCell> <Skeleton/> </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}