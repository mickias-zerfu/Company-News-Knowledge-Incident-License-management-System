import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { License } from 'src/app/models/license/license.model';
import { LicenseCrudService } from 'src/app/services/licenses/license-crud.service';
import { ConfirmDialogComponent, ConfirmDialogData } from 'src/app/shared/confirm-modal/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { LicenseManagerService } from 'src/app/services/licenses/license-manager.service';
import { AssignmentComponent } from './assignment/assignment.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-license-table',
  templateUrl: './license-table.component.html',
  styleUrls: ['./license-table.component.css','../../../License-Manager/detail-license-manager/assign.css']
})
export class LicenseTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'issuedTo', 'issuedBy', 'creationDate', 'expirationDate', 'maxUsers', 'activated', 'softwareProduct', 'Assignment', 'action'];
  dataSource: MatTableDataSource<License>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  managers: any[] = []; // Array to store the list of managers
  displayAssignForm: boolean = false; // Variable to control the display of the form
  selectedManagers: any[] = []; // Array to store the selected managers
  constructor(private licenseService: LicenseCrudService, private licenseManagersService: LicenseManagerService, private dialog: MatDialog,
    private router: Router) {
    this.dataSource = new MatTableDataSource<License>([]);
  }

  ngOnInit(): void {
    // Fetch licenses from API and set to dataSource
    this.fetchLicenses();
  }

  fetchLicenses(): void {
    // Assuming you have an API endpoint to fetch licenses
    this.licenseService.getLicenses().subscribe({
      next: (licenses) => {
        console.log('Fetched licenses:', licenses);
        this.dataSource = new MatTableDataSource(licenses);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.error('Error fetching licenses:', error);
      }
    });
  }

  editLicense(licenseId: number): void {
    // Logic to edit the license with the provided ID

    this.router.navigate([`licenses/${licenseId}/update`]);
    console.log(`Editing license with ID: ${licenseId}`);
  }
  getLicenseManager(licenseId:any) {
    this.licenseManagersService.getLicenseManagers().subscribe((managers: any[]) => {
      this.managers = managers;
      this.displayAssignForm = true; // Display the form
      const dialogRef = this.dialog.open(AssignmentComponent, {
        width: '500px',
        data: { managers: this.managers , LicenseId:licenseId}
      });

      dialogRef.afterClosed().subscribe(selectedManagers => {
        // Handle the selected managers here
        this.licenseService.assignLicenseManagers(licenseId, selectedManagers).subscribe();
        console.log(selectedManagers);
      });
    });
  }
  
  assignLicenseManager(licenseId: number): void {
    // Logic to assign selected managers

    console.log(this.selectedManagers);
    // Send the selected managers to your TypeScript logic for further processing

  }
  deleteLicense(licenseId: number): void {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmation',
      message: 'Are you sure you want to delete this resource?',
      callback: (confirmed: boolean) => {
        if (confirmed) {
          this.licenseService.deleteLicense(licenseId).subscribe({
            next: () => {
              // Handle success
              console.log(`License with ID ${licenseId} deleted successfully`);
            },
            error: (error) => {
              console.error('Error deleting license:', error);
            }
          })

        }
      }
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData
    });
    console.log(`Deleting license with ID: ${licenseId}`);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
