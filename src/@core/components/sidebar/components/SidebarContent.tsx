import Link from "next/link";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {usePathname} from "next/navigation";
import {useContext, useEffect, useState} from "react";
import {SettingsContext} from "@/context/settings-provider";
import Typography from "@/@core/components/typography";
import {Navigation} from "@/navigation/Navigation";
import {TbPointFilled} from "react-icons/tb";

interface Props {
    onClose?: () => void
    isOpenDrawer?: boolean
}

export const SidebarContent = ({onClose, isOpenDrawer}: Props) => {
    const menu = Navigation();
    const pathName = usePathname();
    const {settings} = useContext(SettingsContext);
    const [openSubMenus, setOpenSubMenus] = useState<number[]>([]);

    useEffect(() => {
        const activeIndex = menu.findIndex((item) =>
            item.subMenuItems?.some((subItem) => subItem.path === pathName)
        );
        if (activeIndex !== -1) {
            setOpenSubMenus([activeIndex]);
        } else {
            setOpenSubMenus([])
        }
    }, [pathName]);

    const toggleSubMenu = (index: number) => {
        setOpenSubMenus(prev => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index);
            } else {
                return [...prev, index];
            }
        });
    };
    const ellipsisTextClass ='whitespace-nowrap text-ellipsis overflow-hidden max-w-[200px]'

    return (
        <div className="flex-grow p-2 transparent-scrollbar">
            <div className="my-0 items-center overflow-hidden">
                <ul className={'pt-2'}>
                    {menu.map((item, index) => (
                        <div key={index}>
                            {/* Verificar si el item tiene un path antes de renderizar Link */}
                            {item.path ? (
                                <Link href={item.path} onClick={onClose}
                                      className={`group flex p-2 my-2 pl-3.5 rounded ${pathName === item.path ? 'bg-primary' : 'hover:bg-accent'} relative`}>
                                    <div className={`${pathName === item.path ? 'text-white' : ''} flex items-center`}>
                                        <Typography variant={'h3'} className={'flex justify-center'}>
                                            {item.icon && <item.icon/>} {/* Verificar si tiene un icono */}
                                        </Typography>
                                        <div
                                            className={`ml-2 ${(settings.navCollapsed && !isOpenDrawer) && 'hidden group-hover:block transition-all duration-500'} ${isOpenDrawer && 'block'} ${ellipsisTextClass}`}>
                                            <Typography variant={pathName === item.path ? 'h6' : 'body1'}
                                            >
                                                {item.title}
                                            </Typography>

                                            {/* Renderizar el icono del submenú solo si hay submenú */}
                                            {item.subMenuItems && (
                                                <Typography className={'absolute right-2 text-center'} variant={'h3'}>
                                                    <MdOutlineKeyboardArrowRight
                                                        className={`${openSubMenus.includes(index) ? 'rotate-90' : ''}`}
                                                        onClick={() => toggleSubMenu(index)}
                                                    />
                                                </Typography>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                // Si no hay path, renderizar solo el título y el ícono
                                <div
                                    className={`group flex p-2 my-2 pl-3.5 rounded ${openSubMenus.includes(index) ? 'bg-accent' : ''} ${item.subMenuItems ? 'cursor-pointer hover:bg-accent' : ''}  relative`}
                                    onClick={() => toggleSubMenu(index)}>
                                    <div className="flex items-center">
                                        <Typography variant={'h3'}>
                                            {item.icon && <item.icon/>}
                                        </Typography>
                                        <div
                                            className={`ml-2 ${(settings.navCollapsed && !isOpenDrawer ) && 'hidden group-hover:block transition-all duration-500'} ${isOpenDrawer && 'block'} ${ellipsisTextClass}`}>
                                            <Typography variant={'body1'}>
                                                {item.title}
                                            </Typography>
                                            {item.subMenuItems && (
                                                <Typography className={`absolute right-2 text-center`} variant={'h3'}>
                                                    <MdOutlineKeyboardArrowRight
                                                        className={`${openSubMenus.includes(index) ? 'rotate-90' : ''}`}
                                                    />
                                                </Typography>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {item.subMenuItems && openSubMenus.includes(index) && (
                                <ul className={`${(settings.navCollapsed && !isOpenDrawer) && ' hidden group-hover:block'} ${isOpenDrawer && 'block'}`}>
                                    {item.subMenuItems.map((subItem, subIndex) => (
                                        <Link href={subItem.path} key={subIndex} onClick={onClose}>
                                            <li key={subIndex}
                                                className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 my-2 rounded-md   ${openSubMenus.includes(index) && pathName === subItem.path ? 'bg-primary' : 'hover:bg-accent'}`}>
                                                <TbPointFilled/>
                                                <Typography variant={'body1'} className={`${ellipsisTextClass}`}>
                                                    {subItem.title}
                                                </Typography>
                                            </li>
                                        </Link>
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
