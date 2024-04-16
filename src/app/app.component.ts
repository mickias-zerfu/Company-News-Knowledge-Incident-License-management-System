import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Resource Sharing Platform';
  drawer: { opened: boolean } = { opened: true };
  isAdmin = false;
  isLoggedIn = false;

  constructor(private cdr: ChangeDetectorRef, private authService: AuthService) { }
  ngOnInit() {
    this.checkLoginStatus();
  }
  checkLoginStatus() {
    this.isLoggedIn = this.authService.isAuthenticate();
    this.authService.loginStatusChanged.subscribe((isUserLoggedIn: boolean) => {
      this.isLoggedIn = isUserLoggedIn;
      const roleData = this.authService.getRoleOfLoggedInUser();
      if (roleData === 'admin') {
        this.isAdmin = true;
      }
      else if (roleData === 'subadmin') {
        this.isAdmin = true;
      }
      else if (roleData === 'user') {
        this.isAdmin = false;
      }

      this.cdr.detectChanges();
    });
    this.cdr.detectChanges();

  }
}
