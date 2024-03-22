import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KnowledgeModel } from 'src/app/models/knowledge.model';
import { KnowledgeService } from 'src/app/services/knowledge.service';

@Component({
  selector: 'app-knowledge-detail',
  templateUrl: './knowledge-detail.component.html',
  styleUrls: ['./knowledge-detail.component.css']
})
export class KnowledgeDetailComponent implements OnInit {

  knowledge: KnowledgeModel;
  knowledgeId: number;
  defaultImage: any;


  constructor(private route: ActivatedRoute, private router: Router, private knowledgeService: KnowledgeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.knowledgeId = +params['id']; // Replace 'id' with the actual parameter name for the incident ID
      this.fetchKnowledgeDetails(this.knowledgeId);
    });
  }

  fetchKnowledgeDetails(blogId: number) {
    this.knowledgeService.getKnowledgeById(blogId).subscribe(Knowledge => {
      this.knowledge = Knowledge;
    });
  }
  AddNewKnowledge() {
    this.router.navigate(['/resources/knowledge/add'])
  }
  GoToknowledgeList() {
    this.router.navigate(['/resources/manageknowledges'])
  }
  UpdateKnowledge() {
    this.router.navigate(['/resources/knowledge/', this.knowledgeId, 'update'])
  }
  DeleteKnowledge() {
    this.knowledgeService.deleteKnowledge(this.knowledgeId).subscribe(data => {
      this.router.navigate(['/resources/manageknowledges']);
    })
  }
}
