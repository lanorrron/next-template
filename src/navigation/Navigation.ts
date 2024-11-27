import {MenuTypes} from "@/navigation/types";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { PiChatsBold } from "react-icons/pi";
import { MdOutlineCastForEducation } from "react-icons/md";

export const Navigation = (): MenuTypes => {
    let routes = []
    routes = [
        {
            title: 'Dashboard',
            path: '/dashboard',
            icon: MdOutlineDashboard
        },
        {
            title: 'User',
            icon: FaRegUser,
            subMenuItems: [
                {
                    title: 'List',
                    path: '/user/list',
                },
                {
                    title: 'View',
                    path: '/user/view'
                }
            ]
        },
       {
            title: 'Chats',
            path: '/',
            icon: PiChatsBold,
        },
        {
            title: 'Courses',
            icon: MdOutlineCastForEducation,
            subMenuItems: [
                {
                    title: 'React',
                    path: '/',
                },
                {
                    title: 'Next',
                    path: '/login',
                },
                {
                    title: 'Angular',
                    path: '/',
                }
            ]
        },
    ]

    return routes
}