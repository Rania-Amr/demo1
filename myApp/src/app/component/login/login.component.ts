import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { TokenStorage } from 'src/app/token.storage'


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  
  data;
  msg;
  constructor(public router: Router, private http: HttpClient, private userService: UserService, private token: TokenStorage) {
    
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
       // "access": this.loginForm.value.access
      }
      this.userService.attemptAuth(this.data).subscribe(
        x => {
          if (x != null) {
           
            this.token.saveToken(x.result.token);
           
            this.router.navigate(['/hr']);
          }
          else {
            this.msg = "please check your info";
          }
        }
      );
     
    }
  }
  ngOnInit() {
    this.token.signOut();
  }

}
