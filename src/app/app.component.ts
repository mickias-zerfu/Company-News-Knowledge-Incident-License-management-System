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

    this.checkLoginStatus();
  }
  checkLoginStatus() {

    this.authService.loginStatusChanged.subscribe((isUserLoggedIn: boolean) => {
      this.isLoggedIn = isUserLoggedIn;
      let storeData = localStorage.getItem("isUserLoggedIn");
      let roleData = localStorage.getItem("userRole");
      console.log("StoreData: " + storeData);
      console.log("roleData: " + roleData);
      if (storeData != null && storeData == "true" && roleData == "admin") {
        this.isLoggedIn = true;
        this.isAdmin = true;
      } else if (storeData != null && storeData == "true") {
        this.isLoggedIn = true;
      } else {
        this.isAdmin = false;
        this.isLoggedIn = false;
      }
      this.cdr.detectChanges();
    });
  }
}
