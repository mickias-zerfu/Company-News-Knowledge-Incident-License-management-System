import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.css']
})
export class LicenseListComponent implements OnInit{

  constructor(private router : Router) { }
  ngOnInit() {
  }

  onAddLicense(){
    this.router.navigate(['/licenses/add'])

  }
}
