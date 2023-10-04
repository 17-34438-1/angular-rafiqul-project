import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadexcelForOBPSService {
  igmMisIp : string;
  igmMisPort : string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.igmMisIp=environment.igmMisIp;
    this.igmMisPort=environment.igmMisPort;
   }

   uploadExcelForPangaon(data: any){
    console.log(data);
    return this.httpClient.post(`http://192.168.16.188:8099/Pangaon/UploadExcelFileForPangaon`,data);
  }
  getIpAddress(){
    return this.httpClient.get("http://api.ipify.org/?format=json");
  }
}
