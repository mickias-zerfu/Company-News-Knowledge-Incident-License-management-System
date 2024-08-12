// add-license-manager.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LicenseManager } from 'src/app/models/license/LicenseManager';
import { BlogService } from 'src/app/services/blog.service';
import { LicenseManagerService } from 'src/app/services/licenses/license-manager.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-license-manager',
  templateUrl: './add-license-manager.component.html',
  styleUrls: ['./add-license-manager.component.css']
})
export class AddLicenseManagerComponent implements OnInit {
  licenseManagerForm: FormGroup;
  licenseManager: LicenseManager = new LicenseManager();
  isEditMode = false;
  lmanagerId: number;
  isSubmitted = false;
  imagePreview: string | ArrayBuffer | null;
  maxFileSize = 5 * 1024 * 1024; // 5 MB
  allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

  constructor(private fb: FormBuilder, private fileservice: BlogService, private licenseManagerService: LicenseManagerService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.licenseManagerForm = this.fb.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      isActive: [true, Validators.required]
    });
  }
  onFileSelected(event: any) {
    const fileToUpload = event.target.files[0];
    // File size validation
    if (fileToUpload.size > this.maxFileSize) {
      this.toastService.showError('File size exceeds the maximum allowed limit.', 'close', 2000);
      return;
    }

    // File extension validation
    const fileExtension = fileToUpload.name.split('.').pop().toLowerCase();
    if (!this.allowedExtensions.includes(fileExtension)) {
      this.toastService.showError('File type is not allowed.', 'close', 2000);
      return;
    }
    if (fileToUpload.name.length >= 25) {
      this.toastService.showError('File name character length more than 25 is not allowed.', 'close', 2000);
      return;
    }
    // display image
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    if (fileToUpload) {
      reader.readAsDataURL(fileToUpload);
    }

    // upload image
    const formData = new FormData();
    formData.append('fileDetails.FileDetails', fileToUpload);
    this.fileservice.uploadBlogImage(formData)
      .subscribe(
        (res) => {
          this.licenseManager.profilePictureUrl = res.fileUrl;  
        },
        (error: any) => {
          this.toastService.showError(error.error.message, 'Close', 4000);
        }
      );
  }

  onFileSelected1(event: any): void {
    const fileToUpload: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    if (fileToUpload) {
      reader.readAsDataURL(fileToUpload);
    }
    const formData = new FormData();
    formData.append('fileDetails.FileDetails', fileToUpload);
    console.log(formData, 'fileDetails.FileDetails');

    this.fileservice.uploadBlogImage(formData)
      .subscribe(
        (res) => {
          console.log('Upload success.', res);
          this.licenseManager.profilePictureUrl = res.imageUrl;
        },
        (error: any) => {
          console.log('Upload error:', error);
        }
      );
  }



  onSubmit(): void {
    this.isSubmitted = true;
    this.licenseManager = Object.assign(this.licenseManager, this.licenseManagerForm.value) as LicenseManager;

    this.licenseManager.registrationDate = new Date();
    console.log(this.licenseManager as LicenseManager, 'licenseManager');


    if (this.isEditMode && this.lmanagerId !== undefined) {
      this.updateSoftware(this.licenseManager);
    } else {
      this.addManager(this.licenseManager);
    }
  }

  addManager(managerData: LicenseManager) {
    console.log(managerData);

    this.licenseManagerService.createLicenseManager(managerData).subscribe(
      () => {
        this.toastService.showSuccess('New managerData added', 'Close', 2000);
        this.router.navigate(['/licenses/lmanagers/lists']);
      },
      error => {
        this.toastService.showError('Failed to add new Software', 'Close', 2000);
        console.error(error);
      }
    );
  }
  updateSoftware(managerData: LicenseManager) {

    this.licenseManagerService.updateLicenseManager(this.lmanagerId, managerData).subscribe(
      () => {
        this.toastService.showSuccess('License updated', 'Close', 2000);
        this.router.navigate(['/licenses/lmanagers/lists']);
      },
      error => {
        this.toastService.showError('Failed to update License', 'Close', 2000);
        console.error(error);
      }
    );
  }
}
