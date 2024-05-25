import icons from '../../assets/icons/index';

type MenuItem = {
    name: string;
    path: string;
    icon?: string;
};

export const sidebarConfig: MenuItem[] = [
    { name: 'Home', path: '/', icon: icons.Home  },
    { name: 'Cards', path: '/cards', icon: icons.Card},
    { name: 'Payments', path: '/payments' , icon: icons.Payments},
    { name: 'Credit', path: '/credit' , icon: icons.Credit},
    { name: 'Settings', path: '/settings',  icon: icons.Account},
];

export const constants = {
    HEADER_SUB_TEXT: "Trusted way of banking for 3,000+ SMEs and startups in Singapore",
}