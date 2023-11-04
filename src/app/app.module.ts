import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './scaffold/header/header.component';
import { FooterComponent } from './scaffold/footer/footer.component';
import { SidebarComponent } from './scaffold/sidebar/sidebar.component';
import { LoginComponent } from './scaffold/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactBoardsComponent } from './pages/contact-us/contact-boards/contact-boards.component';
import { ContactSideComponent } from './pages/contact-us/contact-side/contact-side.component';
import { ServicesComponent } from './pages/services/services.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { SearchComponentComponent } from './pages/transactions/search-component/search-component.component';



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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    DividerModule,
    AccordionModule,
    CardModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
