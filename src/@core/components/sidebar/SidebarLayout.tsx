'use client'
import {useContext} from "react";
import {SettingsContext} from "@/context/settings-provider";
import {SidebarHeader} from "@/@core/components/sidebar/SidebarHeader";
import {SidebarContent} from "@/@core/components/sidebar/SidebarContent";

export const Sidebar = () => {
    const {settings} = useContext(SettingsContext)

    return (
        <div className="flex flex-col h-screen">
            <div
                className={`md:flex hidden bg-background h-full  ${settings.navCollapsed ? 'w-20 hover:w-72' : 'w-72'} flex-col rounded transition-all duration-500 group`}
            >
                <div className="sticky top-0  z-10 mt-2 ">
                    <SidebarHeader/>
                </div>
                <SidebarContent/>
            </div>
        </div>


    )
}