// detail-license-manager.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LicenseManager } from 'src/app/models/license/LicenseManager';
import { LicenseCrudService } from 'src/app/services/licenses/license-crud.service';
import { LicenseManagerService } from 'src/app/services/licenses/license-manager.service';
import { AssignmentLicenseComponent } from './assignment-license/assignment-license.component';

@Component({
  selector: 'app-detail-license-manager',
  templateUrl: './detail-license-manager.component.html',
  styleUrls: ['./detail-license-manager.component.css']
})
export class DetailLicenseManagerComponent implements OnInit {
  licenses: any[] = []; // Array to store the list of licenses
  displayAssignForm: boolean = false; // Variable to control the display of the form
  selectedlicenses: any[] = []; // Array to store the selected licenses
  constructor(private licenseService: LicenseCrudService, private licenseManagersService: LicenseManagerService, private dialog: MatDialog) {
  }

  @Input() licenseManager: LicenseManager;


  ngOnInit(): void {
    // Fetch licenses from API and set to dataSource
    // this.fetchLicenses();
  }

  fetchLicenses(managerId: any): void {
    // Assuming you have an API endpoint to fetch licenses
    this.licenseService.getLicenses().subscribe({
      next: (licenses) => {
        console.log('Fetched licenses:', licenses);
        this.licenses = licenses;
        const dialogRef = this.dialog.open(AssignmentLicenseComponent, {
          width: '500px',
          data: { licenses: this.licenses, ManagerId: managerId }
        });

        dialogRef.afterClosed().subscribe(selectedManagers => {
          // Handle the selected managers here
          this.licenseManagersService.assignLicensesToManager(managerId, selectedManagers).subscribe();
          console.log(selectedManagers);
        });
      },
      error: (error) => {
        console.error('Error fetching licenses:', error);
      }
    });
  }
  updatelicenseManager(licenseManagerId: number) {
    throw new Error('Method not implemented.');
  }
  openConfirmationDialog(licenseManagerId: any) {
    throw new Error('Method not implemented.');
  }
  updatemanager(licenseManagerId: any) {
    throw new Error('Method not implemented.');
  }
  assignLicensesToManager(licenseManagerId: any) {
    throw new Error('Method not implemented.');
  }
}
