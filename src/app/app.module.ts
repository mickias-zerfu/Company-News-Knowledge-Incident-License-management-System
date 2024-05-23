import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './scaffold/header/header.component';
import { FooterComponent } from './scaffold/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactBoardsComponent } from './pages/contact-us/contact-boards/contact-boards.component';
import { ContactSideComponent } from './pages/contact-us/contact-side/contact-side.component';
import { MaterialModule } from './material.module';
import { DailyChecklistComponent } from './pages/daily-checklist/daily-checklist.component';
import { BwProcessServiceComponent } from './pages/daily-checklist/bw-process-service/bw-process-service.component';
import { ResourceAvailablityComponent } from './pages/daily-checklist/resource-availablity/resource-availablity.component';
import { ConfirmDialogComponent } from './shared/confirm-modal/confirm-dialog.component';
import { SharedModule } from './shared/shared.module';
import { TransactionDashboardComponent } from './pages/transaction-monitoring/transaction-dashboard/transaction-dashboard.component';
import { ServicesComponent } from './pages/transaction-monitoring/services/services.component';
import { DataDisplayComponent } from './pages/transaction-monitoring/transactions/data-display/data-display.component';
import { SearchComponentComponent } from './pages/transaction-monitoring/transactions/search-component/search-component.component';
import { TransactionsComponent } from './pages/transaction-monitoring/transactions/transactions.component';
import { HomeComponent } from './pages/home/home.component';
 import { UserManagementModule } from './pages/user-management/user-management.module';
import { ResourceSharingModule } from './pages/resource-sharing/resource-sharing.module';
import { LicenseModule } from './pages/license-management/license.module';
import { Interceptor } from './auth/my.interceptor';
import { ForgetPasswordComponent } from './scaffold/forget-password/forget-password.component';
import { QuillModule } from 'ngx-quill';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AboutUsComponent,
    ContactUsComponent,
    ContactBoardsComponent,
    ContactSideComponent,
    FaqsComponent,
    DashboardComponent,
    TransactionsComponent,
    ServicesComponent,
    SearchComponentComponent,
    DataDisplayComponent,
    DailyChecklistComponent,
    BwProcessServiceComponent,
    ResourceAvailablityComponent,
    TransactionDashboardComponent,
    HomeComponent,
    ConfirmDialogComponent,
    ForgetPasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory }),
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserManagementModule,
    MaterialModule,
    SharedModule,
    LicenseModule,
    ResourceSharingModule
  ],
  exports: [
  ],

  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
