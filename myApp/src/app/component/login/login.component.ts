import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { TokenStorage } from 'src/app/token.storage'


import { HttpClientModule, HttpClient } from '@angular/common/http';

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
      if(this.data.access=="hr"){
      if(this.data.email=="hr@gmail.com" && this.data.password=="hr123"){
        localStorage.setItem("token", this.data.email);
      this.router.navigate(['/hr']);
    }
      }else if (this.data.access=="user") {
        if(this.data.email=="user@gmail.com" && this.data.password=="user123"){
        localStorage.setItem("token", this.data.email);
        this.router.navigate(['/user']);}
      } else if (this.data.access=="employee"){
        if(this.data.email=="employee@gmail.com" && this.data.password=="employee123"){
        localStorage.setItem("token", this.data.email);
        this.router.navigate(['/employee']);}

      }
     
    }
  }
  ngOnInit() {
    localStorage.removeItem("token");
  }

}
