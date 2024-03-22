import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Resource } from 'src/app/models/product.model';
import { FileService } from 'src/app/services/product.service';
import { ShareFileDialogComponent } from 'src/app/pages/resource-sharing/product-mgmt/share-file-dialog/share-file-dialog.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConfirmDialogComponent, ConfirmDialogData } from 'src/app/shared/confirm-modal/confirm-dialog.component';

@Component({
  selector: 'app-product-mgmt',
  templateUrl: './product-mgmt.component.html',
  styleUrls: ['./product-mgmt.component.css']
})
export class ProductMgmtComponent implements OnInit {
  products: Resource[] = [
  ];

  displayedColumns: string[] = ['id', 'fileTitle', 'fileName', 'fileDescription', 'fileType', 'created_at', 'updated_at', 'action'];

  constructor(private fileService: FileService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllFiles();
  }
  getAllFiles() {
    this.fileService.getAllFiles().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

  openFileDetail(fileId:number): void {

    const dialogRef = this.dialog.open(ProductDetailComponent, {
      width: '800px', // Adjust the width as needed
      data: { fileId } // Pass fileId as data to ShareFileDialogComponent
    });

    // Subscribe to dialog closed event to handle any actions after dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after dialog is closed (if needed)
    });
  }

  DownloadFile(fileId: any) {
    this.fileService.downloadFile(fileId).subscribe(data => {
      // this.router.navigateByUrl('file:///'+ data.filepath)
      const fileUrl = `http://localhost:5195/api/SharedResource/DownloadFile/${fileId}`;
      // Open the file in a new browser tab or window
      window.open(fileUrl, '_blank');
    });
  }
  shareThisFile(fileId: any) {
    const dialogRef = this.dialog.open(ShareFileDialogComponent, {
      width: '600px', // Adjust the width as needed
      data: { fileId } // Pass fileId as data to ShareFileDialogComponent
    });

    // Subscribe to dialog closed event to handle any actions after dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after dialog is closed (if needed)
    });
  }
  deleteFile(fileId: number): void {
    this.fileService.deleteFile(fileId).subscribe(data => {
      this.router.navigate(['/resources/managefiles']);
    })
  }
  openConfirmationDialog(fileId:number): void {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmation',
      message: 'Are you sure you want to delete this resource?',
      callback: (confirmed: boolean) => {
        if (confirmed) {
          this.deleteFile(fileId);
        }
      }
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData
    });
  }
}
