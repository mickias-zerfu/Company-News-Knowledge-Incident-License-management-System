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
  downloadUrl: string;
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
  openOutlook() {
    if (this.shareForm.valid) {
      this.fileService.downloadFile(this.fileId).subscribe(data => {
        this.downloadUrl = data.filePath;
      });
      const formData = this.shareForm.value;
      const recipientEmail = encodeURIComponent(formData.recipientEmail);
      const subject = 'Sharing an Important file';
      const body = encodeURIComponent(`Hello, please find the file and download it from the
      following link below:\n\n${this.downloadUrl}\n\nMessage: ${formData.message}`);
      window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

      this.dialogRef.close();
    } else {
      // Handle invalid form  a
      alert('Please fill in all required fields correctly before sharing via email.');
    }
  }

}
