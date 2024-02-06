import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-product-list',
  templateUrl: './software-product-list.component.html',
  styleUrls: ['./software-product-list.component.css']
})
export class SoftwareProductListComponent implements OnInit {

  products: any[] = [
    {
      "id": 1,
      "title": "CR2",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://placehold.co/600x400",
      "images": ["...", "...", "..."]
    },
    {
      "id": 1,
      "title": "IDK",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://placehold.co/600x400",
      "images": ["...", "...", "..."]
    },
    {
      "id": 1,
      "title": "IDK",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://placehold.co/600x400",
      "images": ["...", "...", "..."]
    },
    {
      "id": 1,
      "title": "IDGAF",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://placehold.co/600x400",
      "images": ["...", "...", "..."]
    },
  ]

  ngOnInit(): void {
    this.products = this.products;
  }
}
