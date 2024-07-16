// incident-create.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Incident } from 'src/app/models/incident.model';
import { IncidentService } from 'src/app/services/incident.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-incident-create',
  templateUrl: './incident-create.component.html',
  styleUrls: ['./incident-create.component.css']
})
export class IncidentCreateComponent implements OnInit {
  incident: Incident = new Incident();
  incidentForm: FormGroup;
  statusAction: string[] = [];
  quickReviews: string[] = [];
  solutionToIncident: string[] = [];
  isEditMode: boolean = false;

  constructor(private incidentService: IncidentService, private router: Router,
    private route: ActivatedRoute, private toastService: ToastService) { }

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
        //error: (err) => console.log(err)
      });
    }
  }

  initForm(): void {
    this.incidentForm = new FormGroup({
      incidentTitle: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      incidentDescription: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      statusAction: new FormControl(this.statusAction, [
        Validators.required,
      ]),
      quickReviews: new FormControl(this.quickReviews, [
        Validators.required,
      ]),
      solutionToIncident: new FormControl(this.solutionToIncident, [
        Validators.required,
      ]),
      remark: new FormControl('')
    });
  }
  populateForm(): void {
    this.incidentForm.patchValue({
      incidentTitle: this.incident.incidentTitle,
      incidentDescription: this.incident.incidentDescription,
      statusAction: this.incident.statusAction,
      quickReviews:this.incident.quickReviews,
      solutionToIncident : this.incident.solutionToIncident,
      remark: this.incident.remark
    });
    this.statusAction = this.incident.statusAction;
    this.quickReviews = this.incident.quickReviews;
    this.solutionToIncident = this.incident.solutionToIncident;
  }

  addStatusAction(actionInput: HTMLInputElement): void {
    const action = actionInput.value.trim();
    if (action.trim()) {
      this.statusAction.push(action.trim());
      this.incidentForm.get('statusAction')?.setValue(this.statusAction);
      actionInput.value = '';
    }
  }
  addQuickReviews(actionInput: HTMLInputElement): void {

    const action = actionInput.value.trim(); if (action.trim()) {

      this.quickReviews.push(action.trim());
      this.incidentForm.get('quickReviews')?.setValue(this.quickReviews);
      actionInput.value = '';

    }
  }
  addSolutionToIncidents(actionInput: HTMLTextAreaElement): void {

    const action = actionInput.value.trim(); if (action.trim()) {

      this.solutionToIncident.push(action.trim());
      this.incidentForm.get('solutionToIncident')?.setValue(this.solutionToIncident);
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
    if (this.incidentForm.valid) {
      if (this.isEditMode) {
        this.incident.updated_at = new Date().toDateString();
        this.incidentForm.get('statusAction')?.setValue(this.statusAction);
        this.incidentForm.get('quickReviews')?.setValue(this.quickReviews);
        this.incidentForm.get('solutionToIncident')?.setValue(this.solutionToIncident);
        const newIncident: Incident = { ...this.incident, ... this.incidentForm.value };
        this.incidentService.updateIncident(this.incident.id, newIncident).subscribe({
          next: () => {
            this.router.navigate(['/resources/incidents']);
            this.toastService.showSuccess('Incident updated successfully.', 'Close', 2000);
          },
          error: (err) => {
            this.toastService.showError('Faild to update incident', 'Close', 2000);
          }
        });
      }
      else {

        if (
          this.statusAction.length === 0 || this.quickReviews.length === 0 || this.solutionToIncident.length === 0
        ) {
          this.toastService.showError('Please fill the required fields.', 'Close', 2000);
          return;
        }
        const newIncident: Incident = { ...this.incidentForm.value, created_at: new Date().toDateString() };

        this.incidentService.addIncident(newIncident).subscribe({
          next: () => {
            this.router.navigate(['/resources/incidents']);
            this.toastService.showSuccess('Incident added successfully.', 'Close', 2000);
          },
          error: err => {
            this.toastService.showError('Failed to add incident', 'Close', 2000);
          }
        })
      }
    }
  }
}
