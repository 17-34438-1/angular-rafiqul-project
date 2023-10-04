import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShahinMloWiseFinalLoadingExportReportService } from '../service/ShahinSpecialReport/shahin-mlo-wise-final-loading-export-report/shahin-mlo-wise-final-loading-export-report.service';

@Component({
  selector: 'app-shahin-mlo-wise-final-loading-export-report-list',
  templateUrl: './shahin-mlo-wise-final-loading-export-report-list.component.html',
  styleUrls: ['./shahin-mlo-wise-final-loading-export-report-list.component.css']
})
export class ShahinMloWiseFinalLoadingExportReportListComponent implements OnInit {
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
    private toastr:ToastrService,
    private router: Router,
    private shahinSpecialReportLoadedContainerService:ShahinMloWiseFinalLoadingExportReportService
  ) { }

  ngOnInit(): void {

    
    this.tmp_rot_no = localStorage.getItem("Shahin_mlo_wise_final_loading_export_report_rotaton");
    this.fromDate=localStorage.getItem("Shahin_mlo_wise_final_loading_export_report_fromDate");
    this.toDate=localStorage.getItem("Shahin_mlo_wise_final_loading_export_report_toDate");
    this.fromTime=localStorage.getItem("Shahin_mlo_wise_final_loading_export_report_fromTime");
    this.toTime=localStorage.getItem("Shahin_mlo_wise_final_loading_export_report_toTime");


    console.log("fromDate:"+this.fromDate);
    console.log("rotation_no:"+this.tmp_rot_no);
    console.log("fromTime:"+this.fromTime);
    console.log("todate:"+this.toDate);
    console.log("totime:"+this.toTime);
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);

    this.shahinSpecialReportLoadedContainerService.getContainerLoadingVesselInfo(tmp_rot_no).subscribe(data => {
      this.containerVesselInfo = data;
      console.log(data);
      for (let containerVesselInfo of data) {
        this.vsl_Name = containerVesselInfo.vsl_name;
        this.berth_op=containerVesselInfo.berth_op;
        this.berth=containerVesselInfo.berth;
        this.ata=containerVesselInfo.ata;
      }   

    });

    this.shahinSpecialReportLoadedContainerService.getContainerLoadingExcelReport(tmp_rot_no,this.fromDate,this.toDate,this.fromTime,this.toTime).subscribe(data => {
      this.exportContainerLoadingExcelReport = data;
      console.log(data);
    });

    this.tmp_rot_no = localStorage.getItem("container_loading_excel_tmp_rot_no");
    this.rotation_no = tmp_rot_no.toString().replace("_", "/");
    console.log(this.rotation_no);
  }

  
  

}
