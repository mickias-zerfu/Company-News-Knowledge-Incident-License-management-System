import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {


  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private snackBar: MatSnackBar) { }

  showSuccess(message: string, action: string = 'Close', duration: number = 2000) {
    this.openSnackBar(message, action, duration, 'success-toast');
  }

  showError(message: string, action: string = 'Close', duration: number = 2000) {
    this.openSnackBar(message, action, duration, 'error-toast');
  }

  showInfo(message: string, action: string = 'Close', duration: number = 100000) {
    this.openSnackBar(message, action, duration, 'info-toast');
  }

  private openSnackBar(message: string, action: string, duration: number, panelClass: string) {
    this.snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: [panelClass],
      announcementMessage: message,
      politeness: 'polite',
      direction: 'ltr',
      data: { message: message },
    });
  }
}
