import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseDashboardComponent } from './license-dashboard/license-dashboard.component';
import { LicenseListComponent } from './license-list/license-list.component';
import { LicenseManagementComponent } from './license-management.component';
import { VendorsMgmtComponent } from './vendors-mgmt/vendors-mgmt.component';
import { UsersMgmtComponent } from './users-mgmt/users-mgmt.component';
import { MaterialModule } from 'src/app/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LicenseFormComponent } from './license-form/license-form.component';
import { LicenseDetailComponent } from './license-detail/license-detail.component';
import { SoftwareProductListComponent } from './software-product/software-product-list/software-product-list.component';
import { SoftwareProductFormComponent } from './software-product/software-product-form/software-product-form.component';
import { SoftwareProductDetailComponent } from './software-product/software-product-detail/software-product-detail.component';



@NgModule({
  declarations: [
    LicenseDashboardComponent,
    LicenseListComponent,
    LicenseManagementComponent,
    VendorsMgmtComponent,
    UsersMgmtComponent,
    LicenseFormComponent,
    LicenseDetailComponent,
    SoftwareProductListComponent,
    SoftwareProductFormComponent,
    SoftwareProductDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule

  ]
})
export class LicenseModule { }
