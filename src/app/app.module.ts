import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


import { AngularMaterialModule } from './material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router'
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import {HttpClientModule} from '@angular/common/http';
import { AgeLabelPipe } from './age-label.pipe';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { HighlightDirective } from './highlight.directive';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
   LoginComponent,
   EmployeesComponent,
   EmployeeComponent,
   AgeLabelPipe,
   HighlightDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatCardModule,
    CdkTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
