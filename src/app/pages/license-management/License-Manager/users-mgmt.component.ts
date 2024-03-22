import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LicenseCrudService } from 'src/app/services/licenses/license-crud.service';
import { LicenseManagerService } from 'src/app/services/licenses/license-manager.service';
import { AddLicenseManagerComponent } from './add-license-manager/add-license-manager.component';
import { MatDialog } from '@angular/material/dialog';



export interface TopcardManager {
  bgcolor: string,
  icon: string,
  title: string,
  subtitle: string,
  link: string
}
@Component({
  selector: 'app-lmangers-mgmt',
  templateUrl: './users-mgmt.component.html',
  styleUrls: ['./users-mgmt.component.css']
})
export class LmanagersMgmtComponent {

  topcardsIb: TopcardManager[] = [];


  constructor(private router: Router, private licenseManagerService: LicenseManagerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getIbData()
  }
  checkExpiration(): void {
    // Logic to trigger the check expiration API
    console.log('Check expiration triggered');
  }

  addNewManager(): void {
    const dialogRef = this.dialog.open(AddLicenseManagerComponent, {
      width: '600px', // Adjust the width as needed
      data: { 'isEditMode': false, 'softwareId': undefined }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
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
