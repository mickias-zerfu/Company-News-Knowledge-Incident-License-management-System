import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDataComponent } from './chart-data/chart-data.component';
import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from '../material.module';
import { NotificationsComponent } from './notifications/notifications.component';



@NgModule({
  declarations: [
    ChartDataComponent,
    NotificationsComponent
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
