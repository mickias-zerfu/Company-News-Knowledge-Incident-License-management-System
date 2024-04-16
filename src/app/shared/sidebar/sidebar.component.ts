import { Component, AfterViewInit, OnInit, Input } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showMenu: string = '';
  public sidebarnavItems: RouteInfo[] = [];
  @Input() isAdmin = false;
  @Input() isLoggedIn = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute, private authService: AuthService
  ) { }

  ngOnInit() {
    this.sidebarnavItems = ROUTES.filter(item => item);
  }
  addExpandClass(element: string): void {
    this.showMenu = (element === this.showMenu) ? '0' : element;
  }
  isMenuItemActive(item: RouteInfo): boolean {
    if (this.showMenu === item.title || item.submenu.length != 0) {
      return true;
    }
    const activeSubItem = item.submenu.find(subItem => subItem.title === this.showMenu);
    return !!activeSubItem && this.isSubMenuItemActive(activeSubItem);
  }

  isSubMenuItemActive(subItem: RouteInfo): boolean {
    return this.router.isActive(subItem.path, false);
  }


}
