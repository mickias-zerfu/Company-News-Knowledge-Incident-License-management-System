import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './btn.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false;

  constructor(private authService: AuthService,) { }
  ngOnInit() {
    // this.isLoggedIn = localStorage.getItem("isUserLoggedIn") ? false : true;
    // console.log("isUserLoggedIn", this.isLoggedIn);

  }


}
