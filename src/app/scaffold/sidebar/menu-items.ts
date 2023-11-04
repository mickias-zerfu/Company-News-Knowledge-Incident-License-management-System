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
    path: '/blogs-management',
    title: 'Blogs Management',
    icon: 'people',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/events-management',
    title: 'Event Management',
    icon: 'event',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/projects-management',
    title: 'Project Management',
    icon: 'folder',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/shop-mgmt',
    title: 'E-commerce',
    icon: 'store',
    class: '',
    extralink: false,
    submenu: [
      {
        path: '/shop-mgmt/category',
        title: 'Categories',
        icon: 'category',
        class: '',
        extralink: false,
        submenu: []
      },{
        path: '/shop-mgmt/orders',
        title: 'Orders',
        icon: 'shopping_cart',
        class: '',
        extralink: false,
        submenu: []
      },{
        path: '/shop-mgmt/products',
        title: 'Product Managaement',
        icon: 'inventory',
        class: '',
        extralink: false,
        submenu: []
      },]
  },
  {
    path: '/component/setting',
    title: 'Setting',
    icon: 'settings',
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
