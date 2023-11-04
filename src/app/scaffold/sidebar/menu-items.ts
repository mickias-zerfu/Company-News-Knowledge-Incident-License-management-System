import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'dashboard',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/transactions',
    title: 'Transactions',
    icon: 'people',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/service',
    title: 'Service',
    icon: 'event',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/user-management',
    title: 'User Management',
    icon: 'folder',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/about',
    title: 'Help',
    icon: 'developer_board',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/signout',
    title: 'Sign out',
    icon: 'exit_to_app',
    class: '',
    extralink: false,
    submenu: []
  }
];
