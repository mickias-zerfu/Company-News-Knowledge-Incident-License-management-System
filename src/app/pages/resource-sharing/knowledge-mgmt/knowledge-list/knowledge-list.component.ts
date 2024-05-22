import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KnowledgeModel } from 'src/app/models/knowledge.model';
import { KnowledgeService } from 'src/app/services/knowledge.service';
import { ConfirmDialogComponent, ConfirmDialogData } from 'src/app/shared/confirm-modal/confirm-dialog.component';

@Component({
  selector: 'app-knowledge-list',
  templateUrl: './knowledge-list.component.html',
  styleUrls: ['./knowledge-list.component.css']
})
export class KnowledgeListComponent {

@Input()knowledges: KnowledgeModel[] = [
];
displayedColumns: string[] = ['id', 'problemTitle', 'problemDescription', 'created_at', 'updated_at', 'action'];

constructor(private knowledgeService: KnowledgeService, private router: Router, private dialog: MatDialog) { }
openFileDetail(fileId:number): void {
  this.router.navigate(['/resources/knowledge', fileId]);
}

deleteFile(fileId: number): void {
  this.knowledgeService.deleteKnowledge(fileId).subscribe(data => {
    this.router.navigate(['/resources/manageknowledges']);
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
