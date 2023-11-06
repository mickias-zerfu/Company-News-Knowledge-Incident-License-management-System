import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './scaffold/header/header.component';
import { FooterComponent } from './scaffold/footer/footer.component';
import { SidebarComponent } from './scaffold/sidebar/sidebar.component';
import { LoginComponent } from './scaffold/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactBoardsComponent } from './pages/contact-us/contact-boards/contact-boards.component';
import { ContactSideComponent } from './pages/contact-us/contact-side/contact-side.component';
import { ServicesComponent } from './pages/services/services.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { SearchComponentComponent } from './pages/transactions/search-component/search-component.component';
import { MaterialModule } from './material.module';
import { NgChartsModule } from 'ng2-charts';
import { DataDisplayComponent } from './pages/transactions/data-display/data-display.component';
import { ChartDataComponent } from './pages/dashboard/chart-data/chart-data.component';
import { DailyChecklistComponent } from './pages/daily-checklist/daily-checklist.component';
import { BwProcessServiceComponent } from './pages/daily-checklist/bw-process-service/bw-process-service.component';
import { ResourceAvailablityComponent } from './pages/daily-checklist/resource-availablity/resource-availablity.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    ContactBoardsComponent,
    ContactSideComponent,
    FaqsComponent,
    DashboardComponent,
    TransactionsComponent,
    ServicesComponent,
    UserManagementComponent,
    SearchComponentComponent,
    DataDisplayComponent,
    ChartDataComponent,
    DailyChecklistComponent,
    BwProcessServiceComponent,
    ResourceAvailablityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NgChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
