import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportVesselListWithStatusService {
  constructor(
    private httpClient:HttpClient
  ) {


   }


getVoyNo(rotation:String):Observable<any>
{
return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/ExportReportVesselVoyNo/`+rotation)
}

getvvdgkey(rotation:String):Observable<any>{
  return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/ExportVesselListVvd_Gkey/`+rotation);
}

getContainerVesselInfo(rotation:String):Observable<any>{
  return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/ExportReportVessleInformation/`+rotation);
}




   VesselListWithStatusInfo():Observable<any>{
    return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/ExportVesselListWithStatus`);
  }

  
  VesselListWithStatusList(type:any):Observable<any>{
    return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/ExportVesselListWithStatusForRotation/`+type);
  }
  VesselListWithStatusForExportDetail(type:any):Observable<any>{
    return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/ExportVesselListWithStatusForExportUploadReport/`+type);
  }
  VesselListWithStatusForExportSummary(type:any):Observable<any>{
    return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/ExportVessleListWithStatusForMloWiseExportSummary/`+type);
  }
}
