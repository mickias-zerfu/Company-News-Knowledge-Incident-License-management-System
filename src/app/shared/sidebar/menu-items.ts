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
    path: '/resources',
    title: 'Resource Sharing',
    icon: 'folder',
    class: '',
    extralink: false,
    submenu: [
      {
        path: '/resources',
        title: 'Status',
        icon: 'tonality',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
      {
        path: '/resources/managenews',
        title: 'News and Events',
        icon: 'event',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
      {
        path: '/resources/managefiles',
        title: 'File Sharing',
        icon: 'insert_drive_file',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
      {
        path: '/resources/manageincidents',
        title: 'Incident Tracking',
        icon: 'bug_report',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
      {
        path: '/resources/manageknowledges',
        title: 'Knowledge Base',
        icon: 'info',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
      {
        path: '/resources/categories',
        title: 'Category',
        icon: 'category',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
    ]
  },
  {
    path: '/licenses',
    title: 'License Management',
    icon: 'alarm',
    class: '',
    extralink: false,
    submenu: [
      {
        path: '/licenses/',
        title: 'Reports',
        icon: 'tonality',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
      {
        path: '/licenses/lists',
        title: 'License Lists',
        icon: 'grid_on',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
      {
        path: '/licenses/users',
        title: 'Users',
        icon: 'portrait',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
      {
        path: '/licenses/products',
        title: 'Software / Products',
        icon: 'computer',
        class: 'sub-menu',
        extralink: false,
        submenu: []
      },
    ]
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
