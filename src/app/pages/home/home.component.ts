import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './btn.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false;
  user:any;

  constructor(public authService: AuthService,) { }
  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('user_data') as any);

    if (this.user) {
      this.isLoggedIn = true;
    }

  }


}
