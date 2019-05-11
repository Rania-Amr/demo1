import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent, HttpErrorResponse,HttpEvent} from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Router } from '@angular/router';
import {TokenStorage} from '../token.storage';
import { tap } from 'rxjs/operators'

const TOKEN_HEADER_KEY = "Authorization";

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private token: TokenStorage, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    if (this.token.getToken() != null) {
      req = req.clone({
       
        setHeaders: {
          'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : "application/json",
       'Authorization': `Bearer `+this.token.getToken()
        }
      });
      
      
    }
    

    return next.handle(req).pipe(tap(
      (err: any) => { 
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }}
    ));
      
   
    
  }

 
}
