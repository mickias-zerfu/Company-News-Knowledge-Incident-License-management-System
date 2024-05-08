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
  isAdmin = false;
  isLoggedIn = false;
  private authSubscription: Subscription;
  userRole: any;

  constructor(private cdr: ChangeDetectorRef, private authService: AuthService, private adminService: AdminService) { }
  ngOnInit() {
    this.authSubscription = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      // debugger
      if (this.isLoggedIn) {
        this.userRole = localStorage.getItem('roleId') ;
        console.log(this.userRole, '  user role  ');
        this.isAdmin =   this.userRole == 1 || this.userRole == 2;

        console.log( this.isAdmin, '  a r  ',      this.userRole , ' l  ' ,  this.isLoggedIn    );

      }
    });
    this.cdr.detectChanges();
  }

}
