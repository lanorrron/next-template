'use client'
import {SiTailwindcss} from "react-icons/si";
import {MdKeyboardDoubleArrowLeft} from "react-icons/md"
import {useContext} from "react";
import { IoMdClose } from "react-icons/io";
import Typography from "@/@core/components/typography";
import {SettingsContext} from "@/context/settings-provider";

interface Props{
    isOpenDrawer?: boolean;
    onClose?:()=> void
}
export const SidebarHeader = ({isOpenDrawer,onClose}:Props) => {
    const { settings, saveSettings } = useContext(SettingsContext);

    function toggleNavCollapse () {
        saveSettings({ ...settings, navCollapsed: !settings.navCollapsed });
    }

    return (
        <div className="px-2 mt-2 flex items-center relative group">
            <Typography variant={'h1'} className={`text-primary ml-2 ${settings.navCollapsed? 'ml-3':''}`}><SiTailwindcss/></Typography>
            <Typography variant={'h5'} className={`${settings.navCollapsed && 'hidden group-hover:block transition-all duration-500'} ml-2`}>HelloWorld</Typography>
            <Typography variant={'h4'} className={'absolute right-4 cursor-pointer'}>
                {isOpenDrawer?
                    <IoMdClose onClick={onClose}/>:
                    <MdKeyboardDoubleArrowLeft className={`${settings.navCollapsed?'transform rotate-180':'' } ${settings.navCollapsed && 'hidden group-hover:block transition-all duration-500'}`} onClick={()=>toggleNavCollapse()}/>

                }
            </Typography>
        </div>
    )
}