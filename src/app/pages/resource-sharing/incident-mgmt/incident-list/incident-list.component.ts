import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Incident } from 'src/app/models/incident.model';
import { IncidentService } from 'src/app/services/incident.service';
import { ConfirmDialogData, ConfirmDialogComponent } from 'src/app/shared/confirm-modal/confirm-dialog.component';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent {

  @Input()incidents: Incident[] = [
  ];
  displayedColumns: string[] = ['id', 'incidentTitle', 'incidentDescription', 'created_at', 'updated_at', 'action'];

  constructor(private incidentService: IncidentService, private router: Router, private dialog: MatDialog) { }
  openFileDetail(fileId:number): void {
    this.router.navigate(['/resources/incident', fileId]);
  }

  deleteFile(fileId: number): void {
    this.incidentService.deleteIncident(fileId).subscribe(data => {
      this.router.navigate(['/resources/incidents']);
      location.reload();
    })
  }
  openConfirmationDialog(fileId:number): void {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmation',
      message: 'Are you sure you want to delete this resource?',
      callback: (confirmed: boolean) => {
        if (confirmed) {
          this.deleteFile(fileId);
        }
      }
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData
    });
  }
}
