import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceUploadModel } from 'src/app/models/product.model';
import { FileService } from 'src/app/services/product.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  resource: ResourceUploadModel = new ResourceUploadModel();
  isEditMode = false;
  fileId: number;
  isSubmitted = false;
  @ViewChild('resourceForm') resourceForm: NgForm;
  maxFileSize = 10 * 1024 * 1024; // 5 MB
  allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'docx', 'mp4', 'doc', 'xlsx', 'avi'];

  constructor(
    private fileService: FileService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.isEditMode = data['isEditMode'] || false;
    });
    if (this.isEditMode) {
      this.route.params.subscribe(params => {
        this.fileId = +params['id']; // Convert to number
      });
      this.populateFormWithResourceData(this.fileId);
    }
  }

  handleFileUpload(event: any) {
    const fileToUpload = event.target.files[0];
    if (fileToUpload.size > this.maxFileSize) {
      this.toastService.showError('File size exceeds the maximum allowed limit.', 'close', 2000);
      return;
    } 
    const fileExtension = fileToUpload.name.split('.').pop().toLowerCase();
    if (!this.allowedExtensions.includes(fileExtension)) {
      this.toastService.showError('File type is not allowed.', 'close', 2000);
      return;
    }

    this.resource.FileDetails = fileToUpload; // Set the file directly in the resource object
  }

  private populateFormWithResourceData(id: number) {
    this.fileService.getFileById(id).subscribe(data => {
      this.resource = data as ResourceUploadModel;
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    const formData = new FormData();
    formData.append('fileTitle', this.resource.fileTitle);
    formData.append('fileDescription', this.resource.fileDescription);
    formData.append('fileDetails', this.resource.FileDetails);

    if (this.isEditMode && this.fileId !== undefined) {
      this.updateResource(formData);
    } else {
      this.addResource(formData);
    }
  }

  addResource(formData: FormData) {

    if (!this.resource.FileDetails) {
      this.toastService.showError('No File selected', 'Close', 2000);
      return;
    }
     
    this.fileService.addResource(formData).subscribe(
      () => {
        this.toastService.showSuccess('New Resource added successfully.', 'Close', 2000);
        this.router.navigate(['/resources/managefiles']);
      },
      error => {
        this.toastService.showError(error.error.message, 'Close', 4000);
        //console.error(error);
      }
    );
  }
  updateResource(formData: FormData) {

    this.fileService.updateFile(this.fileId, formData).subscribe(
      () => {
        this.toastService.showSuccess('Resource updated', 'Close', 2000);
        this.router.navigate(['/resources/managefiles']);
      },
      error => {
        this.toastService.showError(error.error.message, 'Close', 4000);
        //console.error(error);
      }
    );
  }

}
