import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserManagementRoutingModule } from '../user-management/user-management-routing.module';
import { CategoriesModalComponent } from './categories/categories-modal/categories-modal.component';
import { CategoriesComponent } from './categories/categories.component';
import { IncidentCreateComponent } from './incident-mgmt/incident-create/incident-create.component';
import { IncidentDetailComponent } from './incident-mgmt/incident-detail/incident-detail.component';
import { IncidentListComponent } from './incident-mgmt/incident-list/incident-list.component';
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
import { ProductDetailComponent } from './product-mgmt/product-detail/product-detail.component';
import { ProductListComponent } from './product-mgmt/product-list/product-list.component';
import { ProductMgmtComponent } from './product-mgmt/product-mgmt.component';
import { ShareFileDialogComponent } from './product-mgmt/share-file-dialog/share-file-dialog.component';
import { ResourceDashboardComponent } from './resource-dashboard/resource-dashboard.component';
import { ResourceSharingComponent } from './resource-sharing.component';
import { QuillModule } from 'ngx-quill';



@NgModule({
  declarations: [
    ResourceSharingComponent,
    CategoriesComponent,
    ProductMgmtComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductListComponent,
    CategoriesModalComponent,
    ResourceDashboardComponent,
    NewsMgmtComponent,
    NewsCreateComponent,
    NewsDetailComponent,
    IncidentDetailComponent,
    IncidentCreateComponent,
    IncidentListComponent,
    IncidentMgmtComponent,
    NewsListComponent,
    KnowledgeListComponent,
    KnowledgeDetailComponent,
    KnowledgeCreateComponent,
    KnowledgeMgmtComponent,
    ShareFileDialogComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
     QuillModule
  ]
})
export class ResourceSharingModule { }
