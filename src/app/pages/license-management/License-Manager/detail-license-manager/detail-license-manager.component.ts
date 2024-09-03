// detail-license-manager.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LicenseManager } from 'src/app/models/license/LicenseManager';
import { LicenseCrudService } from 'src/app/services/licenses/license-crud.service';
import { LicenseManagerService } from 'src/app/services/licenses/license-manager.service';
import { AssignmentLicenseComponent } from './assignment-license/assignment-license.component';
import { LicenseFormComponent } from '../../LicenseOp/license-form/license-form.component';
import { ConfirmDialogComponent, ConfirmDialogData } from 'src/app/shared/confirm-modal/confirm-dialog.component';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { AddLicenseManagerComponent } from '../add-license-manager/add-license-manager.component';

@Component({
  selector: 'app-detail-license-manager',
  templateUrl: './detail-license-manager.component.html',
  styleUrls: ['./detail-license-manager.component.css']
})
export class DetailLicenseManagerComponent implements OnInit {
  licenses: any[] = []; // Array to store the list of licenses
  displayAssignForm: boolean = false; // Variable to control the display of the form
  selectedlicenses: any[] = []; // Array to store the selected licenses
  constructor(private licenseService: LicenseCrudService, 
              private licenseManagersService: LicenseManagerService, 
              private dialog: MatDialog,
              private router: Router,
              private toastService: ToastService) {
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

        dialogRef.afterClosed().subscribe(selectedLicenseIds => {
          // Handle the selected managers here
          this.licenseManagersService.assignLicensesToManager(managerId, selectedLicenseIds).subscribe();
          console.log("--------",selectedLicenseIds);
        });
         
      },
      error: (error) => {
        console.error('Error fetching licenses:', error);
      }
    });
  }
  // licenseManagerId
  updatelicenseManager(licenseManagerId: number) {
    // throw new Error('Method not implemented.');
    
    const dialogRef = this.dialog.open( AddLicenseManagerComponent, {
      width: '700px', // Adjust the width as needed
      data: {isEditMode: true, licenseManagerId: licenseManagerId}
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }


  // openConfirmationDialog(licenseManagerId: any) {
  //   // throw new Error('Method not implemented.');
  // }

  deleteLicenseManager(managerId: number) {
    this.licenseManagersService.deleteLicenseManager(managerId).subscribe(
      () => {
        this.toastService.showSuccess('This license lanager is Deleted', 'Close', 2000);
        this.router.navigate(['/licenses/lmanagers/lists']);
      },
      error => {
        this.toastService.showError('This license manager is Not Deleted', 'Close', 2000);
      }
    );
  }

  openConfirmationDialog(licenseManagerId: number): void {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmation',
      message: 'Are you sure you want to delete this license manager?',
      callback: (confirmed: boolean) => {
        if (confirmed) {
          this.deleteLicenseManager(licenseManagerId);
        }
      }
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData
    });
  }
  updatemanager(licenseManagerId: any) {
    throw new Error('Method not implemented.');
  }
  assignLicensesToManager(licenseManagerId: any) {
    throw new Error('Method not implemented.');
  }
}
