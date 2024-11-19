import {Sidebar} from "@/@core/components/sidebar/SidebarLayout";
import Header from "@/@core/components/header/Header";

export default function LayoutDashboard({children}: { children: React.ReactNode }) {
    return (
            <div className="relative z-0 flex h-screen w-full gap-3">
                <Sidebar/>
                <div className="flex-1 overflow-auto mr-3" id="scrollContainer">
                   <Header></Header>
                    <div className="flex">
                        <div className="overflow-auto flex-1 flex-wrap mt-2">{children}</div>
                    </div>
                </div>
            </div>
    )
}