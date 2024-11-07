import {MenuTypes} from "@/navigation/types";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdIntegrationInstructions } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
export const Navigation = (): MenuTypes => {
    let routes = []
    routes = [
        {
            title: 'Dashboard',
            path: '/dashboard',
            icon: MdDashboard
        },
        {
            title: 'Clients',
            path: '/users',
            icon: FaUser
        },
        {
            title: 'Bots',
            path: '/',
            icon: FaRobot,
        },
        {
            title: 'Integrations',
            icon: MdIntegrationInstructions,
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