import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable, Subscription } from 'rxjs';
import { AdminService } from './auth/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Resource Sharing Platform';
  drawer: { opened: boolean } = { opened: true };
  isAdmin$ = this.authService.isAdminSubject;
  isLoggedIn = false;
  userRole: any;

  constructor(public authService: AuthService) { }
  ngOnInit() { 
    this.loadCurrentUser();
    this.checkLoadAdmin();
  }
  loadCurrentUser() {
    const token = localStorage.getItem('token');
    const roleId = localStorage.getItem('roleId');
    if (token != null && (roleId == '1' || roleId == '2')) {
      this.authService.loadCurrentUser(token).subscribe();
      console.log('isAdmin,load current user min app');
    }
    if (token != null && (roleId == '1' || roleId == '2')) { 
    this.authService.loadCurrentUser(token).subscribe();
    console.log('isAdmin,load current user min app');
    } 
    else if (token != null && (roleId == '0')) {
      this.authService.loadDomainUser(token).subscribe();
      this.isLoggedIn = true;
    }
  }

  checkLoadAdmin() {
    let AdminRoleId = localStorage.getItem('roleId');
    this.authService.isAdminSubject.subscribe(isAdmin => {
      console.log(isAdmin, 'is admin app');

      // update component property
    // if (AdminRoleId == '1' || AdminRoleId == '2') { this.isAdmin = true };
    })
  }
}
