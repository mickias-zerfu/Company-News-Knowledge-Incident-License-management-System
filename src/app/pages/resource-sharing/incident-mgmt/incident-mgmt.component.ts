import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Resource } from 'src/app/models/product.model';
import { ConfirmDialogData, ConfirmDialogComponent } from 'src/app/shared/confirm-modal/confirm-dialog.component';
import { IncidentService } from 'src/app/services/incident.service';
import { Incident } from 'src/app/models/incident.model';

@Component({
  selector: 'app-incident-mgmt',
  templateUrl: './incident-mgmt.component.html',
  styleUrls: ['./incident-mgmt.component.css']
})
export class IncidentMgmtComponent implements OnInit {
  incidents: Incident[] = [
  ];
  displayedColumns: string[] = ['id', 'incidentTitle', 'incidentDescription', 'created_at', 'updated_at', 'action'];

  constructor(private incidentService: IncidentService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllIncidentService();
  }
  getAllIncidentService() {
    this.incidentService.getAllIncidents().subscribe(data => {
      this.incidents = data;
      console.log(this.incidents);
    });
  }

  openFileDetail(fileId:number): void {
    this.router.navigate(['/resources/manageincidents', fileId]);
  }

  deleteFile(fileId: number): void {
    this.incidentService.deleteIncident(fileId).subscribe(data => {
      this.router.navigate(['/resources/manageincidents']);
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
