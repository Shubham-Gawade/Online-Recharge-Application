import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RechargeComponent } from './recharge/recharge.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    HomepageComponent,
    DashboardComponent,
    RechargeComponent,
    TransactionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
