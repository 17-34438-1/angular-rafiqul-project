import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportCommentsByShippingSectionOnExportVesselService } from '../service/ExportReports/export-comments-by-shipping-section-on-export-vessel/export-comments-by-shipping-section-on-export-vessel.service';

@Component({
  selector: 'app-export-comments-by-shipping-section-on-export-vessel-list',
  templateUrl: './export-comments-by-shipping-section-on-export-vessel-list.component.html',
  styleUrls: ['./export-comments-by-shipping-section-on-export-vessel-list.component.css']
})
export class ExportCommentsByShippingSectionOnExportVesselListComponent implements OnInit {
  fromDate:any;
  toDate:any;
  exportCommentByShipping:any;
  options:any;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private exportcommentByShippingSection:ExportCommentsByShippingSectionOnExportVesselService
  ){}
  ngOnInit(): void {  
    this.fromDate=localStorage.getItem("export_comments_by_shipping_fromDate");
    this.toDate=localStorage.getItem("export_comments_by_shipping_toDate");
    console.log("From Date:"+this.fromDate);
    console.log("To Date:"+this.toDate);
    this.exportcommentByShippingSection.getExportCommentsByShippingSection(this.fromDate,this.toDate).subscribe(data=>{
    this.exportCommentByShipping=data;
    console.log(data);
    console.log(this.exportcommentByShippingSection);
    console.log("excel Data:"+data);
 
   
    });

  }

}
