import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KnowledgeModel } from 'src/app/models/knowledge.model';
import { KnowledgeService } from 'src/app/services/knowledge.service';
import { ConfirmDialogComponent, ConfirmDialogData } from 'src/app/shared/confirm-modal/confirm-dialog.component';

@Component({
  selector: 'app-knowledge-mgmt',
  templateUrl: './knowledge-mgmt.component.html',
  styleUrls: ['./knowledge-mgmt.component.css']
})
export class KnowledgeMgmtComponent implements OnInit {
  knowledges: KnowledgeModel[] = [
  ];
  constructor(private knowledgeService: KnowledgeService, private router: Router, private dialog: MatDialog  ) { }

  ngOnInit() {
    this.getAllKnowledgeService();
  }
  getAllKnowledgeService() {
    this.knowledgeService.getAllKnowledges().subscribe(data => {
      this.knowledges = data;
    });
  }

  openKnowledgeDetail(fileId:number): void {
    this.router.navigate(['/resources/knowledges', fileId]);
  }

  deleteFile(fileId: number): void {
    this.knowledgeService.deleteKnowledge(fileId).subscribe(data => {
      this.router.navigate(['/resources/knowledges']);
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
