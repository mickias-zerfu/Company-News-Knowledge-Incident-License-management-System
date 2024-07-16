import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Resource } from 'src/app/models/product.model';
import { FileService } from 'src/app/services/product.service';
import { ShareFileDialogComponent } from '../share-file-dialog/share-file-dialog.component';
import { ConfirmDialogComponent, ConfirmDialogData } from 'src/app/shared/confirm-modal/confirm-dialog.component';
import { FileType } from 'src/app/models/fileDetail.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  fileDetails: Resource;

  constructor(
    public dialogRef: MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fileService: FileService, private router: Router, private dialog: MatDialog) { }
  ngOnInit(): void {
    // Fetch file details using fileId from the backend or any service
    this.fetchFileDetails(this.data.fileId);
  }

  fetchFileDetails(fileId: number): void {
    // Fetch file details from the backend using fileId
    // Example implementation:
    this.fileService.getFileById(fileId).subscribe(
      (details) => {
        this.fileDetails = details;
      },
      (error) => {
        //console.error('Error fetching file details:', error);
      }
    );
  }
  editFile(id: number) {
    this.router.navigate(['/resources/files/' + this.fileDetails.id + '/update']);
    this.dialogRef.close();
  }
  shareFile(): void {
    let id = this.fileDetails.id
    const dialogRef = this.dialog.open(ShareFileDialogComponent, {
      width: '600px', // Adjust the width as needed
      data: { id } // Pass fileId as data to ShareFileDialogComponent
    });
    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after dialog is closed (if needed)
    });
  }

  downloadFile(): void {
    this.fileService.downloadFile(this.fileDetails.id).subscribe(data => {
      const fileUrl = data.filePath;
      window.open(fileUrl, '_blank');
    });
  }

  deleteFile(): void {
    this.fileService.deleteFile(this.fileDetails.id).subscribe(data => {
      this.dialogRef.close();
      this.router.navigate(['/resources/managefiles']);
    })
  }
  openConfirmationDialog(): void {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmation',
      message: 'Are you sure you want to delete this resource?',
      callback: (confirmed: boolean) => {
        if (confirmed) {
          this.deleteFile();
        }
      }
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData
    });
  }
  getFileType(fileTypeNumber: number): string {
    switch (fileTypeNumber) {
      case FileType.Image:
        return 'Image';
      case FileType.Document:
        return 'Document';
      case FileType.Video:
        return 'Video';
      case FileType.Audio:
        return 'Audio';
      case FileType.Software:
        return 'Software';
      case FileType.Archive:
        return 'Archive';
      default:
        return 'Unknown';
    }
  }

}
