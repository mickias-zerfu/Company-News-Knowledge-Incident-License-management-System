import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDataComponent } from './chart-data/chart-data.component';
import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from '../material.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationDetailComponent } from './notifications/notification-detail/notification-detail.component';
import { NotificationFormComponent } from './notifications/notification-form/notification-form.component';



@NgModule({
  declarations: [
    ChartDataComponent,
    NotificationsComponent,
    NotificationDetailComponent,
    NotificationFormComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    MaterialModule
  ],
  exports: [
    ChartDataComponent
  ]
})
export class SharedModule { }
