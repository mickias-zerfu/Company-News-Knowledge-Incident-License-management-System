import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './scaffold/header/header.component';
import { FooterComponent } from './scaffold/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './scaffold/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ResourceSharingComponent } from './pages/resource-sharing/resource-sharing.component';
import { CategoriesComponent } from './pages/resource-sharing/categories/categories.component';
import { ConfirmDialogComponent } from './shared/confirm-modal/confirm-dialog.component';
import { ProductMgmtComponent } from './pages/resource-sharing/product-mgmt/product-mgmt.component';
import { ProductDetailComponent } from './pages/resource-sharing/product-detail/product-detail.component';
import { ProductListComponent } from './pages/resource-sharing/product-list/product-list.component';
import { ProductCreateComponent } from './pages/resource-sharing/product-mgmt/product-create/product-create.component';
import { ProductUpdateComponent } from './pages/resource-sharing/product-update/product-update.component';
import { CategoriesModalComponent } from './pages/resource-sharing/categories/categories-modal/categories-modal.component';
import { LicenseModule } from './pages/license-management/license.module';
import { ResourceDashboardComponent } from './pages/resource-sharing/resource-dashboard/resource-dashboard.component';
import { SharedModule } from './shared/shared.module';
import { TransactionDashboardComponent } from './pages/transaction-monitoring/transaction-dashboard/transaction-dashboard.component';
import { ServicesComponent } from './pages/transaction-monitoring/services/services.component';
import { DataDisplayComponent } from './pages/transaction-monitoring/transactions/data-display/data-display.component';
import { SearchComponentComponent } from './pages/transaction-monitoring/transactions/search-component/search-component.component';
import { TransactionsComponent } from './pages/transaction-monitoring/transactions/transactions.component';
import { UserDetailComponent } from './pages/user-management/user-detail/user-detail.component';
import { UserFormComponent } from './pages/user-management/user-form/user-form.component';
import { UserListComponent } from './pages/user-management/user-list/user-list.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { HomeComponent } from './pages/home/home.component';



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
    DailyChecklistComponent,
    BwProcessServiceComponent,
    ResourceAvailablityComponent,
    ResourceSharingComponent,
    CategoriesComponent,
    ConfirmDialogComponent,
    ProductMgmtComponent,
    ProductUpdateComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductListComponent,
    CategoriesModalComponent,
    ResourceDashboardComponent,
    UserDetailComponent,
    UserListComponent,
    UserFormComponent,
    TransactionDashboardComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule

  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
