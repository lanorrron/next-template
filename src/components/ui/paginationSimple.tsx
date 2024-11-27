import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import * as React from "react";
import Typography from "@/@core/components/typography";
import IconButton from "@/components/ui/IconButton";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";


interface IPaginationSimple {
    pageSize: number
    currentPage: number
    totalItems: number
    totalPages: number
    onChangePage: (value: number)=> void
    onChangeRowsPerPage: (value: number)=> void
}
export const PaginationSimple = (params:IPaginationSimple) => {
    const startIndex = ((params.currentPage - 1) * params.pageSize + 1)
    const endIndex = Math.min(startIndex + params.pageSize - 1, params.totalItems);
    return (
        <div className={'flex items-center'}>
            <Select onValueChange={(value)=>params.onChangeRowsPerPage(Number(value))}>
                <div className={'flex flex-row items-center'}>
                    <Typography className={'text-muted-foreground'}>Rows per page:</Typography>
                    <div>
                        <SelectTrigger className={'text-muted-foreground border-none focus:bg-accent p-1 gap-1'}>
                            <SelectValue placeholder={`${params.pageSize??10}`} className={'text-muted-foreground'}/>
                        </SelectTrigger>
                    </div>
                </div>

                <SelectContent className={'border-none min-w-[3rem]'}>
                    <SelectGroup>
                        <SelectItem value="10" className={'ml-0 pl-0 justify-center'} showCheck={false}>10</SelectItem>
                        <SelectItem value="25" className={'ml-0 pl-0 justify-center'} showCheck={false}>25</SelectItem>
                        <SelectItem value="50" className={'ml-0 pl-0 justify-center'} showCheck={false}>50</SelectItem>
                    </SelectGroup>
                </SelectContent>
                <div className={'mx-2'}>
                    <Typography className={'text-muted-foreground'}>{ startIndex +'-'+ endIndex +' of '+ params.totalItems}</Typography>
                </div>
            </Select>
            <div>
                <IconButton onClick={()=>params.onChangePage(params.currentPage -1)} disabled={params.currentPage === 1}>
                    <GrFormPrevious className={'text-muted-foreground'}/>
                </IconButton>
                <IconButton onClick={()=> params.onChangePage(params.currentPage +1)} disabled={params.currentPage === params.totalPages}>
                    <GrFormNext className={'text-muted-foreground'}/>
                </IconButton>
            </div>
        </div>
    )
}