import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateWiseBillOfEntryReportService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getContainerHandling(fromDate: any): Observable<any> {
    console.log("fromDate:"+fromDate)
    return this.httpClient.get(`http://192.168.16.188:8099/HeadDelivery/BillOfEntrySadContainer/`+ fromDate);
   }
}
