import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportLoadedContainerListLoadAndEmptyServiceService {

  constructor(
    private httpClient:HttpClient
  ) { }


  getLoadedContainerVesselInfo(rotation:String):Observable<any>{
    return this.httpClient.get( `http://192.168.16.188:8093/ExportReport/ExportLoadedContainerListLoadandEmptyVesselInfo/`+rotation);
  }
  getLoadedContainerList(rotation:String):Observable<any>{
    return this.httpClient.get( `http://192.168.16.188:8093/ExportReport/ExportLoadedContainerListLoadandEmptyInfo/`+rotation);
  }
  getLoadedContainerOnboardList(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportLoadedContainerListLoadandEmptyContainerOnboardInfo/`+rotation);
  }
  getLoadedContainerBalanceList(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportLoadedContainerListLoadandEmptyLoadedContainerBalanceList/`+rotation);
  }
}
