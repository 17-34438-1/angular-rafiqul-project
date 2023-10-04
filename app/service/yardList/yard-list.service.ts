import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class YardListService {

  constructor(
    private httpClient:HttpClient,
  ) { }
  yardList():Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/Yard/list`);
  }
  yardData(terminal:any):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/Yard/yardList/`+terminal);
  }
}
