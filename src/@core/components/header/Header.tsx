'use client'
import {useContext, useEffect, useState} from "react";
import {IoMdMenu} from "react-icons/io";
import {SettingsContext} from "@/context/settings-provider";
import {SidebarHeader} from "@/@core/components/sidebar/components/SidebarHeader";
import {SidebarContent} from "@/@core/components/sidebar/components/SidebarContent";
import Drawer from "@/@core/components/sidebar/components/Drawer";
import {ModeToggle} from "@/@core/components/header/components/ThemeDropdown";
import {ProfileDropdown} from "@/@core/components/header/components/ProfileDropdown";
import {NotificationsDropdown} from "@/@core/components/header/components/NotificationsDropdown";
import {NavigationSearch} from "@/@core/components/header/components/NavigationSearch";

const Header = () => {
    const {settings} = useContext(SettingsContext)
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const handleChangeOpenDrawer=()=> {
        setOpenDrawer(!openDrawer)

    }

    useEffect(() => {

        const container = document.getElementById('scrollContainer');

        if (container) {
            const handleScroll = () => {
                const div = document.getElementById('myDiv');
                if (container.scrollTop > 10) {
                    div?.classList.add('px-4', 'transition-all', 'shadow-lg', 'duration-500', 'bg-card'); // Cambia color de fondo a rojo
                } else {
                    div?.classList.remove('shadow-lg', 'px-4', 'bg-card'); // Remueve el color rojo
                }
            };

            container.addEventListener('scroll', handleScroll);

            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        } else {
            console.error("El contenedor 'scrollContainer' no se encontró.");
        }
    }, []);

    return (
        <div id="myDiv"
             className="sticky top-0 h-16 bg-background rounded transition-all p-2 grid grid-cols-3 items-center z-10">
            <div className="col-start-1 flex justify-start items-center gap-2 ">
                {settings.navHidden && (
                    <div>
                        <IoMdMenu onClick={handleChangeOpenDrawer} className={'cursor-pointer text-2xl'}/>
                        <Drawer onClose={handleChangeOpenDrawer} isOpen={openDrawer} classNameContent={'w-80'}>
                                <SidebarHeader isOpenDrawer={openDrawer} onClose={handleChangeOpenDrawer}/>
                                <SidebarContent onClose={handleChangeOpenDrawer} isOpenDrawer={openDrawer}/>
                        </Drawer>
                    </div>
                )}
                <NavigationSearch/>
            </div>
            <div className="col-start-3 flex justify-end gap-2">
                <ModeToggle/>
                <NotificationsDropdown/>
                <ProfileDropdown/>
            </div>
        </div>
    )
}
export default Header;
