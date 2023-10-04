import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportMloWiseLoadedContainerService {

  constructor(
    private httpClient:HttpClient
  ) { }

   
  getVoyNo(rotation:String):Observable<any>
  {
  return this.httpClient.get(``+rotation)
  }
  getvvdgkey(rotation:String):Observable<any>{
    return this.httpClient.get(``+rotation);
  }
  
  getContainerVesselInfo(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/MloWiseLoadedContainerVessleInformation/`+rotation);
  }
  getContainerList(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/MloWiseLoadedContainerInfo/`+rotation);
  }

  getLoadedContainerOnboardList(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/MloWiseLoadedContainerOnboardInformation/`+rotation);
  }
  getLoadedContainerBalanceList(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/MloWiseLoadedContainerBalanceList/`+rotation);
  }
}
