import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getSidebarByRole(userRoleId: any): Observable<any> {  
    var acctoken = "PCS "+localStorage.getItem('accessToken');
    
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':acctoken
    });
    
    return this.httpClient.get(`http://192.168.16.243:8086/sidebar/links/` + userRoleId, {headers:httpHeaders});
  }
  
}


