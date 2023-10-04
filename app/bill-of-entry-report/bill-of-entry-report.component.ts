import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BillOfEntryReportService } from '../service/HeadDelivery/BillOfEntryReport/bill-of-entry-report.service';

@Component({
  selector: 'app-bill-of-entry-report',
  templateUrl: './bill-of-entry-report.component.html',
  styleUrls: ['./bill-of-entry-report.component.css']
})
export class BillOfEntryReportComponent implements OnInit {


  containerVesselInfo:any;
 
  fromDate:any;
  constructor(
    private billOfEntryService:BillOfEntryReportService,
      
    private toastr:ToastrService,
    private router: Router,
  ) { 

   
  }
  ngOnInit(): void {
  }
  onSubmit(){
    localStorage.setItem("export_fromDate", this.fromDate);
    this.router.navigate([]).then(data => window.open('headDelivery/date_wise_bill_of_entry_report_view', '_blank'));
 
  }
}
