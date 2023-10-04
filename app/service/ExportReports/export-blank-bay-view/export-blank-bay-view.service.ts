import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportBlankBayViewService {

  constructor(
    private httpClient:HttpClient,
  ) { }

  BlankBay():Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/BlankBayFrom`);
  }
 


  BlankBayView(rotation: String): Observable<any> {
    console.log("vvd_gkey................:"+rotation)
    return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/BlankBayView/`+rotation);
  }

  
  BlankBayViews(rotation: String): Observable<any> {
    console.log("vvd_gkey................:"+rotation)
    return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/BlankBa/`+rotation);
  }
}
