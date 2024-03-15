import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FileService } from 'src/app/services/product.service';

@Component({
  selector: 'app-share-file-dialog',
  templateUrl: './share-file-dialog.component.html',
  styleUrls: ['./share-file-dialog.component.css']
})
export class ShareFileDialogComponent {
  shareForm: FormGroup;
  downloadUrl:string;
  @Input() fileId: any;

  constructor(
    private formBuilder: FormBuilder,
    private fileService: FileService,
    private dialogRef: MatDialogRef<ShareFileDialogComponent>
  ) {
    this.shareForm = this.formBuilder.group({
      recipientEmail: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  shareThisFile() {
    if (this.shareForm.valid) {
      const formData = this.shareForm.value;
      this.fileService.shareFile(this.fileId, formData.recipientEmail, formData.message).subscribe(
        response => {
          // Handle success (e.g., close the dialog)
          console.log('File shared successfully:', response);
          this.dialogRef.close();
        },
        error => {
          // Handle error (e.g., display error message)
          console.error('Error sharing file:', error);
          this.dialogRef.close();
        }
      );
    } else {
      // Form is invalid, display error messages or prevent submission
    }
  }
  openOutlook() {
    if (this.shareForm.valid) {
      // this.fileService.downloadFile(this.fileId).subscribe(data => {
      this.downloadUrl= `http://localhost:5195/api/SharedResource/DownloadFile/${this.fileId}`;
        // Open the file in a new browser tab or window
      //   window.open(fileUrl, '_blank');
      // });
      const formData = this.shareForm.value;
      const recipientEmail = encodeURIComponent(formData.recipientEmail);
      const subject = 'Sharing a file';
      const body = encodeURIComponent(`Hi, please find the file download link below:\n\n${this.downloadUrl}\n\nMessage: ${formData.message}`);
      window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

      this.dialogRef.close();
    } else {
      // Handle invalid form  a
      alert('Please fill in all required fields correctly before sharing via email.');
    }
  }

}
