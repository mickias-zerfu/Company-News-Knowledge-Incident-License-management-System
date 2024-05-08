import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/scaffold/login/login.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserManagementComponent } from './user-management.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signout", component: LoginComponent },
  { path: "users", component: UserManagementComponent, canActivate: [AuthGuard] },
  { path: "lists", component: UserListComponent, canActivate: [AuthGuard] },
  { path: "manageusers", component: UserManagementComponent, canActivate: [AuthGuard] },
  { path: "add", component: UserFormComponent, canActivate: [AuthGuard] },
  { path: ":id", component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: ":id/update", component: UserFormComponent, data: { isEditMode: true }, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
