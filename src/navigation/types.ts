import {IconType} from "react-icons";

interface SubMenuItem  {
    title: string;
    path: string;
    action? : string;
    subject? : string;
    icon?: IconType;
}

interface MenuItem {
    title: string;
    path?: string;
    action? : string;
    subject? : string;
    icon: IconType;
    subMenuItems?: SubMenuItem[];
}
export type MenuTypes = MenuItem[];