import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryModel } from 'src/app/models/category.model';
import { ProductService } from 'src/app/services/product.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;
  isEditMode = false;
  categories: CategoryModel[] = [
    { id: 1, name: 'Category 1', icon: '' },
    { id: 2, name: 'Category 2', icon: '' },
    { id: 3, name: 'Category 3', icon: '' }
  ];
  imageDisplay: any;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      manufacturer: ['', Validators.required],
      category: ['', Validators.required],
      inStock: ['', Validators.required],
      image: [null, Validators.required],
      isFeatured: [false]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.result) {
          this.imageDisplay = fileReader.result;
        }
      };
      fileReader.readAsDataURL(file);

      // Clear the value of the file input
      event.target.value = '';

      this.productForm.patchValue({ image: file });
      this.productForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.productForm.invalid) {
      return;
    }

    const formData = new FormData();
    Object.keys(this.productForm.value).forEach((key) => {
      formData.append(key, this.productForm.value[key]);
    });

    this.productService.addProduct(formData).subscribe(() => {
      this.toastService.showSuccess('New product added', 'Close', 2000);
    });

    console.log(this.productForm.value);
    console.log(formData);
  }

  get productFormControls() {
    return this.productForm.controls;
  }
}
