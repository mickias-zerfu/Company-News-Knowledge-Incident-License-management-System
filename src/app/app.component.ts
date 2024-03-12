import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TXN-Monitoring';
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  drawer: { opened: boolean } = { opened: true };

  constructor(private cdr: ChangeDetectorRef, private authService: AuthService) { }
  ngOnInit() {
    // debugger
    this.checkLoginStatus();
  }
  checkLoginStatus() {
    this.isLoggedIn = this.authService.isAuthenticate();
    this.authService.loginStatusChanged.subscribe((isUserLoggedIn: boolean) => {
      debugger
      console.log('---------------isUserLoggedIn authService.loginStatusChanged.subscribe app', isUserLoggedIn);
      this.isLoggedIn = isUserLoggedIn;
      this.cdr.detectChanges();
    });
    const storeData = localStorage.getItem('isUserLoggedIn');
    const roleData = localStorage.getItem('userRole');

    console.log('StoreData app: ' + storeData);
    console.log('roleData app: ' + roleData);

    if (storeData === 'true') {
      this.isLoggedIn = true;

      if (roleData === 'admin') {
        this.isAdmin = true;
        console.log('this.isLoggedIn if storeData === true && roleData === admin app', this.isLoggedIn);
      }

      console.log('this.isLoggedIn if storeData === true app', this.isLoggedIn);
    }

    this.cdr.detectChanges();

  }
}
