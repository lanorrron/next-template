import Link from "next/link";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {usePathname} from "next/navigation";
import {useContext, useState} from "react";
import {SettingsContext} from "@/context/settings-provider";
import Typography from "@/@core/components/typography";
import {Navigation} from "@/navigation/Navigation";

export  const SidebarContent = ()=>{
    const menu = Navigation();
    const pathName = usePathname()
    const {settings}= useContext(SettingsContext)
    const [openSubMenu, setOpenSubMenu] = useState<boolean>(false)


    return (
        <div className="flex-grow p-2 overflow-y">
            <div className="my-0 mx-auto items-center"> {/* Ajusta este valor según tu diseño */}
                <ul className={'pt-2'}>
                    {menu.map((item, index) => (
                        <div key={index}>
                            <Link key={index} href={item.path}
                                  className={`group flex p-2  m-2 rounded ${pathName === item.path ? 'bg-primary' : 'hover:bg-accent'} relative`}>
                                <div className={`${pathName === item.path ? ' text-white' : ''} flex  items-center `}>
                                    <Typography variant={'h3'} className={`${settings.navCollapsed ? 'ml-1' : ''}`}>{
                                        <item.icon/>}</Typography>
                                    <Typography variant={`${pathName === item.path ? 'h6' : 'body1'}`}
                                                className={`ml-2 ${settings.navCollapsed ? 'hidden group-hover:block transition-all duration-500' : ''}`}>{item.title}</Typography>
                                    <Typography className={'absolute right-2 text-center'} variant={'h3'}>
                                        {item.subMenuItems && (
                                            <MdOutlineKeyboardArrowRight
                                                className={`${openSubMenu && 'rotate-90'}`}
                                                onClick={() => setOpenSubMenu(!openSubMenu)}/>)}
                                    </Typography>

                                </div>

                            </Link>
                            {(item.subMenuItems && openSubMenu) && (
                                <ul>
                                    {item.subMenuItems?.map((item, index) => (
                                        <li key={index}
                                            className={'text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ml-7'}>
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>
                    ))}
                </ul>
            </div>
        </div>

    )
}