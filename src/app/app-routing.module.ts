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
import { ServicesComponent } from './pages/transaction-monitoring/services/services.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { TransactionsComponent } from './pages/transaction-monitoring/transactions/transactions.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';
import { LicenseFormComponent } from './pages/license-management/license-form/license-form.component';
import { LicenseDetailComponent } from './pages/license-management/license-detail/license-detail.component';
import { SoftwareProductListComponent } from './pages/license-management/software-product/software-product-list/software-product-list.component';
import { SoftwareProductFormComponent } from './pages/license-management/software-product/software-product-form/software-product-form.component';
import { SoftwareProductDetailComponent } from './pages/license-management/software-product/software-product-detail/software-product-detail.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsMgmtComponent } from './pages/resource-sharing/news-mgmt/news-mgmt.component';
import { NewsCreateComponent } from './pages/resource-sharing/news-mgmt/news-create/news-create.component';
import { NewsDetailComponent } from './pages/resource-sharing/news-mgmt/news-detail/news-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
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
      { path: "news", component: NewsMgmtComponent },
      { path: "news/add", component: NewsCreateComponent },
      { path: "news:id", component: NewsDetailComponent },
      { path: "news:id/update", component: NewsCreateComponent, data: { isEditMode: true } },
      { path: "add", component: ProductCreateComponent },
      { path: ":id", component: ProductDetailComponent },
      { path: ":id/update", component: ProductCreateComponent, data: { isEditMode: true } },
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
      { path: "products", component: SoftwareProductListComponent },
      // children: [
      { path: "", component: SoftwareProductListComponent },
      { path: "products/add", component: SoftwareProductFormComponent },
      { path: "products/:id", component: SoftwareProductDetailComponent },
      { path: "products/:id/update", component: SoftwareProductFormComponent, data: { isEditMode: true } },
      // ]
      // },
      {        path: "users",        component: UserManagementComponent },
        // children: [
          { path: "user/add", component: UserManagementComponent },
          { path: "user/:id", component: UserManagementComponent },
          { path: "user/:id/update", component: UserManagementComponent, data: { isEditMode: true } },
        // ]
      // },
      {
        path: "vendors",
        component: VendorsMgmtComponent,
        children: [
          { path: "add", component: VendorsMgmtComponent },
          { path: ":id", component: VendorsMgmtComponent },
          { path: ":id/update", component: VendorsMgmtComponent, data: { isEditMode: true } }
        ]
      },
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
