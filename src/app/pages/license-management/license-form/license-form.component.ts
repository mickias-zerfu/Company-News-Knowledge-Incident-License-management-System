import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-license-form',
  templateUrl: './license-form.component.html',
  styleUrls: ['./license-form.component.css']
})
export class LicenseFormComponent  implements OnInit {
  licenseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createLicenseForm();
  }

  createLicenseForm() {
    this.licenseForm = this.formBuilder.group({
      licenseKey: ['', Validators.required],
      activationStatus: ['', Validators.required],
      expirationDate: ['', Validators.required],
      assignedUsers: ['', Validators.required],
      softwareProduct: ['', Validators.required],
      agreementStartDate: ['', Validators.required],
      agreementEndDate: ['', Validators.required]
    });
  }
  getLicenseKeyErrorMessage() {
    const licenseKeyControl = this.licenseForm.get('licenseKey');
    if (licenseKeyControl?.invalid && licenseKeyControl?.touched) {
      return 'License key is required.';
    }
    return '';
  }
  onSubmit() {
    if (this.licenseForm.invalid) {
      return;
    }

    // Process the form submission here
    console.log(this.licenseForm.value);
  }
}
