import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorage } from '../token.storage';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private subject = new Subject<any>();

  private customerVisit;

  activatedUser: Subject<object> = new Subject();
  constructor(private httpClient: HttpClient, private token: TokenStorage) {


  }
  

  attemptAuth(data): Observable<any> {
   
    return this.httpClient.post('http://localhost:8080/login/', data);
  }



  
  LogOut() {
    this.token.signOut()

  }

}
