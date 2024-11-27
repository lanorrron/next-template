'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {IoMdNotificationsOutline} from "react-icons/io";
import {Button} from "@/components/ui/button";
import * as React from "react";
import Typography from "@/@core/components/typography";
import {Chip} from "@/components/ui/chip";
import {RiMailOpenLine} from "react-icons/ri";
import {useState} from "react";
import {IoIosClose} from "react-icons/io";
import {TbPointFilled} from "react-icons/tb";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

type NotificationType ={
    id: number;
    title: string;
    description: string;
    dateTime:string;
    image: string;
    status: 'new' | 'read';
}

export const NotificationsDropdown = () => {
    const [notifications, setNotifications] = useState<NotificationType[] >([
        {
            id: 1,
            title: 'New User Signup',
            description: 'Juan Pérez joined the platform.',
            dateTime: '1 hr ago',
            image: '/avatars/man-1.jpg',
            status: 'new'
        },
        {
            id: 2,
            title: 'Payment Processed',
            description: 'Invoice #12345 paid successfully.',
            dateTime: '5 hr ago',
            image: 'https://cdn.icon-icons.com/icons2/3188/PNG/512/payment_icon_194171.png',
            status: 'new'
        },
        {
            id: 3,
            title: 'System Error',
            description: 'Payment API error encountered.',
            dateTime: '12 hr ago',
            image: '',
            status: 'new'
        },
        {
            id: 4,
            title: 'Settings Updated',
            description: 'Admin updated notification settings.',
            dateTime: '2023-11-13 17:00',
            image: 'https://icons-for-free.com/iff/png/512/gear+machine+office+radio+settings+setting+settings+icon-1320183166217702456.png',
            status: 'read'
        },
        {
            id: 5,
            title: 'Support Request',
            description: 'User needs help with billing module.',
            dateTime: '2023-11-13 15:45',
            image: '',
            status: 'read'
        },
        {
            id: 6,
            title: 'Report Generated',
            description: 'Monthly activity report ready.',
            dateTime: '2023-11-13 14:20',
            image: '',
            status: 'new'
        },
        {
            id: 7,
            title: 'Profile Update',
            description: 'Carlos Mendoza updated profile.',
            dateTime: '2023-11-12 20:30',
            image: '',
            status: 'read'
        },
        {
            id: 8,
            title: 'Backup Complete',
            description: 'Daily system backup successful.',
            dateTime: '2023-11-12 03:00',
            image: '',
            status: 'read'
        }
    ])

    const countNewNotifications = notifications.filter(notification => notification.status === 'new').length
    const isAllNotificationRead: boolean = notifications.every(notifications=> notifications.status ==='read')
    const existNewNotifications: boolean = notifications.some(notification => notification.status === 'new')
    function removeNotification(id: number, e: React.MouseEvent) {
        e.stopPropagation()
        setNotifications((prevNotification) =>
            prevNotification.filter((notification) => notification.id !== id))
    }
    function markAllAs(status: 'read' | 'new'){
        setNotifications((prevNotifications)=>
        prevNotifications.map(notification =>({...notification, status})))
    }

    return (
        <div >
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" color={'inherit'}
                            className={'hover:rounded-full focus:invisible relative'}>
                        <IoMdNotificationsOutline className="h-[1.6rem] w-[1.6rem]"/>
                        {existNewNotifications &&
                            <span className="absolute top-2 right-2 h-[0.5rem] w-[0.5rem] rounded-full bg-red-500"></span>
                        }
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className={'border-none'} style={{maxHeight: '40rem'}}>
                    <div className={'border-b mb-2 w-full flex items-center justify-between '}>
                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                        <div className={'flex items-center'}>
                            <Chip variant={'success'} label={`${countNewNotifications} New`}/>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger className={'rounded-full p-2 hover:bg-accent'}
                                                    onClick={() => markAllAs(isAllNotificationRead ? 'new' : 'read')}>
                                        <RiMailOpenLine size={'20px'}/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{isAllNotificationRead ? 'Mark all as unread' : 'Mark all as read'}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                    <div className={'transparent-scrollbar'} style={{maxHeight: '25rem'}}>
                        {notifications.map((item, index) => (
                            <DropdownMenuItem key={index} className={'group'}>
                                <div className={'flex flex-row items-center justify-between gap-2'}>
                                    {
                                        item.image ?
                                            <img src={item.image} alt={item.description} width={40} height={40}
                                                 className={'rounded-full'}/> :
                                            <div className={'rounded-full p-2 bg-muted'}>
                                                <Typography variant={'h6'}>
                                                    {item.title.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()}
                                                </Typography>
                                            </div>
                                    }
                                    <div className={'flex flex-col'}>
                                        <Typography variant={'subtitle2'}>{item.title}</Typography>
                                        <Typography variant={'body2'}
                                                    className={'text-muted-foreground'}>{item.description}</Typography>
                                        <Typography variant={'body2'}
                                                    className={'text-muted-foreground'}>{item.dateTime}</Typography>
                                    </div>
                                </div>
                                <div className={'flex flex-col ml-auto'}>
                                    {
                                        item.status === 'new' && (
                                            <div>
                                                <TbPointFilled className={'text-primary'}></TbPointFilled>
                                            </div>
                                        )
                                    }

                                    <div
                                        className={'opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'}>
                                        <IoIosClose onClick={(e) => removeNotification(item.id, e)}
                                                    style={{pointerEvents: "auto"}}></IoIosClose>
                                    </div>
                                </div>

                            </DropdownMenuItem>
                        ))}
                    </div>
                    <div className={'mt-2 sticky'}>
                        <Button className={'w-full'}>View All Notifications</Button>
                    </div>

                </DropdownMenuContent>

            </DropdownMenu>
        </div>
    )
}