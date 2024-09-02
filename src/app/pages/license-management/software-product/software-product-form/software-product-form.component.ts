import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftwareProduct } from 'src/app/models/license/software.model';
import { SoftwareProductService } from 'src/app/services/licenses/software-product.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-software-product-form',
  templateUrl: './software-product-form.component.html',
  styleUrls: ['./software-product-form.component.css']
})
export class SoftwareProductFormComponent implements OnInit {

  softwareProduct: SoftwareProduct = new SoftwareProduct();
  isEditMode = false;
  softwareId: number;
  isSubmitted = false;
  @ViewChild('softwareForm') softwareForm: NgForm;

  constructor(
    private softwareProductService: SoftwareProductService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) { }
  // ngOnInit() {
  //   this.isEditMode = this.data.isEditMode;
  //   if (this.isEditMode) {
  //     this.softwareId=this.data.softwareId;
  //     this.populateFormWithSoftwareData(this.softwareId);
  //   }
  // }
  ngOnInit() {
    this.isEditMode = this.data.isEditMode;
    if (this.isEditMode) {
      this.softwareId = this.data.softwareId;
      if (this.softwareId !== undefined) {
        this.populateFormWithSoftwareData(this.softwareId);
      }
    }
  }
  private populateFormWithSoftwareData(id: number) {
    this.softwareProductService.getSoftwareProductById(id).subscribe(data => {
      this.softwareProduct = data as SoftwareProduct;
    });
  }
  onSubmit() {
    if (this.softwareForm.valid) {

    this.isSubmitted = true;
    // if (this.ResourceForm.invalid) {
    //   return;
    // }

    if (this.isEditMode && this.softwareId !== undefined) {
      this.updateSoftware(this.softwareProduct);
    } else {
      this.addSoftware(this.softwareProduct);
    }
  }
  }

  addSoftware(SoftwareData: SoftwareProduct) {
    console.log(SoftwareData);

    this.softwareProductService.createSoftwareProduct(SoftwareData).subscribe(
      () => {
        this.toastService.showSuccess('New Software added', 'Close', 2000);
        this.router.navigate(['/licenses/softwares']);
      },
      error => {
        this.toastService.showError('Failed to add new Software', 'Close', 2000);
        console.error(error);
      }
    );
  }
  updateSoftware(SoftwareData: SoftwareProduct) {

    this.softwareProductService.updateSoftwareProduct(this.softwareId, SoftwareData).subscribe(
      () => {
        console.log(SoftwareData);
        
        this.toastService.showSuccess('Software updated', 'Close', 2000);
        this.router.navigate(['/licenses/softwares']);
      },
      error => {
        this.toastService.showError('Failed to update Software', 'Close', 2000);
        console.error(error);
      }
    );
  }

}
