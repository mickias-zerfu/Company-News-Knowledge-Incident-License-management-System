import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryModel } from 'src/app/models/category.model';
import { ProductService } from 'src/app/services/product.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  ResourceForm: FormGroup;
  isEditMode = false;
  id: any;
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
    private toastService: ToastService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.isEditMode = data['isEditMode'] || false;
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(params, "------------------");
      console.log(this.id, "------------------");
    });

    this.ResourceForm = this.formBuilder.group({
      ResourceName: ['', Validators.required],
      description: ['', Validators.required],
      size: ['', Validators.required],
      category: ['', Validators.required],
      image: [null, Validators.required],
      isFeatured: [false]
    });
    // If it is an edit mode, you can pre-fill the form with existing resource data
    if (this.isEditMode) {
      this.populateFormWithResourceData();
    }
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

      this.ResourceForm.patchValue({ image: file });
      this.ResourceForm.get('image')?.updateValueAndValidity();
    }
  }

  private populateFormWithResourceData(): void {
    // Fetch the existing resource data and populate the form fields
    // Example: this.ResourceForm.patchValue({ title: existingResource.title, description: existingResource.description, ... });
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.ResourceForm.invalid) {
      return;
    }

    const formData = new FormData();
    Object.keys(this.ResourceForm.value).forEach((key) => {
      formData.append(key, this.ResourceForm.value[key]);
    });

    this.productService.addResource(formData).subscribe(() => {
      this.toastService.showSuccess('New Resource added', 'Close', 2000);
    });

    console.log(this.ResourceForm.value);
    console.log(formData);
  }

  get ResourceFormControls() {
    return this.ResourceForm.controls;
  }
}
