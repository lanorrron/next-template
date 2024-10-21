interface SubMenuItem  {
    title: string;
    path: string;
    action? : string;
    subject? : string;
    icon?: any;
}

interface MenuItem {
    title: string;
    path?: string;
    action? : string;
    subject? : string;
    icon: any;
    subMenuItems?: SubMenuItem[];
}
export type MenuTypes = MenuItem[];