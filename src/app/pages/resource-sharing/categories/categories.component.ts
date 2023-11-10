

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesModalComponent } from './categories-modal/categories-modal.component';
import { CategoriesService } from 'src/app/services/categories.service';
import { ConfirmDialogData, ConfirmDialogComponent } from 'src/app/scaffold/confirm-modal/confirm-dialog.component';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [
    { id: 1, name: 'For Managers', icon: 'category', numProducts: 5 },
    { id: 2, name: 'Bank world', icon: 'category', numProducts: 10 },
    { id: 3, name: 'እኔ ምን አቃለው? ', icon: 'category', numProducts: 3 }
  ];

  displayedColumns: string[] = ['id', 'name', 'icon', 'action'];



  constructor(private dialog: MatDialog, private categoriesService: CategoriesService, private toastService: ToastService, private confirmdialog: MatDialog) { }
  ngOnInit() {
    this._getAllCategories();
  }
  _getAllCategories() {
    this.categoriesService.getAllCategorys().subscribe((categoryList => {
      this.categories = categoryList;
    }))

  }
  openModal(): void {
    const dialogRef = this.dialog.open(CategoriesModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // Logic to handle the result of the modal
      console.log(result);
    });
  }

  editCategory(categoryId: number): void {
    // Logic to retrieve the category data for editing based on the provided categoryId
    // this.categoriesService.getCategory(categoryId).subscribe(category => {
      const dialogRef = this.dialog.open(CategoriesModalComponent, {
        width: '400px',
        data: { category: {name:'abebe', icon:'icon'} }
      });

      dialogRef.afterClosed().subscribe(result => {
        // Handle any actions after the dialog is closed, such as updating the UI
        console.log(result);
        this._getAllCategories();
      });
    // });
  }
  deleteCategory(categoryId: number): void {
    // Logic to edit the category with the provided categoryId

    const dialogData: ConfirmDialogData = {
      title: 'Confirmation',
      message: 'Are you sure you want to proceed?',
      callback: (confirmed: boolean) => {
        if (confirmed) {
          this.categoriesService.deleteCategory(categoryId).subscribe((message) => {
            this.toastService.showSuccess('The Category Deleted', 'Close', 2000);
            this._getAllCategories();
          })
        } else {
          // User canceled the confirmation
        }
      }
    };

    this.confirmdialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: dialogData
    });
  }
  openConfirmDialog(): void {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmation',
      message: 'Are you sure you want to proceed?',
      callback: (confirmed: boolean) => {
        if (confirmed) {
          // User confirmed, perform the desired action
        } else {
          // User canceled the confirmation
        }
      }
    };

    this.confirmdialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: dialogData
    });
  }
}
