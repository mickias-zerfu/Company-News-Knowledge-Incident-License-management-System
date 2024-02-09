import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-product-detail',
  templateUrl: './software-product-detail.component.html',
  styleUrls: ['./software-product-detail.component.css']
})
export class SoftwareProductDetailComponent  implements OnInit {

  @Input() product: any;
  ngOnInit(): void {
    this.product = {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://placehold.co/600x400",
    }
  }
}

