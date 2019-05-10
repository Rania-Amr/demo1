import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule, ROUTES } from '@angular/router';
import { HrComponent } from './component/hr/hr.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { UserComponent } from './component/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HrComponent,
    EmployeeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
