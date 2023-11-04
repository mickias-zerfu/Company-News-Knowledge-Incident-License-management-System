import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TXN-Monitoring';
  isAdmin: boolean = true;

  ngOnInit() {
    let storeData = localStorage.getItem("isUserLoggedIn");
    let roleData = localStorage.getItem("userRole");
    console.log("StoreData: " + storeData);
    if (storeData != null && storeData == "true" && roleData == "admin")
      this.isAdmin = true;
    else
      this.isAdmin = false;
  }

}
