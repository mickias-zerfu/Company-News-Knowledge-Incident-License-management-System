import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDataComponent } from './chart-data/chart-data.component';
import { MaterialModule } from '../material.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationDetailComponent } from './notifications/notification-detail/notification-detail.component';
import { NotificationFormComponent } from './notifications/notification-form/notification-form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AddNewButtonComponent } from './add-new-button/add-new-button.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { DeniedLottieComponent } from './access-denied/denied-lottie/denied-lottie.component';


import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    ChartDataComponent,
    NotificationsComponent,
    NotificationDetailComponent,
    NotificationFormComponent,
    PagenotfoundComponent,
    LoadingComponent,
    AddNewButtonComponent,
    AccessDeniedComponent,
    DeniedLottieComponent,
  ],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
    HighchartsChartModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    ChartDataComponent,
    LoadingComponent,
    AddNewButtonComponent,
  ]
})
export class SharedModule { }
