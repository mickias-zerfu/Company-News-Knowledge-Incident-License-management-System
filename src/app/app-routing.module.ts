import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './scaffold/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { ServicesComponent } from './pages/services/services.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { DailyChecklistComponent } from './pages/daily-checklist/daily-checklist.component';
import { ResourceSharingComponent } from './pages/resource-sharing/resource-sharing.component';
import { CategoriesComponent } from './pages/resource-sharing/categories/categories.component';
import { ProductMgmtComponent } from './pages/resource-sharing/product-mgmt/product-mgmt.component';
import { ResourceDashboardComponent } from './pages/resource-sharing/resource-dashboard/resource-dashboard.component';
import { ProductCreateComponent } from './pages/resource-sharing/product-mgmt/product-create/product-create.component';
import { ProductDetailComponent } from './pages/resource-sharing/product-detail/product-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "login", component: LoginComponent },


  { path: "dashboard", component: DashboardComponent },
  { path: "transactions", component: TransactionsComponent },
  { path: "service", component: ServicesComponent },
  { path: "user-management", component: UserManagementComponent },
  { path: "help", component: FaqsComponent },

  { path: "checklist", component: DailyChecklistComponent },

  {
    path: "resources", component: ResourceSharingComponent,
    children: [
      { path: "", component: ResourceDashboardComponent },
      { path: "categories", component: CategoriesComponent },
      { path: "resourceList", component: ProductMgmtComponent },
      { path: "resource/:id", component: ProductDetailComponent },
      { path: "resource/add", component: ProductCreateComponent },
      { path: "resource/:id/update", component: ProductCreateComponent },
    ]
  },

  { path: "about-us", component: AboutUsComponent },
  { path: "contact-us", component: ContactUsComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
