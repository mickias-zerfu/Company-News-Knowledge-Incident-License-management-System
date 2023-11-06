import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-mgmt',
  templateUrl: './product-mgmt.component.html',
  styleUrls: ['./product-mgmt.component.css' ]
})
export class ProductMgmtComponent {
  products: ProductModel[] = [
    // Add your product data here
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: '10.99',
      image_url:'https://dummyimage.com/300',
      manufacturer: 'Manufacturer 1',
      category: {
        id: 1,
        name: 'Candles',
        icon:'string'},
      instock: 10,
      isFeatured:true,
      created_at: '2021-01-01',
      updated_at: '2021-01-01'
    },
    // Add more products as needed
  ];
  displayedColumns: string[] = ['id', 'name', 'image_url','description', 'price', 'manufacturer', 'category', 'instock', 'created_at', 'updated_at', 'action'];


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

  editProduct(categoryId: number): void {
    // Logic to edit the category with the provided categoryId
    console.log(`Editing category with ID: ${categoryId}`);
  }
  deleteProduct(categoryId: number): void {
    // Logic to edit the category with the provided categoryId
    console.log(`Editing category with ID: ${categoryId}`);
  }
}
