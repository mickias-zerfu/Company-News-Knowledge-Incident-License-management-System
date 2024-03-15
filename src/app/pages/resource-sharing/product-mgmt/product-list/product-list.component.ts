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

  searchFiles(query: string) {
    this.fileService.searchFiles(query).subscribe(data => {
      this.files = data.Files;
    });
  }

  addFile(File: any) {
    this.fileService.addResource(File).subscribe(data => {
      // Handle response
    });
  }

  updateFile(FileId: number,file: any) {
    this.fileService.updateFile(FileId,file).subscribe(data => {
      // Handle response
    });
  }

  deleteFile(FileId: number) {
    this.fileService.deleteFile(FileId).subscribe(data => {
      // Handle response
    });
  }
}
