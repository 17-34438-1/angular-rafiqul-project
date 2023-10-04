import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsoCodeService {

  constructor(
    private httpClient:HttpClient,
  ) { }

  IsoList():Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/Iso/IsoList`);
  }

  
  IsoListData(type:any):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/Iso/IsoCodeData/`+type);
  }
}
