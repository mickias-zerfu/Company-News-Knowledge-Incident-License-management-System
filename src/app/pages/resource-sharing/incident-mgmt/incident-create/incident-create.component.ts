// incident-create.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Incident } from 'src/app/models/incident.model';
import { IncidentService } from 'src/app/services/incident.service';

@Component({
  selector: 'app-incident-create',
  templateUrl: './incident-create.component.html',
  styleUrls: ['./incident-create.component.css']
})
export class IncidentCreateComponent implements OnInit {
  incident: Incident = new Incident();
  incidentForm: FormGroup;


  statusActions: string[] = []; 
  quickReviews: string[] = [];
  solutionToIncidents: string[] = [];


  isEditMode: boolean = false;

  constructor(private incidentService: IncidentService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isEditMode = this.route.snapshot.data['isEditMode'] || false;
    this.initForm();
    if (this.isEditMode) {
      const incidentId = this.route.snapshot.params['id'];
      // Fetch incident details and populate the form for editing
      this.incidentService.getIncidentById(incidentId).subscribe({
        next: (incident: Incident) => {
          this.incident = incident;
          this.populateForm();
        },
        error: (err) => console.log(err)
      });
    }
  }

  initForm(): void {
    this.incidentForm = new FormGroup({

      incidentTitle: new FormControl('', Validators.required),
      incidentDescription: new FormControl('', Validators.required),
      statusAction: new FormControl(this.statusActions, Validators.required),
      quickReviews: new FormControl(this.quickReviews, Validators.required),
      solutionToIncident: new FormControl(this.solutionToIncidents, Validators.required),
      remark: new FormControl('')
    });
  }
  populateForm(): void {
    this.incidentForm.patchValue({
      incidentTitle: this.incident.incidentTitle,
      incidentDescription: this.incident.incidentDescription,
      remark: this.incident.remark
    });
    this.statusActions = this.incident.statusAction;
    this.quickReviews = this.incident.quickReviews;
    this.solutionToIncidents = this.incident.solutionToIncident;
  }

  addStatusAction(actionInput: HTMLInputElement): void {
    const action = actionInput.value.trim();
    if (action.trim()) {
      this.statusActions.push(action.trim());
      this.incidentForm.get('statusAction')?.setValue(this.statusActions);
      actionInput.value = '';
    }
  }
  addQuickReviews(actionInput: HTMLInputElement): void {

    const action = actionInput.value.trim(); if (action.trim()) {

      this.quickReviews.push(action.trim());
      this.incidentForm.get('quickReviews')?.setValue(this.quickReviews);
      console.log(this.quickReviews);
      actionInput.value = '';

    }
  }
  addSolutionToIncidents(actionInput: HTMLTextAreaElement): void {

    const action = actionInput.value.trim(); if (action.trim()) {

      this.solutionToIncidents.push(action.trim());
      this.incidentForm.get('solutionToIncident')?.setValue(this.solutionToIncidents);
      actionInput.value = '';

    }
  }

  removeFromArray(array: string[], item: string): void {
    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      console.log(this.incident, '  ---  ', this.incidentForm.value)
      this.incident = { ...this.incident, ... this.incidentForm.value }; 
      this.incidentService.updateIncident(this.incident.id, this.incident).subscribe({
        next: () => {
          this.router.navigate(['/resources/incidents']);
        },
        error: (err) => console.log(err)
      });
    }
    else {
    this.incident.created_at = new Date().toDateString();
      const newIncident: Incident = { ...this.incidentForm.value, created_at: new Date().toDateString() };

      this.incidentService.addIncident(newIncident).subscribe({
        next: () => {
          this.router.navigate(['/resources/incidents']);
        }
        , error: err => console.log(err)
      })
    }

  }
}
