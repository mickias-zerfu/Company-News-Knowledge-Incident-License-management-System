import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LicenseType, License } from 'src/app/models/license/license.model';
import { LicenseCrudService } from 'src/app/services/licenses/license-crud.service';
import { SoftwareProductService } from 'src/app/services/licenses/software-product.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-license-form',
  templateUrl: './license-form.component.html',
  styleUrls: ['./license-form.component.css']
})
export class LicenseFormComponent implements OnInit {
  licenseForm: FormGroup;
  licenseTypes = [
    { value: 0, text: 'SingleUserSubscription' },
    { value: 1, text: 'MultiUserSubscription' },
    { value: 2, text: 'SingleUserLifeTimeAccess' },
    { value: 3, text: 'MultiUserLifeTimeAccess' }
  ];
  softwareProducts: any[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private licenseService: LicenseCrudService,
    private toastService: ToastService, private softwareProductService: SoftwareProductService) { }

  ngOnInit() {
    console.log(this.licenseTypes);

    this.createLicenseForm();
    this.getSoftwareProducts();
  }

  getSoftwareProducts() {
    this.softwareProductService.getSoftwareProducts().subscribe(products => {
      this.softwareProducts = products;
    });
  }

  createLicenseForm() {
    this.licenseForm = this.formBuilder.group({
      issuedTo: ['', Validators.required],
      issuedBy: ['', Validators.required],
      creationDate: ['', Validators.required],
      expirationDate: ['', Validators.required],
      maxUsers: ['', [Validators.required, Validators.min(1)]],
      activated: [false],
      licenseType: ['', Validators.required],
      softwareProductId: ['', Validators.required],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.licenseForm.invalid) {
      return;
    }

    const licenseTypeValue = parseInt(this.licenseForm.value.licenseType, 10) || +this.licenseForm.value.licenseType;
    const softwareProductId = parseInt(this.licenseForm.value.softwareProductId, 10);
    const licenseData: any = {
      ...this.licenseForm.value,
      creationDate: new Date(this.licenseForm.value.creationDate).toISOString(),
      expirationDate: new Date(this.licenseForm.value.expirationDate).toISOString(),
      licenseType: licenseTypeValue,
      softwareProductId : softwareProductId
    };

    // Call your license service to add the license
      console.error('Selected license  found',licenseData );
    this.licenseService.createLicense(licenseData).subscribe(
      (response) => {
        this.toastService.showSuccess('License added successfully');
        // Redirect to the license list page or any other page
        this.router.navigate(['/licenses']);
      },
      (error) => {
        this.toastService.showError('Failed to add license. Please try again.');
        console.error('Error:', error);
      }
    );
  }

}
