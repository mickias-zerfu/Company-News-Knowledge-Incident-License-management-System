import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { License } from 'src/app/models/license/license.model';
import { LicenseCrudService } from 'src/app/services/licenses/license-crud.service';
import { ConfirmDialogComponent, ConfirmDialogData } from 'src/app/shared/confirm-modal/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-license-table',
  templateUrl: './license-table.component.html',
  styleUrls: ['./license-table.component.css']
})
export class LicenseTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'issuedTo', 'issuedBy', 'creationDate', 'expirationDate', 'maxUsers', 'activated', 'licenseType', 'softwareProduct', 'action'];
  dataSource: MatTableDataSource<License>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private licenseService: LicenseCrudService,private dialog: MatDialog) {
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
    console.log(`Editing license with ID: ${licenseId}`);
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
