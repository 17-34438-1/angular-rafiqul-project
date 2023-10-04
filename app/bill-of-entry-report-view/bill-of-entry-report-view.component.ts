import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BillOfEntryReportService } from '../service/HeadDelivery/BillOfEntryReport/bill-of-entry-report.service';

@Component({
  selector: 'app-bill-of-entry-report-view',
  templateUrl: './bill-of-entry-report-view.component.html',
  styleUrls: ['./bill-of-entry-report-view.component.css']
})
export class BillOfEntryReportViewComponent implements OnInit {
  fromDate:any;
  containerVesselInfo:any;
  k:number=0;
  j:number=0;
  total:number=0;
  placeDec:String="";
  constructor(
    private billOfEntryService:BillOfEntryReportService,
      
    private toastr:ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.fromDate=localStorage.getItem("export_fromDate");
    

    this.billOfEntryService.getContainerHandling(this.fromDate).subscribe(data => {


      this.containerVesselInfo = data;
      console.log(data);      
      });
  }




}
