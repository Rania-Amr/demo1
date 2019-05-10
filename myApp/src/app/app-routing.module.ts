import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HrComponent } from './component/hr/hr.component';
import { UserComponent } from './component/user/user.component';
import { EmployeeComponent } from './component/employee/employee.component';

const routes: Routes = [
  { path: '', component: LoginComponent},  
  { path: 'hr', component: HrComponent},  { path: 'user', component: UserComponent},
  { path: 'employee', component: EmployeeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
