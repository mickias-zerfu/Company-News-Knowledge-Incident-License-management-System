import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','btn.css', 'menubtn.css']
})
export class HeaderComponent implements OnInit {


  isLoggedIn = false;

  constructor(  private router: Router, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  ngOnDestroy(): void {}

  logout() {
    console.log("logged out");
    // this.authenticationService.removeSession();
    this.router.navigate(["account/signin"]);
  }
}
