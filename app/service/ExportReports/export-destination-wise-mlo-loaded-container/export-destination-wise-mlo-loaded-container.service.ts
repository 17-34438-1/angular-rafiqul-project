import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportDestinationWiseMloLoadedContainerService {

  constructor(
    private httpClient:HttpClient
  ) { }


  getContainerVesselInfo(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportDestinationWiseMloLoadedContainerVesselInfo/`+rotation);
  }
  getContainerList(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportDestinationWiseMloLoadedContainerInfo/`+rotation);
  }
}
