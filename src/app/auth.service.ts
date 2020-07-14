import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {
     
    constructor(private http: HttpClient) {
    }
      
    login(email:string, password:string ) {
      console.log('hi from service provider')
      if(email==="s@gmail.com" && password==="c")
        return true;
            // this is just the HTTP call, 
            // we still need to handle the reception of the token
           
    }
}
    