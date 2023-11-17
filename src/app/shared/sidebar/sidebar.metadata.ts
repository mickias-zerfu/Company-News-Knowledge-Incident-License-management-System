// Sidebar route metadata
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  extralink: boolean;
  submenu: RouteInfo[];
}

export interface Icon {
  icon1: string;
  icon2: string;
  icon3: string;
}
