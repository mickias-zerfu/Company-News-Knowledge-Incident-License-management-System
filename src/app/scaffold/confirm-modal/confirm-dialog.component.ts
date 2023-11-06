import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  title: string;
  message: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {
    this.title = data.title;
    this.message = data.message;
  }

  onConfirm(): void {
    this.data.callback(true);
  }

  onCancel(): void {
    this.data.callback(false);
  }
}

export interface ConfirmDialogData {
  title: string;
  message: string;
  callback: (confirmed: boolean) => void;
}
