type MenuItem = {
    name: string;
    path: string;
};

export const sidebarConfig: MenuItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Cards', path: '/cards' },
    { name: 'Payments', path: '/payments' },
    { name: 'Credit', path: '/credit' },
    { name: 'Settings', path: '/settings' },
];
