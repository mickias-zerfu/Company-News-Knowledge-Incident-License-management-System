import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SoftwareProduct } from 'src/app/models/license/software.model';
import { SoftwareProductService } from 'src/app/services/licenses/software-product.service';
import { SoftwareProductFormComponent } from '../software-product-form/software-product-form.component';

@Component({
  selector: 'app-software-product-list',
  templateUrl: './software-product-list.component.html',
  styleUrls: ['./software-product-list.component.css']
})
export class SoftwareProductListComponent implements OnInit {
  softwareProducts: SoftwareProduct[] = [];
  constructor(private softwareProductService: SoftwareProductService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadSoftwareProducts();
  }
  onAddSoftware() {
    const dialogRef = this.dialog.open(SoftwareProductFormComponent, {
      width: '600px', // Adjust the width as needed
      data: { 'isEditMode': false, 'softwareId': undefined }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  loadSoftwareProducts(): void {
    this.softwareProductService.getSoftwareProducts().subscribe(products => {
      this.softwareProducts = products;
    });
  }
}
