import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Incident } from 'src/app/models/incident.model';
import { IncidentService } from 'src/app/services/incident.service';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.css']
})
export class IncidentDetailComponent implements OnInit {

  incident: Incident;
  incidentId: number;
  defaultImage: any;


  constructor(private route: ActivatedRoute, private router: Router, private incidentService: IncidentService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.incidentId = +params['id']; // Replace 'id' with the actual parameter name for the incident ID
      this.fetchincidentDetails(this.incidentId);
    });
  }

  fetchincidentDetails(blogId: number) {
    this.incidentService.getIncidentById(blogId).subscribe(incident => {
      this.incident = incident;
    });
  }
  AddNewIncident() {
    this.router.navigate(['/resources/incident/add'])
  }
  GoToIncidentList() {
    this.router.navigate(['/resources/incidents'])
  }
  UpdateIncident() {
    this.router.navigate(['/resources/incident/', this.incidentId, 'update'])
  }
  DeleteIncident() {
    this.incidentService.deleteIncident(this.incidentId).subscribe(data => {
      this.router.navigate(['/resources/incidents'])
    })
  }
}
