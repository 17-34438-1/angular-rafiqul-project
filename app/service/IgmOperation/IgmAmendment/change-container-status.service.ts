import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeContainerStatusService {

  constructor(
    private httpClient: HttpClient
  ) { 

  

  }
  ChangeContainerStatus(container_no: any,rotation:any,bl_no:any): Observable<any> {
    
    return this.httpClient.get(`http://192.168.16.188:8099/IgmAmedmentController/ViewIgmDetailContainerList/`+container_no+"/"+rotation+"/"+bl_no);
  }

  ChangeContainerStatusByConBlRot(container_no:any,tmp_rot_no:any,bl_no:any,contStatus:any,igmType:any,igmContId:any): Observable<any> {

    return this.httpClient.get(`http://192.168.16.188:8099/IgmAmedmentController/getViewIgmSubDetailContainer/`+container_no+"/"+tmp_rot_no+"/"+bl_no+"/"+contStatus+"/"+igmType+"/"+igmContId);
  }

}
