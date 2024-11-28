'use client'
import {useContext} from "react";
import {SettingsContext} from "@/context/settings-provider";
import {SidebarHeader} from "@/@core/components/sidebar/components/SidebarHeader";
import {SidebarContent} from "@/@core/components/sidebar/components/SidebarContent";

export const Sidebar = () => {
    const {settings} = useContext(SettingsContext)

    return (
        <div className="flex flex-col h-screen">
            <div
                className={`lg:flex hidden bg-background h-full  ${settings.navCollapsed ? 'w-20 hover:w-72' : 'w-72'} flex-col rounded transition-all duration-500 ease-in-out group`}
            >
                <div className="sticky top-0  z-10 mt-2 ">
                    <SidebarHeader/>
                </div>
                <SidebarContent/>
            </div>
        </div>


    )
}