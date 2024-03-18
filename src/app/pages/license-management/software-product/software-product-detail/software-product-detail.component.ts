import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SoftwareProductService } from 'src/app/services/licenses/software-product.service';
import { ToastService } from 'src/app/services/toast.service';
import { ConfirmDialogComponent, ConfirmDialogData } from 'src/app/shared/confirm-modal/confirm-dialog.component';
import { SoftwareProductFormComponent } from '../software-product-form/software-product-form.component';

@Component({
  selector: 'app-software-product-detail',
  templateUrl: './software-product-detail.component.html',
  styleUrls: ['./software-product-detail.component.css']
})
export class SoftwareProductDetailComponent  implements OnInit {

  @Input() product: any;
  constructor(private router: Router, private productService: SoftwareProductService,
    private toastService: ToastService,private dialog: MatDialog) {}

  ngOnInit(): void {
  }
  // editProduct() {
  //   // Navigate to the edit page with the product id as a parameter
  //   this.router.navigate(['licenses/software/', this.product.id, 'update']);
  // }

  editProduct(softwareId:number) {
    const dialogRef = this.dialog.open(SoftwareProductFormComponent, {
      width: '600px', // Adjust the width as needed
      data: {isEditMode: true, softwareId}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  deleteProduct() {
    this.productService.deleteSoftwareProduct(this.product.id).subscribe(
      () => {
        this.toastService.showSuccess('This software is Deleted', 'Close', 2000);
        this.router.navigate(['/licenses/softwares']);
      },
      error => {
        this.toastService.showError('This software is Not Deleted', 'Close', 2000);
      }
    );
  }

  openConfirmationDialog(): void {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmation',
      message: 'Are you sure you want to delete this resource?',
      callback: (confirmed: boolean) => {
        if (confirmed) {
          this.deleteProduct();
        }
      }
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData
    });
  }
}

