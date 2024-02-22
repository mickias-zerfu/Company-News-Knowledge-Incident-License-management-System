import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDataComponent } from './chart-data/chart-data.component';
import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from '../material.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationDetailComponent } from './notifications/notification-detail/notification-detail.component';
import { NotificationFormComponent } from './notifications/notification-form/notification-form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    ChartDataComponent,
    NotificationsComponent,
    NotificationDetailComponent,
    NotificationFormComponent,
    PagenotfoundComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    ChartDataComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
