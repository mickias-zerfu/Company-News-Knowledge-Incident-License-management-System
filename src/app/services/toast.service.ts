import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackBar: MatSnackBar) { }

  showSuccess(message: string, action: string = 'Close', duration: number = 2000) {
    this.openSnackBar(message, action, duration, 'success-toast');
  }

  showError(message: string, action: string = 'Close', duration: number = 2000) {
    this.openSnackBar(message, action, duration, 'error-toast');
  }

  showInfo(message: string, action: string = 'Close', duration: number = 2000) {
    this.openSnackBar(message, action, duration, 'info-toast');
  }

  private openSnackBar(message: string, action: string, duration: number, panelClass: string) {
    this.snackBar.open(message, action, {
      duration: duration,
      panelClass: [panelClass]
    });
  }
}
