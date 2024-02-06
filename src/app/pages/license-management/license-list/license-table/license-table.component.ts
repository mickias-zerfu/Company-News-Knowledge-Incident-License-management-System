import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LicenseModel } from 'src/app/models/license.model';



export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}


@Component({
  selector: 'app-license-table',
  templateUrl: './license-table.component.html',
  styleUrls: ['./license-table.component.css']
})
export class LicenseTableComponent implements OnInit, AfterViewInit {

  licenses: LicenseModel[];
  displayedColumns: string[] = ['id', 'licenseKey', 'activationStatus', 'quantity', 'expirationDate', 'assignedUsers', 'softwareProduct', 'AgreementStartDate', 'AgreementEndDate', 'Action'];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {
    // Create 100 users

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit() {
    this.http.get<LicenseModel[]>('/assets/data/licenses.json').subscribe(
      (data) => {
        this.licenses = data;
        console.log(this.licenses);
        this.dataSource = new MatTableDataSource(this.licenses);

      },
      (error) => {
        console.error('Error loading licenses:', error);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteLicense(categoryId: number): void {
    // Logic to edit the category with the provided categoryId
    console.log(`Editing category with ID: ${categoryId}`);
  }
}
