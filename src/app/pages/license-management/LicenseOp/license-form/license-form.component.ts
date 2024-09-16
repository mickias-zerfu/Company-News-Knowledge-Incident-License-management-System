import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
  isEditMode = false;
  licenseId: number;
  license: License  = new License();
  licenseTypes = [
    { value: 0, text: 'SingleUserSubscription' },
    { value: 1, text: 'MultiUserSubscription' },
    { value: 2, text: 'SingleUserLifeTimeAccess' },
    { value: 3, text: 'MultiUserLifeTimeAccess' }
  ];
  softwareProducts: any[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private licenseService: LicenseCrudService,
    private route: ActivatedRoute,     private toastService: ToastService, private softwareProductService: SoftwareProductService) { }

  ngOnInit() {
    this.createLicenseForm(); // Initialize the form
    this.getSoftwareProducts(); // Fetch software products

    this.isEditMode = this.route.snapshot.data['isEditMode'] || false;
    if (this.isEditMode) {
      this.licenseId = this.route.snapshot.params['id'];
      console.log(this.licenseId, this.isEditMode);

      if (this.licenseId !== undefined) {
        this.populateFormWithLicenseData(this.licenseId);
      }
    }
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
      activated: ['', Validators.required],
      licenseType: ['', Validators.required],
      softwareProductId: ['', Validators.required],
      notes: ['']
    });
  }

  populateFormWithLicenseData(id: number) {
    this.licenseService.getLicenseById(id).subscribe(data => {
      this.license = data as License;
      console.log(data);

      // Patch the form with the correct values
      this.licenseForm.patchValue({
        issuedTo: this.license.issuedTo,
        issuedBy: this.license.issuedBy,
        creationDate: new Date(this.license.creationDate),   
        expirationDate: new Date(this.license.expirationDate),  
        maxUsers: this.license.maxUsers,
        activated: this.license.activated ? true : false, // or directly the boolean   
        licenseType: this.license.licenseType,   
        softwareProductId: this.license.softwareProductId,   
        notes: this.license.notes
      });
    }, error => {
      console.error('Error fetching license data:', error);
      // Optionally show an error message
    });
  }

  onSubmit() {
    if (this.licenseForm.invalid) {
      return;
    }

    const licenseData = {
      ...this.licenseForm.value,
      creationDate: new Date(this.licenseForm.value.creationDate).toISOString(),
      expirationDate: new Date(this.licenseForm.value.expirationDate).toISOString(),
      licenseType: parseInt(this.licenseForm.value.licenseType, 10),
      softwareProductId: parseInt(this.licenseForm.value.softwareProductId, 10)
    };

    if (this.isEditMode) {
      this.licenseService.updateLicense(this.licenseId, licenseData).subscribe(
        (response) => {
          this.toastService.showSuccess('License updated successfully');
          this.router.navigate(['/licenses']);
        },
        (error) => {
          this.toastService.showError('Failed to update license. Please try again.');
          console.error('Error:', error);
        }
      );
    } else {
      this.licenseService.createLicense(licenseData).subscribe(
        (response) => {
          this.toastService.showSuccess('License added successfully');
          this.router.navigate(['/licenses']);
        },
        (error) => {
          this.toastService.showError('Failed to add license. Please try again.');
          console.error('Error:', error);
        }
      );
    }
  }

}
