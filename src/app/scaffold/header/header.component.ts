import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', 'btn.css', 'menubtn.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();


  @Input() isAdmin = false;
  @Input() isLoggedIn = false;
  user: any;
  private authSubscription: Subscription;

  constructor(private router: Router, public activatedRoute: ActivatedRoute, private authService: AuthService,) { }

  ngOnInit() {
    this.authSubscription = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      if (this.isLoggedIn) {
    this.user = JSON.parse(localStorage.getItem('user_data') as any);
        if (!this.isAdmin) {
          this.isAdmin = this.user.role_id === 1 || this.user.role_id === 2;
        }
      }
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }
  logout() {
    if (confirm('Are you sure?')) { 
      this.authService.logout();
      this.authService.isLoggedInSubject.next(false);
      //location.reload();
      return this.router.navigate(['login']);
    } else {
      return false;
    }
  }

}
