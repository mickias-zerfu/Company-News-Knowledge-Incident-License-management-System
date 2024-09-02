import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-assignment-license',
  templateUrl: './assignment-license.component.html',
  styleUrls: ['./assignment-license.component.css']
})
export class AssignmentLicenseComponent {
  licenses: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<AssignmentLicenseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.licenses = data.licenses;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  assignLicenses(): void {
    console.log();
    
    let  selectedLicenses = this.licenses.filter(License => License.selected);
    let selectedLicenseIds = selectedLicenses.map(license => license.id);
      
    
    this.dialogRef.close(selectedLicenseIds);
  }
}
