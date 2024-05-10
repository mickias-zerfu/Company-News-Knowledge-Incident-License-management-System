import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AddLicenseManagerComponent } from './License-Manager/add-license-manager/add-license-manager.component';
import { DetailLicenseManagerComponent } from './License-Manager/detail-license-manager/detail-license-manager.component';
import { ListLicenseManagerComponent } from './License-Manager/list-license-manager/list-license-manager.component';
import { LmanagersMgmtComponent } from './License-Manager/users-mgmt.component';
import { LicenseDetailComponent } from './LicenseOp/license-detail/license-detail.component';
import { LicenseFormComponent } from './LicenseOp/license-form/license-form.component';
import { LicenseListComponent } from './LicenseOp/license-list/license-list.component';
import { LicenseDashboardComponent } from './license-dashboard/license-dashboard.component';
import { SoftwareProductDetailComponent } from './software-product/software-product-detail/software-product-detail.component';
import { SoftwareProductFormComponent } from './software-product/software-product-form/software-product-form.component';
import { SoftwareProductListComponent } from './software-product/software-product-list/software-product-list.component';


const routes: Routes = [

  { path: "", component: LicenseDashboardComponent, canActivate: [AuthGuard] }, // Default route should be placed at the end
  { path: "lists", component: LicenseListComponent, canActivate: [AuthGuard] },
  { path: "add", component: LicenseFormComponent, canActivate: [AuthGuard] },
  { path: "license/:id/update", component: LicenseFormComponent, canActivate: [AuthGuard] },
  { path: "license/:id", component: LicenseDetailComponent, canActivate: [AuthGuard] },

  { path: "softwares", component: SoftwareProductListComponent, canActivate: [AuthGuard] },
  { path: "software/add", component: SoftwareProductFormComponent, canActivate: [AuthGuard] },
  { path: "software/:id", component: SoftwareProductDetailComponent, canActivate: [AuthGuard] },
  { path: "software/:id/update", component: SoftwareProductFormComponent, data: { isEditMode: true }, canActivate: [AuthGuard] },
  // ]
  // , canActivate: [AuthGuard] },
  { path: "lmanagers", component: LmanagersMgmtComponent, canActivate: [AuthGuard] },
  // children: [
  { path: "lmanagers/lists", component: ListLicenseManagerComponent, canActivate: [AuthGuard] },
  { path: "lmanagers/add", component: AddLicenseManagerComponent, canActivate: [AuthGuard] },
  { path: "lmanagers/:id", component: DetailLicenseManagerComponent, canActivate: [AuthGuard] },
  { path: "lmanagers/:id/update", component: AddLicenseManagerComponent, data: { isEditMode: true }, canActivate: [AuthGuard] },


]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LicenseRoutingModule { }
