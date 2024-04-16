import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TXN-Monitoring'; 
  drawer: { opened: boolean } = { opened: true };
  @Input() isAdmin = false;
  @Input() isLoggedIn = false;

  constructor(private cdr: ChangeDetectorRef, private authService: AuthService) { }
  ngOnInit() { 
    this.checkLoginStatus();
  }
  checkLoginStatus() {
    this.isLoggedIn = this.authService.isAuthenticate();
    this.authService.loginStatusChanged.subscribe((isUserLoggedIn: boolean) => {  
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
