import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PodListService {

  constructor(
    private httpClient:HttpClient,
  ) { }

  // podlist():Observable<any>{
  //   return this.httpClient.get(`http://192.168.16.188:8081/POD/list`)
  // }

  podlist(): Observable<any>{
    return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/podlist`);
  }
 


  podForlistdata(rotation_no: string):Observable<any> {
    return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/PodListByPlaceCode/` + rotation_no);
  }
}

