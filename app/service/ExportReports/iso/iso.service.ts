import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsoService {

  constructor(
    private httpClient:HttpClient
  ) {


   }

   IsoList():Observable<any>{
    return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/IsoList`);
  }

  
  IsoListData(type:any):Observable<any>{
    return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/IsoCodeData/`+type);
  }
}
