import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShahinSpecialReportLocationCertifyService {


  constructor(  private httpClient:HttpClient) { }

  
 getLoadedContainerReport(data:any):Observable<any>{

  return this.httpClient.patch(`http://192.168.16.188:8081/ShahinSpecialReport/ShahinLocationCertify/`,data);
  
}

}
