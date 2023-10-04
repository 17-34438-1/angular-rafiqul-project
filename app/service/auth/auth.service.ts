import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(user: any): Observable<any> {
    // return this.httpClient.post(`http://182.163.112.102:8001/api/user/login/`, user);
    return this.httpClient.post(`http://192.168.16.243:8086/token/request`, user);    
  }
  logout(user: any): Observable<any>{
    console.log("logout id : "+user);

    var acctoken = "PCS "+localStorage.getItem('accessToken');
    
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':acctoken
    });

    return this.httpClient.delete(`http://192.168.16.243:8086/token/logout/` + user, {headers:httpHeaders});
  }
}
