import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KnowledgeModel } from 'src/app/models/knowledge.model';
import { KnowledgeService } from 'src/app/services/knowledge.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-knowledge-create',
  templateUrl: './knowledge-create.component.html',
  styleUrls: ['./knowledge-create.component.css']
})
export class KnowledgeCreateComponent implements OnInit {
  knowledgeForm: FormGroup;
  isEditMode: boolean = false;
  knowledgeId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private knowledgeService: KnowledgeService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.isEditMode = this.route.snapshot.data['isEditMode'] || false;
    this.knowledgeId = +this.route.snapshot.params['id'];
    this.initForm();
    if (this.isEditMode) {
      this.knowledgeService.getKnowledgeById(this.knowledgeId).subscribe((knowledge: KnowledgeModel) => {
        this.knowledgeForm.patchValue(knowledge);
      });
    }
  }

  initForm(): void {
    this.knowledgeForm = this.fb.group({
      problem: ['', [
        Validators.required,
        Validators.minLength(5),
      ]],
      problemDescription: ['', [
        Validators.required,
        Validators.minLength(20),
      ]],
      solution: ['', [
        Validators.required,
        Validators.minLength(10),
      ]]
    });
  }

  onSubmit(): void {
    if (this.knowledgeForm.valid) {
      if (this.isEditMode) {
        const formValueUpdate = { ...this.knowledgeForm.value };
        const updatedKnowledge: KnowledgeModel = { ...formValueUpdate, id: this.knowledgeId, updated_at: new Date().toDateString() };
        this.knowledgeService.updateKnowledge(this.knowledgeId, updatedKnowledge).subscribe(() => {
          this.router.navigate(['resources/knowledge', this.knowledgeId]);
          this.toastService.showSuccess('Knowledge Base update successfully.', 'Close', 2000);
        });
      } else {
        const formValueNew = { ...this.knowledgeForm.value, created_at: new Date().toDateString() };
        this.knowledgeService.addKnowledge(formValueNew).subscribe(() => {
          this.router.navigate(['resources/manageknowledges']);
          this.toastService.showSuccess('Knowledge Base added successfully.', 'Close', 2000);
        });
      }
    }
  }
}
