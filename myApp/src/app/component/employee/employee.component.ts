import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { TokenStorage } from 'src/app/token.storage';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 
  constructor(public router: Router, private userService: UserService, private token: TokenStorage) {


  }

  ngOnInit() {
    if (this.token.getToken() == null) {
    
      this.router.navigate(['/login']);
    }


  }
  signOut(){
    this.router.navigate(['/login'])
  }
}
