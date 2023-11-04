import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './scaffold/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqsComponent } from './pages/faqs/faqs.component';

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "login", component: LoginComponent },


  { path: "dashboard", component: DashboardComponent },
  { path: "transactions", component: LoginComponent },
  { path: "service", component: LoginComponent },
  { path: "user-management", component: LoginComponent },
  { path: "help", component: FaqsComponent },


  { path: "about-us", component: AboutUsComponent },
  { path: "contact-us", component: ContactUsComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
