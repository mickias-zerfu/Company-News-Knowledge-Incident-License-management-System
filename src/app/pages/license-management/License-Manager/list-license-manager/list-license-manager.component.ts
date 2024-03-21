// list-license-manager.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LicenseManager } from 'src/app/models/license/LicenseManager';
import { LicenseManagerService } from 'src/app/services/licenses/license-manager.service';
import { AddLicenseManagerComponent } from '../add-license-manager/add-license-manager.component';

@Component({
  selector: 'app-list-license-manager',
  templateUrl: './list-license-manager.component.html',
  styleUrls: ['./list-license-manager.component.css']
})
export class ListLicenseManagerComponent implements OnInit {
  licenseManagers: LicenseManager[];

  constructor(private licenseManagerService: LicenseManagerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getLicenseManagers();
  }

  addNewManager(): void {
    const dialogRef = this.dialog.open(AddLicenseManagerComponent, {
      width: '600px', // Adjust the width as needed
      data: { 'isEditMode': false, 'softwareId': undefined }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  getLicenseManagers(): void {
    this.licenseManagerService.getLicenseManagers().subscribe(
      licenseManagers => {
        this.licenseManagers = licenseManagers;
      },
      error => {
        // Handle error
      }
    );
  }
}
