import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportMloWisePreAdvisedLoadedContainerService {

  constructor(

    private httpClient: HttpClient,
  ) { }


  getMloWisePreAdvisedLoadedContainer(tmp_rot_no: string):Observable<any> {

    console.log("temporary_rotation:"+tmp_rot_no);
    return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/ExportMloWisePreAdvisedLoadedContainerList/` + tmp_rot_no);
  }
  getMloWisePreAdvisedListView(tmp_rot_no: string,MLO:any):Observable<any> {
 
   return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/ExportMloWisePreAdvisedViewList/` + tmp_rot_no + "/"+MLO);
  }
  getMloWiseSummaryList(tmp_rot_no:string,MLO:any):Observable<any>{

    return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/ExportMloWiseSummeryList/`+tmp_rot_no+"/"+MLO);
  }
}
