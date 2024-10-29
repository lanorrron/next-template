'use client'
import {Sidebar} from "@/@core/components/sidebar/SidebarLayout";
import Header from "@/@core/components/header/Header";
import {useAuth} from "@/hooks/useAuth";
import {redirect} from "next/navigation";

export default function LayoutDashboard({children}: { children: React.ReactNode }) {
    const {isAuthenticated} = useAuth()
    if (!isAuthenticated) {
        redirect('/login')
    }
    return (
            <div className="relative z-0 flex h-screen w-full gap-3">
                <Sidebar/>
                <div className="flex-1 overflow-auto mr-3" id="scrollContainer">
                   <Header></Header>
                    <div className="flex">
                        <div className="overflow-auto flex flex-wrap mt-2">{children}</div>
                    </div>
                </div>
            </div>
    )
}