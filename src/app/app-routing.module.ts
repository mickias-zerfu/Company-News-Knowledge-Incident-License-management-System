import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { DailyChecklistComponent } from './pages/daily-checklist/daily-checklist.component';
import { ResourceDashboardComponent } from './pages/resource-sharing/resource-dashboard/resource-dashboard.component';
import { ServicesComponent } from './pages/transaction-monitoring/services/services.component';
import { TransactionsComponent } from './pages/transaction-monitoring/transactions/transactions.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { AccessDeniedComponent } from './shared/access-denied/access-denied.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'user', loadChildren: () =>
    import('./pages/user-management/user-management-routing.module').then(m => m.UserManagementRoutingModule) },

  { path: "notifications", component: NotificationsComponent }, 

  { path: "dashboard", component: ResourceDashboardComponent, canActivate: [AuthGuard] }, 
  { path: "transactions", component: TransactionsComponent, canActivate: [AuthGuard] },
  { path: "service", component: ServicesComponent, canActivate: [AuthGuard] },
  { path: "help", component: FaqsComponent },
  { path: "checklist", component: DailyChecklistComponent, canActivate: [AuthGuard] },

  // Resources
  {
    path: "resources", loadChildren: () =>
      import('./pages/resource-sharing/resource-sharing-routing.module').then(m => m.ResourceSharingRoutingModule)
  },

  // licenses links
  {
    path: "licenses", loadChildren: () =>
      import('./pages/license-management/license-routing.module').then(m => m.LicenseRoutingModule) },

  // access Denied

  { path: "access-denied", component: AccessDeniedComponent },

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
