import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './scaffold/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { DailyChecklistComponent } from './pages/daily-checklist/daily-checklist.component';
import { ResourceSharingComponent } from './pages/resource-sharing/resource-sharing.component';
import { CategoriesComponent } from './pages/resource-sharing/categories/categories.component';
import { ProductMgmtComponent } from './pages/resource-sharing/product-mgmt/product-mgmt.component';
import { ResourceDashboardComponent } from './pages/resource-sharing/resource-dashboard/resource-dashboard.component';
import { ProductCreateComponent } from './pages/resource-sharing/product-mgmt/product-create/product-create.component';
import { LicenseManagementComponent } from './pages/license-management/license-management.component';
import { LicenseDashboardComponent } from './pages/license-management/license-dashboard/license-dashboard.component';
import { ServicesComponent } from './pages/transaction-monitoring/services/services.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { TransactionsComponent } from './pages/transaction-monitoring/transactions/transactions.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';
import { SoftwareProductListComponent } from './pages/license-management/software-product/software-product-list/software-product-list.component';
import { SoftwareProductFormComponent } from './pages/license-management/software-product/software-product-form/software-product-form.component';
import { SoftwareProductDetailComponent } from './pages/license-management/software-product/software-product-detail/software-product-detail.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsMgmtComponent } from './pages/resource-sharing/news-mgmt/news-mgmt.component';
import { NewsCreateComponent } from './pages/resource-sharing/news-mgmt/news-create/news-create.component';
import { NewsDetailComponent } from './pages/resource-sharing/news-mgmt/news-detail/news-detail.component';
import { NewsListComponent } from './pages/resource-sharing/news-mgmt/news-list/news-list.component';
import { ProductListComponent } from './pages/resource-sharing/product-mgmt/product-list/product-list.component';
import { IncidentListComponent } from './pages/resource-sharing/incident-mgmt/incident-list/incident-list.component';
import { IncidentCreateComponent } from './pages/resource-sharing/incident-mgmt/incident-create/incident-create.component';
import { IncidentDetailComponent } from './pages/resource-sharing/incident-mgmt/incident-detail/incident-detail.component';
import { IncidentMgmtComponent } from './pages/resource-sharing/incident-mgmt/incident-mgmt.component';
import { KnowledgeCreateComponent } from './pages/resource-sharing/knowledge-mgmt/knowledge-create/knowledge-create.component';
import { KnowledgeDetailComponent } from './pages/resource-sharing/knowledge-mgmt/knowledge-detail/knowledge-detail.component';
import { KnowledgeListComponent } from './pages/resource-sharing/knowledge-mgmt/knowledge-list/knowledge-list.component';
import { KnowledgeMgmtComponent } from './pages/resource-sharing/knowledge-mgmt/knowledge-mgmt.component';
import { LicenseListComponent } from './pages/license-management/LicenseOp/license-list/license-list.component';
import { LicenseFormComponent } from './pages/license-management/LicenseOp/license-form/license-form.component';
import { LicenseDetailComponent } from './pages/license-management/LicenseOp/license-detail/license-detail.component';
import { AddLicenseManagerComponent } from './pages/license-management/License-Manager/add-license-manager/add-license-manager.component';
import { DetailLicenseManagerComponent } from './pages/license-management/License-Manager/detail-license-manager/detail-license-manager.component';
import { LmanagersMgmtComponent } from './pages/license-management/License-Manager/users-mgmt.component';
import { ListLicenseManagerComponent } from './pages/license-management/License-Manager/list-license-manager/list-license-manager.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signout", component: LoginComponent },
  { path: "notifications", component: NotificationsComponent },


  { path: "dashboard", component: DashboardComponent },


  { path: "transactions", component: TransactionsComponent },
  { path: "service", component: ServicesComponent },
  { path: "user-management", component: UserManagementComponent },
  { path: "help", component: FaqsComponent },
  // Daily Checklist
  { path: "checklist", component: DailyChecklistComponent },

  // Resources
  {
    path: "resources", component: ResourceSharingComponent,
    children: [
      { path: "", component: ResourceDashboardComponent },

      { path: "categories", component: CategoriesComponent },

      { path: "news", component: NewsListComponent },
      { path: "managenews", component: NewsMgmtComponent },
      { path: "news/add", component: NewsCreateComponent },
      { path: "news/:id", component: NewsDetailComponent },
      { path: "news/:id/update", component: NewsCreateComponent, data: { isEditMode: true } },

      { path: "files", component: ProductListComponent },
      { path: "managefiles", component: ProductMgmtComponent },
      { path: "files/add", component: ProductCreateComponent },
      // { path: "files/:id", component: ProductDetailComponent },
      { path: "files/:id/update", component: ProductCreateComponent, data: { isEditMode: true } },


      { path: "incidents", component: IncidentMgmtComponent },
      { path: "incident/add", component: IncidentCreateComponent },
      { path: "incident/:id", component: IncidentDetailComponent },
      { path: "incident/:id/update", component: IncidentCreateComponent, data: { isEditMode: true } },

      { path: "knowledges", component: KnowledgeListComponent },
      { path: "manageknowledges", component: KnowledgeMgmtComponent },
      { path: "knowledge/add", component: KnowledgeCreateComponent },
      { path: "knowledge/:id", component: KnowledgeDetailComponent },
      { path: "knowledge/:id/update", component: KnowledgeCreateComponent, data: { isEditMode: true } },

    ]
  },

  // licenses links
  {
    path: "licenses",
    component: LicenseManagementComponent,
    children: [
      { path: "", component: LicenseDashboardComponent }, // Default route should be placed at the end
      { path: "lists", component: LicenseListComponent },
      { path: "add", component: LicenseFormComponent },
      { path: "license/:id/update", component: LicenseFormComponent },
      { path: "license/:id", component: LicenseDetailComponent },

      { path: "softwares", component: SoftwareProductListComponent },
      { path: "software/add", component: SoftwareProductFormComponent },
      { path: "software/:id", component: SoftwareProductDetailComponent },
      { path: "software/:id/update", component: SoftwareProductFormComponent, data: { isEditMode: true } },
      // ]
      // },
      { path: "lmanagers", component: LmanagersMgmtComponent },
      // children: [
      { path: "lmanagers/lists", component: ListLicenseManagerComponent },
      { path: "lmanagers/add", component: AddLicenseManagerComponent },
      { path: "lmanagers/:id", component: DetailLicenseManagerComponent },
      { path: "lmanagers/:id/update", component: AddLicenseManagerComponent, data: { isEditMode: true } },
      // ]
      // },
      // { path: ":id", component: LicenseDetailComponent },
      // { path: ":id/update", component: LicenseFormComponent, data: { isEditMode: true } },
    ]
  },


  // Static pages
  { path: "about-us", component: AboutUsComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "**", component: PagenotfoundComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
