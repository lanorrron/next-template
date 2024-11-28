import {Card} from "@/components/ui/card";
import {getUserById} from "@/@fake-db/table/list";
import Image from 'next/image'
import {Chip} from "@/components/ui/chip";
import Typography from "@/@core/components/typography";
import {MdDone} from "react-icons/md";
import {BiBriefcase} from "react-icons/bi";
import {Button} from "@/components/ui/button";
import { FaRegEdit } from "react-icons/fa";

export const UserInfo = () => {
    const user = getUserById(3)

    if (!user) {
        return <Card className={'flex justify-center text-red-500'}> user Not found</Card>
    }

    return (
        <Card>
            <div className={'flex flex-col items-center px-4 py-4 gap-4 '}>
                <Image src={`${user.avatar}`} alt="user image" width={150} height={150} className={'rounded'}/>
                <Typography variant={'subtitle2'}>{user.names}</Typography>
                <div>
                    <Chip variant={'info'} label={user.role}/>
                </div>
            </div>
            <div className={'flex flex-wrap gap-3 justify-around mx-4 sm:flex-nowrap overflow-hidden'}>
                <div className={'flex gap-3 items-center'}>
                    <span className={'bg-primary/15 text-primary p-4 rounded text-xl'}><MdDone/></span>
                    <div className={'flex flex-col'}>
                        <Typography variant={'h4'} className={'font-semibold'}>403</Typography>
                        <Typography>Task Done</Typography>
                    </div>
                </div>
                <div className={'flex gap-3 items-center'}>
                    <span className={'bg-primary/15 text-primary p-4 rounded text-xl'}><BiBriefcase/></span>
                    <div className={'flex flex-col'}>
                        <Typography variant={'h4'} className={'font-semibold'}>149</Typography>
                        <Typography>Projects Done</Typography>
                    </div>
                </div>
            </div>
            <div className={'whitespace-nowrap px-4 pb-4 overflow-hidden'}>
                <div className={'flex border-b my-4 border-muted-foreground'}>
                    <Typography variant={'subtitle1'} className={'mb-4'}>Details</Typography>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <div className={'space-x-2'}>
                        <Typography>Name:</Typography>
                        <Typography variant={'body2'}>{user.names}</Typography>
                    </div>
                    <div className={'space-x-2'}>
                        <Typography>Email:</Typography>
                        <Typography variant={'body2'}>{user.email}</Typography>
                    </div>
                    <div className={'space-x-2'}>
                        <Typography>Date of Birth:</Typography>
                        <Typography variant={'body2'}>{user.date_of_birth}</Typography>
                    </div>
                    <div className={'space-x-2'}>
                        <Typography>Status:</Typography>
                        <Typography variant={'body2'}>{user.status}</Typography>
                    </div>
                    <div className={'space-x-2'}>
                        <Typography>Contact:</Typography>
                        <Typography variant={'body2'}>{user.phone_number}</Typography>
                    </div>
                    <div className={'space-x-2'}>
                        <Typography>Country:</Typography>
                        <Typography variant={'body2'}>{user.country}</Typography>
                    </div>
                    <div className={'space-x-2'}>
                        <Typography>Direction:</Typography>
                        <Typography variant={'body2'}>{user.direction}</Typography>
                    </div>
                    <div className={'flex justify-center'}>
                        <Button>
                            Edit
                            <FaRegEdit></FaRegEdit>
                        </Button>
                    </div>

                </div>
            </div>
        </Card>
    )
}