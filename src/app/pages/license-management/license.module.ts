import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseDashboardComponent } from './license-dashboard/license-dashboard.component';
import { LicenseListComponent } from './license-list/license-list.component';
import { LicenseManagementComponent } from './license-management.component';
import { VendorsMgmtComponent } from './vendors-mgmt/vendors-mgmt.component';
import { UsersMgmtComponent } from './users-mgmt/users-mgmt.component';



@NgModule({
  declarations: [
    LicenseDashboardComponent,
    LicenseListComponent,
    LicenseManagementComponent,
    VendorsMgmtComponent,
    UsersMgmtComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class LicenseModule { }
