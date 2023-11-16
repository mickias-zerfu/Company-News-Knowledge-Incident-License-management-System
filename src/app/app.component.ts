import { Component, OnInit,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {
  title = 'TXN-Monitoring';
  isAdmin: boolean = true;
  drawer: { opened: boolean } = { opened: true };

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    let storeData = localStorage.getItem("isUserLoggedIn");
    let roleData = localStorage.getItem("userRole");
    console.log("StoreData: " + storeData);
    if (storeData != null && storeData == "true" && roleData == "admin")
      this.isAdmin = true;
    else
      this.isAdmin = false;

      this.cdr.detectChanges();
  }

}
