import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';  
import { AboutComponent } from './about/about.component';  
import { ContactComponent } from './contact/contact.component';  
import { LoginComponent } from './login/login.component';  
import {AuthGuard} from './auth.guard';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeesComponent} from './employees/employees.component'


const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },    
  { path: 'dashboard', component: DashboardComponent,canActivate : [AuthGuard]},    
  { path: 'about', component: AboutComponent },    
  { path: 'contact', component: ContactComponent },   
  { path: 'login', component: LoginComponent },   
  { path: 'employees', component: EmployeesComponent, canActivate : [AuthGuard]},
  { path: 'employee/:id', component: EmployeeComponent, canActivate : [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

