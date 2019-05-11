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

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './service/user.service';
import { TokenStorage } from './token.storage';
import { Interceptor } from './core/Interceptor';

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
    AppRoutingModule,  ReactiveFormsModule,HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  },TokenStorage,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
