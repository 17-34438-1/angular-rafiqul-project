import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportContainerLoadingExcelReportService } from '../service/ExportReports/export-container-loading-excel-report/export-container-loading-excel-report.service';

@Component({
  selector: 'app-export-container-loading-excel-report-list',
  templateUrl: './export-container-loading-excel-report-list.component.html',
  styleUrls: ['./export-container-loading-excel-report-list.component.css']
})
export class ExportContainerLoadingExcelReportListComponent implements OnInit {
  tmp_rot_no:any;
  rotation_no:any;
  containerVesselInfo:any;
  exportContainerLoadingExcelReport:any;
  vsl_Name:any;
  berth_op:any;
  fromDate:any;
  toDate:any;
  fromTime:any;
  toTime:any;
  ata:any;
  voYNo:any;
  berth:any;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private exportContainerLoadingExcelReportService: ExportContainerLoadingExcelReportService
  ) { }

  ngOnInit(): void {

    
    this.tmp_rot_no = localStorage.getItem("container_loading_excel_tmp_rot_no");
    this.fromDate=localStorage.getItem("container_loading_excel_fromDate");
    this.toDate=localStorage.getItem("container_loading_excel_toDate");
    this.fromTime=localStorage.getItem("container_loading_excel_fromTime");
    this.toTime=localStorage.getItem("container_loading_excel_toTime");


    console.log("fromDate:"+this.fromDate);
    console.log("rotation_no:"+this.tmp_rot_no);
    console.log("fromTime:"+this.fromTime);
    console.log("todate:"+this.toDate);
    console.log("totime:"+this.toTime);
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);

    this.exportContainerLoadingExcelReportService.getContainerLoadingVesselInfo(tmp_rot_no).subscribe(data => {
      this.containerVesselInfo = data;
      console.log(data);
      for (let containerVesselInfo of data) {
        this.vsl_Name = containerVesselInfo.vsl_name;
        this.berth_op=containerVesselInfo.berth_op;
        this.berth=containerVesselInfo.berth;
        this.ata=containerVesselInfo.ata;
      }   

    });

    this.exportContainerLoadingExcelReportService.getContainerLoadingExcelReport(tmp_rot_no,this.fromDate,this.toDate,this.fromTime,this.toTime).subscribe(data => {
      this.exportContainerLoadingExcelReport = data;
      console.log(data);
    });

    this.tmp_rot_no = localStorage.getItem("container_loading_excel_tmp_rot_no");
    this.rotation_no = tmp_rot_no.toString().replace("_", "/");
    console.log(this.rotation_no);
  }

  

}
