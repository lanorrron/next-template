import Image from 'next/image';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import * as React from "react";
import {useAuth} from "@/hooks/useAuth";
import Typography from "@/@core/components/typography";
import { MdPermIdentity } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import {Button} from "@/components/ui/button";
import { IoIosLogOut } from "react-icons/io";
export const Profile = () => {
    const {user,logout} = useAuth()

    function handleLogout (){
        logout()
    }

    return (
        <div className={'flex justify-center items-center'}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Image src="/avatars/man-2.jpg" alt="profile image" width={40} height={40}
                           className={'rounded-full cursor-pointer'}/>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className={'border-none'}>
                    <div className={'flex flex-row items-center justify-between gap-2 p-2 border-b mb-2'}>
                        <Image src="/avatars/man-2.jpg" alt="profile image" width={40} height={40}
                               className={'rounded-full'}/>
                        <div className={'flex flex-col'}>
                            <Typography variant={'body1'}>{user?.name + ' ' + user?.last_name}</Typography>
                            <Typography variant={'body2'}>{user?.email}</Typography>
                        </div>
                    </div>
                    <div className={'m-2'}>
                        <DropdownMenuItem>
                            <MdPermIdentity/>
                            <Typography variant={'body2'}>My profile</Typography>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <IoSettingsOutline/>
                            <Typography variant={'body2'}>Settings</Typography>
                        </DropdownMenuItem>
                        <Button color={'error'} className={'w-full h-8 mt-2'} onClick={()=> handleLogout()}>
                            <div className={'flex items-center justify-center gap-2'}>
                                <Typography variant={'body1'}>
                                    Logout
                                </Typography>
                                <IoIosLogOut size={'20px'} className={'font-semibold'}/>
                            </div>

                        </Button>
                    </div>

                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}