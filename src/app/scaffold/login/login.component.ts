import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinFailed: boolean = false;

  public loginModel: LoginModel = new LoginModel();
  loginFailed: boolean = false;

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login(): void {
    // debugger
    // if(this.loginModel.userName === 'Admin' && this.loginModel.password === '12345'){

    // }else{
    //   this.loginFailed = true;
    // }


    this.authService.login(this.loginModel.userName, this.loginModel.password).subscribe(
      (isAuthenticated) => {
        if (isAuthenticated) {
        console.log("Is Login Success: " + isAuthenticated);

          // get current user role
          const userRole = localStorage.getItem('userRole');

          // redirect to correct page
          if (userRole === 'admin') { this.router.navigate(["../dashboard"]);
         } else {
            this.router.navigate(['/']);
          }

        } else {
          // error message
        }
      }
    );

  }
}
