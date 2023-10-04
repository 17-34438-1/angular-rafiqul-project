import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaborService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getLaborCategoryList(): Observable<any> {
    return this.httpClient.get(`http://192.168.16.243:8091/laborType/list`);
  }

  addLaborCategory(data: any): Observable<any> {
    return this.httpClient.post(`http://192.168.16.243:8091/laborType/addType`, data);
  }

  deleteLaborCategory(id: number): Observable<any> {  
    return this.httpClient.delete(`http://192.168.16.243:8091/laborType/deleteType/` + id );
  }

  getLaborCategoryById(id: string):Observable<any> {
    return this.httpClient.get(`http://192.168.16.243:8091/laborType/getLaborTypeById/` + id);
  }

  editLaborCategory(data: any): Observable<any> {
    return this.httpClient.put(`http://192.168.16.243:8091/laborType/editType`, data);
  }

}
