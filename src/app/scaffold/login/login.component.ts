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
        console.log(res, 'response');
        this.authService.isLoggedInSubject.next(true)
        if (res['response'].status== 1) {
          this.toastrService.showSuccess('Success', res['response'].message);
          localStorage.setItem('isUserLoggedIn', 'true');
          localStorage.setItem('token', res['response'].token);
          localStorage.setItem('user_id', res['response']['response'].user_id)
          localStorage.setItem('user_data', JSON.stringify(res['response']['response']['user_data']))
          if (res['response']['response']['roleId'] == 1 || res['response']['response']['roleId'] == 2) {
            this.router.navigateByUrl('/dashboard')
          }
          else {
            this.router.navigateByUrl('/')
          }
        }
        else {
          this.toastrService.showError('Error', res['message']);
        }
      });
  }
}

