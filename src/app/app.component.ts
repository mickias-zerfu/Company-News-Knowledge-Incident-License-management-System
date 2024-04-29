import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable, Subscription } from 'rxjs';

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
  user: any;

  constructor(private cdr: ChangeDetectorRef, private authService: AuthService) { }
  ngOnInit() {
    this.authSubscription = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      if (this.isLoggedIn) {
        this.user = JSON.parse(localStorage.getItem('user_data') as any);
        this.checkLoginStatus();
      }
    });
    this.checkLoginStatus();
  }
  checkLoginStatus() {
    if (this.user) {
      this.isLoggedIn = true;
    }
    if (!this.isAdmin) {
      this.isAdmin = this.user.role_id === 1 || this.user.role_id === 2;
    }
    this.cdr.detectChanges();
  }
}
