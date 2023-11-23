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
    icon: 'money',
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
    icon: 'people',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/checklist',
    title: 'Daily Checklist',
    icon: 'checklist',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/resources',
    title: 'Resource Sharing',
    icon: 'folder',
    class: '',
    extralink: false,
    submenu: [

      {
        path: '',
        title: 'Status',
        icon: 'tonality',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
      {
        path: '/resourceList',
        title: 'Available Resources',
        icon: 'list',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
      {
        path: '/categories',
        title: 'Category',
        icon: 'category',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
    ]
  },
  {
    path: '/licences',
    title: 'License Management',
    icon: 'alarm',
    class: '',
    extralink: false,
    submenu: [
      {
        path: '/licences',
        title: 'Reports',
        icon: 'tonality',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
      {
        path: '/lists',
        title: 'License Lists',
        icon: 'grid_on',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
      {
        path: '/',
        title: 'Users',
        icon: 'portrait',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
      {
        path: '/vendors',
        title: 'Vendors',
        icon: 'computer',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
    ]
  },
  {
    path: '/help',
    title: 'Help',
    icon: 'help',
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
