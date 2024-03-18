import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseDashboardComponent } from './license-dashboard/license-dashboard.component';
import { LicenseManagementComponent } from './license-management.component';
import { MaterialModule } from 'src/app/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SoftwareProductListComponent } from './software-product/software-product-list/software-product-list.component';
import { SoftwareProductFormComponent } from './software-product/software-product-form/software-product-form.component';
import { SoftwareProductDetailComponent } from './software-product/software-product-detail/software-product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddLicenseManagerComponent } from './License-Manager/add-license-manager/add-license-manager.component';
import { ListLicenseManagerComponent } from './License-Manager/list-license-manager/list-license-manager.component';
import { DetailLicenseManagerComponent } from './License-Manager/detail-license-manager/detail-license-manager.component';
import { UsersMgmtComponent } from './License-Manager/users-mgmt.component';
import { LicenseDetailComponent } from './LicenseOp/license-detail/license-detail.component';
import { LicenseFormComponent } from './LicenseOp/license-form/license-form.component';
import { LicenseListComponent } from './LicenseOp/license-list/license-list.component';
import { LicenseTableComponent } from './LicenseOp/license-list/license-table/license-table.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    LicenseDashboardComponent,
    LicenseListComponent,
    LicenseManagementComponent,
    UsersMgmtComponent,
    LicenseFormComponent,
    LicenseDetailComponent,
    SoftwareProductListComponent,
    SoftwareProductFormComponent,
    SoftwareProductDetailComponent,
    LicenseTableComponent,
    AddLicenseManagerComponent,
    ListLicenseManagerComponent,
    DetailLicenseManagerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule

  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} } // Provide MAT_DIALOG_DATA
  ],
})
export class LicenseModule { }
