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
  subtitle: string
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
    this.licenseManagerService.checkExpiration().subscribe((res) => {

      console.log(res);
    }, (err) => {

      console.error(err);
    })
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
    this.topcardsIb.push(
      {
        bgcolor: 'red-500',
        icon: 'apps_outage',
        title: 'Add Software or Products to be Licensed',
        subtitle: 'e.g. Sysaid'
      },
      {
        bgcolor: 'blue-500',
        icon: 'security',
        title: 'Add the License for the addes software or product',
        subtitle: 'e.g. CR2-abcd-EFGH-HIJK-MICKEY'
      },
      {
        bgcolor: 'yellow-500',
        icon: 'person',
        title: 'Add The manager who will be Responsible for that Software',
        subtitle: 'Mr. Yekoye Mihret'
      },
      {
        bgcolor: 'orange-400',
        icon: 'done_all',
        title: 'Receive Email Notification when The Expiration Date approaches',
        subtitle: 'Check your email'
      }

    )
  }
}
