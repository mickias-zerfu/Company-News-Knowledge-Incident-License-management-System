import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LicenseCrudService } from 'src/app/services/licenses/license-crud.service';
import { LicenseManagerService } from 'src/app/services/licenses/license-manager.service';



export interface TopcardManager {
  bgcolor: string,
  icon: string,
  title: string,
  subtitle: string,
  link:string
}
@Component({
  selector: 'app-lmangers-mgmt',
  templateUrl: './users-mgmt.component.html',
  styleUrls: ['./users-mgmt.component.css']
})
export class LmanagersMgmtComponent {

  topcardsIb: TopcardManager[] = [];


  constructor(private router: Router, private licenseManagerService: LicenseManagerService, private licensecrudService: LicenseCrudService) { }

  ngOnInit(): void {
    this.getIbData()
  }
  checkExpiration(): void {
    // Logic to trigger the check expiration API
    console.log('Check expiration triggered');
  }

  addNewManager(): void {
    this.router.navigate(['/licenses/lmanagers/add'])
    console.log('Add new manager triggered');
  }

  goToManagerList(): void {
    this.router.navigate(['/licenses/lmanagers/lists'])
    console.log('Go to manager list triggered');
  }
  getIbData() {
    this.topcardsIb.push({
      bgcolor: 'red-500',
      icon: 'home',
      title: 'Total License Managers',
      subtitle: '10 managers',
      link: '/license-managers'
    },
    {
      bgcolor: 'blue-500',
      icon: 'settings',
      title: 'Active License Managers',
      subtitle: '5 active managers',
      link: '/active-license-managers'
    },
    {
      bgcolor: 'green-500',
      icon: 'notifications',
      title: 'Inactive License Managers',
      subtitle: '5 inactive managers',
      link: '/inactive-license-managers'
    }

    )
  }
}
