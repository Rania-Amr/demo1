import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("token")== null) {
    
      this.router.navigate(['/login']);
    }

  }
  signOut(){
    this.router.navigate(['/login'])
  }
}
