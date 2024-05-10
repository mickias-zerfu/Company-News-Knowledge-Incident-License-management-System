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


  @Input() isAdmin: boolean| null= false;
  @Input() isLoggedIn = false;
  user: any;
  userRole: any;
  private authSubscription: Subscription;

  constructor(private router: Router, public activatedRoute: ActivatedRoute, public authService: AuthService,) { }

  ngOnInit() {
    this.authSubscription = this.authService.isAdmin$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      if (this.isLoggedIn) {
        this.user = localStorage.getItem('displayName');
        this.userRole = localStorage.getItem('roleId');
        if (!this.isAdmin) {
          this.isAdmin = this.userRole  === 1 || this.userRole  === 2;
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
      this.authService.isAdminSubject.next(false);
      //location.reload();
      return this.router.navigate(['user/login']);
    } else {
      return false;
    }
  }

}
