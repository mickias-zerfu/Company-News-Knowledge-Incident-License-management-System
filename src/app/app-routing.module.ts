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
import { ProductDetailComponent } from './pages/resource-sharing/product-detail/product-detail.component';
import { LicenseManagementComponent } from './pages/license-management/license-management.component';
import { LicenseDashboardComponent } from './pages/license-management/license-dashboard/license-dashboard.component';
import { LicenseListComponent } from './pages/license-management/license-list/license-list.component';
import { VendorsMgmtComponent } from './pages/license-management/vendors-mgmt/vendors-mgmt.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';
import { ServicesComponent } from './pages/transaction-monitoring/services/services.component';
import { TransactionsComponent } from './pages/transaction-monitoring/transactions/transactions.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "login", component: LoginComponent },
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
      { path: "resourceList", component: ProductMgmtComponent },
      { path: "add", component: ProductCreateComponent },
      { path: ":id", component: ProductDetailComponent },
      { path: ":id/update", component: ProductCreateComponent , data: { isEditMode: true } },
    ]
  },

  // licences links
  {
    path: "licences", component: LicenseManagementComponent,
    children: [
      { path: "", component: LicenseDashboardComponent },
      { path: "lists", component: LicenseListComponent },
      { path: "users", component: UserManagementComponent },
      { path: "vendors", component: VendorsMgmtComponent },
      { path: ":id/update", component: ProductCreateComponent, data: { isEditMode: true } },
    ]
  },


  // Static pages
  { path: "about-us", component: AboutUsComponent },
  { path: "contact-us", component: ContactUsComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
