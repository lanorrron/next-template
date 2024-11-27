"use client"

import * as React from "react"
import {
    ColumnDef,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {ArrowUpDown} from "lucide-react"

import {Checkbox} from "@/components/ui/checkbox"
import {Input} from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {PaginationResponse, UserType} from "@/@fake-db/types";
import {deleteUser, getMockUsers} from "@/@fake-db/table/list";
import Typography from "@/@core/components/typography";
import {useEffect, useState} from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import useDebounce from "@/hooks/useDebounce";
import {PaginationSimple} from "@/components/ui/paginationSimple";
import {Chip} from "@/components/ui/chip";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import IconButton from "@/components/ui/IconButton";
import Link from "next/link";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import {FaRegEdit, FaRegUser} from "react-icons/fa";

function getColorChip(status: string){
    switch (status){
        case 'active':{
            return <Chip label={status} variant={'success'}/>
        }
        case 'inactive':{
            return <Chip label={status} variant={'default'}/>
        }
        case 'pending':{
            return <Chip label={status} variant={'warning'}/>
        }
    }
}
function getIconsByRole(role: string){
    switch (role){
        case 'admin':{
            return <div className={'flex items-center gap-1'}> <MdOutlineAdminPanelSettings size={'22px'} className={'text-red-500'}/> {role}</div>
        }
        case 'editor':{
            return <div className={'flex items-center gap-1'}><FaRegEdit size={'19px'} className={'text-blue-400'}/>{role}</div>
        }
        case 'subscriber':{
            return <div className={'flex items-center gap-1'}><FaRegUser size={'19px'} className={'text-violet-500'}/>{role}</div>
        }
    }
}

function DataTableDemo() {
    const [selectStatus, setSelectStatus] = useState<string>('')
    const [searchUser, setSearchUser] = useState<string>('')
    const [selectRole, setSelectRole] = useState<string>('')
    const [users, setUsers] = useState<PaginationResponse | undefined>(undefined)
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [pageSize, setPageSize] = useState<number>(10)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const searchValueDebounce: string = useDebounce(searchUser,300)
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})


     const columns: ColumnDef<UserType>[] = [
        {
            id: "select",
            header: ({table}) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),

            cell: ({row}) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: 'names',
            header: 'Names',
            cell: ({row}) => (
                <div>{row.getValue('names')}</div>
            )
        },
        {
            accessorKey: "email",
            header: ({column}) => {
                return (
                    <span className={"flex items-center gap-2"}
                          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                    Email
                    <ArrowUpDown size={'20px'}/>
                </span>
                )
            },
            cell: ({row}) => <div className=" capitalize">{row.getValue("email")}</div>,
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({row}) => (
                <div className="capitalize">{getColorChip(row.getValue('status'))} </div>
            ),
        },
        {
            accessorKey: "role",
            header: "Role",
            cell: ({row}) => <div className=" capitalize">{getIconsByRole(row.getValue("role"))}</div>,
        },
        {
            id: "actions",
            header: "Actions",
            enableHiding: false,
            cell: ({row}) => {
                const user = row.original

                return (
                    <div className={'flex text-xl'}>
                        <IconButton onClick={()=>handleDeleteUser(user.id)}>
                            <MdDeleteOutline/>
                        </IconButton>
                        <IconButton >
                            <Link href={'/user/view'}>
                                <MdOutlineRemoveRedEye/>
                            </Link>
                        </IconButton>
                    </div>
                )
            },
        },
    ]

    const table = useReactTable({
        data: users?.items || [],
        columns,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            pagination:{
                pageSize,
                pageIndex:users?.currentPage?? 0
            },
        },
        manualPagination: true
    })
    useEffect(() => {
        let listUsersResponse: PaginationResponse;
        if(!searchUser && !selectStatus && !selectRole){
            listUsersResponse = getMockUsers({pageSize:pageSize, page: currentPage})
        } else{
             listUsersResponse = getMockUsers({
                search: {names: searchValueDebounce, status: selectStatus, role: selectRole},
                 pageSize: pageSize,
                 page: currentPage
            });
        }
        setUsers(listUsersResponse);
        setCurrentPage(listUsersResponse.currentPage)
    }, [searchValueDebounce,selectStatus, selectRole, pageSize, currentPage]);

    async function handleDeleteUser(id: number){
        const params = {       search: {names: searchValueDebounce, status: selectStatus, role: selectRole},
            pageSize: pageSize,
            page: currentPage}
        const updateData = await deleteUser(id,params)
        setUsers(updateData)
    }


    return (
        <div className="w-full overflow-hidden bg-card rounded  ">
            <div className="flex py-4 flex-col px-2 gap-4 ">
                <Typography variant={'h4'}>
                    Filters
                </Typography>
                <div className={'grid grid-cols-1 sm:grid-cols-3 justify-between gap-2'}>
                    <Input label={'Search By names'}
                           value={searchUser}
                           onChange={(event) =>
                               setSearchUser(event.target.value)
                           }
                    />
                    <Select onValueChange={(value) => setSelectStatus(value)}>
                        <SelectTrigger className={'text-muted-foreground '}>
                            <SelectValue placeholder="Select a Status"/>
                        </SelectTrigger>
                        <SelectContent className={'border-none'}>
                            <SelectGroup>
                                <SelectLabel>Status</SelectLabel>
                                <SelectItem value=" ">All</SelectItem>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="inactive">Inactive</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select onValueChange={(value) => setSelectRole(value)}>
                        <SelectTrigger className={'text-muted-foreground '}>
                            <SelectValue placeholder="Select a Role"/>
                        </SelectTrigger>
                        <SelectContent className={'border-none'}>
                            <SelectGroup>
                                <SelectLabel>Role</SelectLabel>
                                <SelectItem value=" ">All</SelectItem>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="editor">Editor</SelectItem>
                                <SelectItem value="viewer">Viewer</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="rounded-md">
                <Table>
                    <TableHeader className={'bg-accent/90 '}>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className={'border-input border-b'}>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between gap-2 transparent-scrollbar">
                <Typography className="text-sm text-muted-foreground flex-shrink-0 whitespace-nowrap">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </Typography>
                <div className="flex-shrink-0 whitespace-nowrap">
                    <PaginationSimple
                        totalItems={users?.totalItems || 0}
                        pageSize={pageSize}
                        onChangeRowsPerPage={(value) => setPageSize(Number(value))}
                        onChangePage={(value) => setCurrentPage(value)}
                        currentPage={currentPage}
                        totalPages={users?.totalPage || 0}
                    />
                </div>
            </div>


        </div>
    )
}

export default DataTableDemo