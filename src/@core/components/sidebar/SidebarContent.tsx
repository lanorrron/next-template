import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { SettingsContext } from "@/context/settings-provider";
import Typography from "@/@core/components/typography";
import { Navigation } from "@/navigation/Navigation";

export const SidebarContent = () => {
    const menu = Navigation();
    const pathName = usePathname();
    const { settings } = useContext(SettingsContext);
    const [openSubMenu, setOpenSubMenu] = useState<number | null>(null); // Estado para controlar submenús

    const toggleSubMenu = (index: number) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };

    return (
        <div className="flex-grow p-2 overflow-y">
            <div className="my-0 mx-auto items-center">
                <ul className={'pt-2'}>
                    {menu.map((item, index) => (
                        <div key={index}>
                            {/* Verificar si el item tiene un path antes de renderizar Link */}
                            {item.path ? (
                                <Link href={item.path}
                                      className={`group flex p-2 m-2 rounded ${pathName === item.path ? 'bg-primary' : 'hover:bg-accent'} relative`}>
                                    <div className={`${pathName === item.path ? 'text-white' : ''} flex items-center`}>
                                        <Typography variant={'h3'} className={`${settings.navCollapsed ? 'ml-1' : ''}`}>
                                            {item.icon && <item.icon />} {/* Verificar si tiene un icono */}
                                        </Typography>
                                        <Typography variant={pathName === item.path ? 'h6' : 'body1'}
                                                    className={`ml-2 ${settings.navCollapsed ? 'hidden group-hover:block transition-all duration-500' : ''}`}>
                                            {item.title}
                                        </Typography>
                                        {/* Renderizar el icono del submenú solo si hay submenú */}
                                        {item.subMenuItems && (
                                            <Typography className={'absolute right-2 text-center'} variant={'h3'}>
                                                <MdOutlineKeyboardArrowRight
                                                    className={`${openSubMenu === index ? 'rotate-90' : ''}`}
                                                    onClick={() => toggleSubMenu(index)}
                                                />
                                            </Typography>
                                        )}
                                    </div>
                                </Link>
                            ) : (
                                // Si no hay path, renderizar solo el título y el ícono
                                <div className={`group flex p-2 m-2 rounded ${item.subMenuItems ? 'cursor-pointer hover:bg-accent' : ''} relative`}>
                                    <div className="flex items-center" onClick={()=> toggleSubMenu(index)}>
                                        <Typography variant={'h3'} className={`${settings.navCollapsed ? 'ml-1' : ''}`}>
                                            {item.icon && <item.icon />}
                                        </Typography>
                                        <Typography variant={'body1'} className={`ml-2 ${settings.navCollapsed ? 'hidden group-hover:block transition-all duration-500' : ''}`}>
                                            {item.title}
                                        </Typography>
                                        {item.subMenuItems && (
                                            <Typography className={'absolute right-2 text-center'} variant={'h3'}>
                                                <MdOutlineKeyboardArrowRight
                                                    className={`${openSubMenu === index ? 'rotate-90' : ''}`}
                                                />
                                            </Typography>
                                        )}
                                    </div>
                                </div>
                            )}

                            {item.subMenuItems && openSubMenu === index && (
                                <ul>
                                    {item.subMenuItems.map((subItem, subIndex) => (
                                        <li key={subIndex}
                                            className={'text-foreground text-sm flex items-center gap-x-4 cursor-pointer p-2 m-2 rounded-md ml-7 hover:bg-accent'}>
                                            {subItem.path ? (
                                                <Link href={subItem.path}>
                                                    <Typography variant={'body1'}>
                                                        {subItem.title}
                                                    </Typography>
                                                </Link>
                                            ) : (
                                                <Typography>
                                                    {subItem.title}
                                                </Typography>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};
