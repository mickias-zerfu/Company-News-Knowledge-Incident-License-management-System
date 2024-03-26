// assignment.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  managers: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<AssignmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.managers = data.managers;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  assignManagers(): void {
    const selectedManagers = this.managers.filter(manager => manager.selected);
    this.dialogRef.close(selectedManagers);
  }
}
