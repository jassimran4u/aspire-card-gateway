import icons from '../../assets/icons/index';

type MenuItem = {
    name: string;
    path: string;
    icon?: string;
};

export const sidebarConfig: MenuItem[] = [
    { name: 'Home', path: '/', icon: icons.home  },
    { name: 'Cards', path: '/cards', icon: icons.cardLogo},
    { name: 'Payments', path: '/payments' , icon: icons.payments},
    { name: 'Credit', path: '/credit' , icon: icons.credit},
    { name: 'Settings', path: '/settings',  icon: icons.account},
];

export const constants = {
    HEADER_SUB_TEXT: "Trusted way of banking for 3,000+ SMEs and startups in Singapore",
}