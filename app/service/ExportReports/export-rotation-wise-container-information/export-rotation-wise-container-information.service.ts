import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportRotationWiseContainerInformationService {

  constructor(
private httpClient: HttpClient,
  ) { }


  getRotationWiseContainerInformation(tmp_rot_n:string):Observable<any> {
    return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/RotationWiseExportContainer/`+tmp_rot_n);
  }
}
