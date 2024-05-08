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

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute,
    private toastrService: ToastService,) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token')
    let user_id = localStorage.getItem('user_id')
    let user_data = localStorage.getItem('user_data')
    if (token && user_id && user_data) {
      this.router.navigate(['/dashboard'])
    } else {
      null
      localStorage.clear()
    }
  }
  login(): void {
    this.authService.login(this.loginModel.userName, this.loginModel.password).subscribe(
      (res) => {
        // debugger
        console.log(res);

        this.authService.isLoggedInSubject.next(true)
        if (res.status == 1) {
          this.toastrService.showSuccess('Success', res.message);
          localStorage.setItem('isUserLoggedIn', 'true');
          localStorage.setItem('token', res['token']);
          localStorage.setItem('displayName', res['displayName']);
          localStorage.setItem('status', res['status']);
          localStorage.setItem('roleId', res['roleId']);
          localStorage.setItem('access', res['access']);
          if (res['roleId'] == 1 || res['roleId'] == 2) {
            // location.reload();
            this.router.navigateByUrl('/dashboard')
          }
          else if (res['roleId'] == 0) {
           this.authService.isLoggedInSubject.next(true)
            this.router.navigateByUrl('/resources/news')
          }
        }
        else {
          this.router.navigateByUrl('/login')
          this.toastrService.showError('Error', res['message']);
        }
      });
  }
}
