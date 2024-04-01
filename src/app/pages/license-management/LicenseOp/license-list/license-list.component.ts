import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LicenseManagerService } from 'src/app/services/licenses/license-manager.service';
import { ToastService } from 'src/app/services/toast.service';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.css']
})
export class LicenseListComponent implements OnInit {
  constructor(private router: Router, private licenseManagerService: LicenseManagerService, private dialog: MatDialog, private toastService: ToastService) { }

  ngOnInit() {
  }
  checkExpiration(): void {
    // Logic to trigger the check expiration API
    const dialogRef = this.dialog.open(LoadingComponent, {
      width: '300px',
      height: '200px',
      hasBackdrop: true,
      panelClass: 'transparent',
      disableClose: true
    });
    this.licenseManagerService.checkExpiration().subscribe((res) => {
      dialogRef.close();
      this.showResponseDialog(res);
    }, (err) => {
      dialogRef.close();
      console.error(err);
    })
  }
  onAddLicense() {
    this.router.navigate(['/licenses/add'])
  }
  private showResponseDialog(response: any): void {
    this.toastService.showSuccess(JSON.stringify(response.message));
  }
}
