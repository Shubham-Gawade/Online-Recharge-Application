import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RechargeComponent } from './recharge/recharge.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'registration', component: RegistrationFormComponent},
  { path: 'dashboard/:this.username', component: DashboardComponent},
  { path: 'recharge/:this.username', component: RechargeComponent},
  { path: 'transactionDetails/:this.username', component: TransactionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
