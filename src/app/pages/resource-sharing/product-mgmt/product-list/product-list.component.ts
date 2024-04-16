import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css','./card.css']
})
export class ProductListComponent implements OnInit {
 files: any[];
  selectedCategory: string = 'all';

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.getAllFiles();
  }

  getAllFiles() {
    this.fileService.getAllFiles().subscribe(data => {
      this.files = data;
      console.log(this.files);

    });
  }
  downloadFile(fileId: any) {

    this.fileService.downloadFile(fileId).subscribe(data => {
      const fileUrl = data.filePath;
      window.open(fileUrl, '_blank');
    });
    //this.fileService.downloadFile(fileId).subscribe(data => {
    //  // this.router.navigateByUrl('file:///'+ data.filepath)
    //  const fileUrl = `http://localhost:5195/api/SharedResource/DownloadFile/${fileId}`;
    //  // Open the file in a new browser tab or window
    //  window.open(fileUrl, '_blank');
    //});
  }

}
