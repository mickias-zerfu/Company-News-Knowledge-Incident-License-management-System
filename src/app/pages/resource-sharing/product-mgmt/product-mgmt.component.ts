import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Resource } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-mgmt',
  templateUrl: './product-mgmt.component.html',
  styleUrls: ['./product-mgmt.component.css']
})
export class ProductMgmtComponent {
  products: Resource[] = [
    // Add your product data here
    {
      id: 1,
      title: 'Resource 1',
      description: 'Description 1',
      category: {
        id: 1,
        name: 'Candles',
        icon: 'string'
      },
      filename: 'string',
      size: 2,
      isFeatured: true,
      created_at: '2021-01-01',
      updated_at: '2021-01-01'
    },
    {
      id: 2,
      title: 'Resource 2',
      description: 'Description 1',
      category: {
        id: 1,
        name: 'Candles',
        icon: 'string'
      },
      filename: 'string',
      size: 2,
      isFeatured: true,
      created_at: '2021-01-01',
      updated_at: '2021-01-01'
    },
    {
      id: 3,
      title: 'Resource 3',
      description: 'Description 1',
      category: {
        id: 1,
        name: 'Candles',
        icon: 'string'
      },
      filename: 'string',
      size: 2,
      isFeatured: true,
      created_at: '2021-01-01',
      updated_at: '2021-01-01'
    },
  ];
  displayedColumns: string[] = ['id', 'title', 'filename', 'description', 'size', 'category',  'created_at', 'updated_at', 'action'];


  constructor(private dialog: MatDialog) { }

  openModal(): void {


    // const dialogRef = this.dialog.open(CategoriesModalComponent, {
    //   width: '400px'
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   // Logic to handle the result of the modal
    //   console.log(result);
    // });
  }

  // editProduct(categoryId: number): void {
  //   // Logic to edit the category with the provided categoryId
  //   console.log(`Editing category with ID: ${categoryId}`);
  // }
  deleteProduct(categoryId: number): void {
    // Logic to edit the category with the provided categoryId
    console.log(`Editing category with ID: ${categoryId}`);
  }
}
