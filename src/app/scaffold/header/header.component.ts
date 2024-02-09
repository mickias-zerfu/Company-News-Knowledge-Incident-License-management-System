import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', 'btn.css', 'menubtn.css']
})
export class HeaderComponent implements OnInit {


  @Input() isAdmin = false;
  @Input() isLoggedIn = false;

  constructor(private router: Router, public activatedRoute: ActivatedRoute, private authService: AuthService, ) { }

  ngOnInit() {
    // let storeData = localStorage.getItem("isUserLoggedIn");
    // let roleData = localStorage.getItem("userRole");
    // console.log("StoreData header: " + storeData);
    // console.log("roleData header: " + roleData);
    // if (storeData == "true" && roleData == "admin") {
    //   this.isLoggedIn = true;
    //   this.isAdmin = true;
    // }
    // else if (storeData == "true") {
    //   this.isLoggedIn = true;
    // }
    // else{
    //   this.isAdmin = false;
    // this.isLoggedIn = false;}

    // console.log("isLoggedIn", this.isLoggedIn);

  }

  ngOnDestroy(): void { }

  logout() {
    console.log("logged out");
    localStorage.removeItem("isUserLoggedIn");
     localStorage.removeItem("userRole");
    // this.authenticationService.removeSession();

    this.authService.loginStatusChanged.emit(false);
    this.router.navigate(["home"]);
  }
}
