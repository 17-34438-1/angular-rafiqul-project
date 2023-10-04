import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class TodaysEdiDeclarationService {

  constructor(
    private httpClient:HttpClient,

  ) { }


  EdiList():Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/IgmOperation/TodaysEdiDeclaration`);
  }


  updateTodaysEdi(data:any):Observable<any>{
    return this.httpClient.put(`http://192.168.16.188:8081/IgmOperation/UpdateEdi`,data);
  }
  EdiData(terminal:any):Observable<any>{
    
    var terminal = terminal.toString().replace("/", "_");
    console.log(terminal);
    return this.httpClient.get(`http://192.168.16.188:8081/IgmOperation/TodaysEdiDeclarationByRotation/`+terminal);
    console.log(`http://192.168.16.188:8081/IgmOperation/TodaysEdiDeclaration/`+terminal)
    
  }
  

  EdiListforId(id:any):Observable<any>{

    console.log("iddffdfdfd"+id)
    return this.httpClient.get(`http://192.168.16.188:8081/IgmOperation/TodaysEdiDeclarationById/`+id);
    console.log(`http://192.168.16.188:8081/IgmOperation/TodaysEdiDeclarationById/`+id)
    
  }
}
