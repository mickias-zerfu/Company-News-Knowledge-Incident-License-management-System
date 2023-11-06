import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/services/categories.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-categories-modal',
  templateUrl: './categories-modal.component.html',
  styleUrls: ['./categories-modal.component.css']
})
export class CategoriesModalComponent implements OnInit {
  categoryForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CategoriesModalComponent>,
    private categoriesService: CategoriesService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      icon: ['', Validators.required]
    });

    if (this.data && this.data.category) {
      const category = this.data.category;
      this.isEditMode = true;
      this.categoryForm.patchValue({
        name: category.name,
        icon: category.icon
      });
    }
  }

  get formControls() {
    return this.categoryForm.controls;
  }

  saveCategory(): void {
    if (this.categoryForm.invalid) {
      return;
    }

    const categoryData = this.categoryForm.value;

    if (this.isEditMode) {
      // Logic to update the category with the provided categoryData
      this.categoriesService
        .updateCategoryContent(this.data.category.id, categoryData)
        .subscribe(() => {
          this.toastService.showSuccess(
            'The Category has been updated',
            'Close',
            2000
          );
          this.dialogRef.close(categoryData);
        });
    } else {
      // Logic to add a new category with the provided categoryData
      this.categoriesService.addCategory(categoryData).subscribe(() => {
        this.toastService.showSuccess(
          'New Category Added',
          'Close',
          2000
        );
        this.dialogRef.close(categoryData);
      });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
