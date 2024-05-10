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
    let token = localStorage.getItem('token')
    let userRole = localStorage.getItem('roleId')
    if (token && userRole) {
      this.router.navigate(['/dashboard'])
    } else {
      null
      localStorage.clear()
    }
  }
  login(): void {
    this.authService.login(this.loginModel.userName, this.loginModel.password).subscribe({
      next: () => {
        this.router.navigateByUrl(this.returnUrl)
      }
    });
  }
}
