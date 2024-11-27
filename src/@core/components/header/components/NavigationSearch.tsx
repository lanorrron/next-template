'use client'
import {
    DialogContent,
    DialogTrigger,
    Dialog,
    DialogTitle,
    DialogHeader,
    DialogDescription
} from "@/components/ui/dialog";
import IconButton from "@/components/ui/IconButton";
import {AiOutlineSearch} from "react-icons/ai";
import Typography from "@/@core/components/typography";
import {useState} from "react";
import {Navigation} from "@/navigation/Navigation";
import {MenuTypes} from "@/navigation/types";
import Link from "next/link";

export const NavigationSearch = () => {
    const [itemToSearch, setItemToSearch] = useState<string>('')
    const navigationOriginal = Navigation()
    const [navigationMenu, setNavigationMenu] = useState<MenuTypes>(navigationOriginal)

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.toLowerCase().trim()
        setItemToSearch(value)
        const navigationItems = navigationOriginal.filter(item => item.title.toLowerCase().includes(value))
        setNavigationMenu(navigationItems)
    }

    return (
        <Dialog>
            <DialogTrigger asChild className={'cursor-pointer'}>
                <div className={'flex items-center'}>
                    <IconButton>
                        <AiOutlineSearch className={'text-2xl'}/>
                    </IconButton>
                    <div className={'hidden sm:block'}>
                        <Typography className={'text-muted-foreground m-1 text-lg flex-shrink-0'}>Search</Typography>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className={'min-h-[300px] max-h-[600px] transparent-scrollbar flex flex-col'}>
                <DialogHeader>
                    <DialogTitle className={'flex justify-center items-center gap-2 mt-2 border-b'}>
                        <AiOutlineSearch className={'text-3xl'}/>
                        <input value={itemToSearch} onChange={handleSearch}
                               className={'bg-background focus:outline-none w-full text-sm'}></input>
                        <DialogDescription/>
                    </DialogTitle>
                </DialogHeader>
                <div
                    className={`grid gap-4 ${
                        navigationMenu.length > 5 ? "grid-cols-2" : "grid-cols-1"
                    } justify-start`}
                >
                    {navigationMenu.map((item, index) => (
                        <Link  href={item.path??''} key={index} className={'flex items-center gap-2 cursor-pointer'}>
                                {item.icon && <item.icon/>}
                                {item.title}
                        </Link>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}