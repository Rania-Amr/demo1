import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  
  data;
  msg;
  constructor(public router: Router) { 
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      access: new FormControl(['', Validators.required])
    });
  }
  onSubmit() {

   
    
    if (this.loginForm.valid) {
     
      this.data = {
        "email": this.loginForm.value.email,
        "password": this.loginForm.value.password,
        "access": this.loginForm.value.access
      }
      console.log(this.data.access)
      if(this.data.access=="hr"){
     this.router.navigate(['/hr']);

      }else if (this.data.access=="user") {
        this.router.navigate(['/user']);
      } else if (this.data.access=="employee"){
        this.router.navigate(['/employee']);

      }
      
  
     
    }
  }
  ngOnInit() {
  }

}
