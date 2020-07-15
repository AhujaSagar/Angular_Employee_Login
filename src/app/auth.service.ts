import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable(
  {
    providedIn: 'root'
  }
)

// interface CanActivate {
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
// }
 
export class AuthService {
     
    constructor(private http: HttpClient,private _router:Router) {
    }

    login(email:string, password:string ) {
      console.log('hi from service provider')
      if(email==="s@gmail.com" && password==="c"){
        localStorage.setItem('accessToken',email);
        return true;
            // this is just the HTTP call, 
            // we still need to handle the reception of the token
      }else{
        alert('wrong credentials')
       return false;
    }
}
// login(email: string, password: string): Observable<boolean> {
//   return this.http.post<{token: string}>('/api/auth', {username: email, password: password})
//     .pipe(
//       map(result => {
//         localStorage.setItem('access_token', result.token);
//         return true;
//       })
//     );
// }

} 