import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { IncidentCreateComponent } from './incident-mgmt/incident-create/incident-create.component';
import { IncidentDetailComponent } from './incident-mgmt/incident-detail/incident-detail.component';
import { IncidentMgmtComponent } from './incident-mgmt/incident-mgmt.component';
import { KnowledgeCreateComponent } from './knowledge-mgmt/knowledge-create/knowledge-create.component';
import { KnowledgeDetailComponent } from './knowledge-mgmt/knowledge-detail/knowledge-detail.component';
import { KnowledgeListComponent } from './knowledge-mgmt/knowledge-list/knowledge-list.component';
import { KnowledgeMgmtComponent } from './knowledge-mgmt/knowledge-mgmt.component';
import { NewsCreateComponent } from './news-mgmt/news-create/news-create.component';
import { NewsDetailComponent } from './news-mgmt/news-detail/news-detail.component';
import { NewsListComponent } from './news-mgmt/news-list/news-list.component';
import { NewsMgmtComponent } from './news-mgmt/news-mgmt.component';
import { ProductCreateComponent } from './product-mgmt/product-create/product-create.component';
import { ProductListComponent } from './product-mgmt/product-list/product-list.component';
import { ProductMgmtComponent } from './product-mgmt/product-mgmt.component';
import { ResourceDashboardComponent } from './resource-dashboard/resource-dashboard.component';




const routes: Routes = [

  { path: "status", component: ResourceDashboardComponent, canActivate: [AuthGuard] },

  { path: "news", component: NewsListComponent, canActivate: [AuthGuard] },
  { path: "managenews", component: NewsMgmtComponent, canActivate: [AuthGuard] },
  { path: "news/add", component: NewsCreateComponent, canActivate: [AuthGuard] },
  { path: "news/:id", component: NewsDetailComponent, canActivate: [AuthGuard] },
  { path: "news/:id/update", component: NewsCreateComponent, data: { isEditMode: true }, canActivate: [AuthGuard] },

  { path: "files", component: ProductListComponent, canActivate: [AuthGuard] },
  { path: "managefiles", component: ProductMgmtComponent, canActivate: [AuthGuard] },
  { path: "files/add", component: ProductCreateComponent, canActivate: [AuthGuard] },
  // { path: "files/:id", component: ProductDetailComponent   , canActivate: [AuthGuard] },
  { path: "files/:id/update", component: ProductCreateComponent, data: { isEditMode: true }, canActivate: [AuthGuard] },


  { path: "incidents", component: IncidentMgmtComponent, canActivate: [AuthGuard] },
  { path: "incident/add", component: IncidentCreateComponent, canActivate: [AuthGuard] },
  { path: "incident/:id", component: IncidentDetailComponent, canActivate: [AuthGuard] },
  { path: "incident/:id/update", component: IncidentCreateComponent, data: { isEditMode: true }, canActivate: [AuthGuard] },

  { path: "knowledges", component: KnowledgeListComponent, canActivate: [AuthGuard] },
  { path: "manageknowledges", component: KnowledgeMgmtComponent, canActivate: [AuthGuard] },
  { path: "knowledge/add", component: KnowledgeCreateComponent, canActivate: [AuthGuard] },
  { path: "knowledge/:id", component: KnowledgeDetailComponent, canActivate: [AuthGuard] },
  { path: "knowledge/:id/update", component: KnowledgeCreateComponent, data: { isEditMode: true }, canActivate: [AuthGuard] },


]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ResourceSharingRoutingModule { }
