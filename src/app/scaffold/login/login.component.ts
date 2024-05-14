import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginModel } from 'src/app/models/login.model';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinFailed: boolean = false;

  public loginModel: LoginModel = new LoginModel();
  loginFailed: boolean = false;
  returnUrl: string;

  constructor(private authService: AuthService, private router: Router,
    private toastrService: ToastService,
    private activatedRoute: ActivatedRoute) {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/home'
  }

  ngOnInit(): void {
    //let token = localStorage.getItem('token')
    //let userRole = localStorage.getItem('roleId')
    //if (token && userRole) {
    //  this.router.navigate(['/dashboard'])
    //} else {
    //  null
      localStorage.clear()
    //}
  }
  login(): void {
    this.authService.login(this.loginModel.userName, this.loginModel.password).subscribe({
      next: (user: any) => {
        if (user && user.token) {
          localStorage.setItem('isUserLoggedIn', 'true');
          localStorage.setItem('token', user.token);
          localStorage.setItem('displayName', user.displayName);
          localStorage.setItem('status', user.status);
          localStorage.setItem('roleId', user.roleId);
          this.authService.currentUserSource.next(user);
          if (user.roleId == 1 || user.roleId == 2) {
            localStorage.setItem('access', user.access);
            this.authService.isAdminSubject.next(true);
          }
          else {
            this.authService.isAdminSubject.next(false);
          }

          this.toastrService.showSuccess(user.message, 'Close', 2000); 
          this.router.navigateByUrl(this.returnUrl);
        }
        else {
          this.toastrService.showError(user.message, 'Close', 2000); 
        }
      },
      error: (error) => {
        console.log("errrrrrrrror")
          this.toastrService.showError("Some Errorr occuered ", 'Close', 2000); 

      }
    });
  }
}
