import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';  
import { AboutComponent } from './about/about.component';  
import { ContactComponent } from './contact/contact.component';  
import { LoginComponent } from './login/login.component';  
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },    
  { path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuard] },    
  { path: 'about', component: AboutComponent },    
  { path: 'contact', component: ContactComponent },   
 { path: 'login', component: LoginComponent },   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

