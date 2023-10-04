import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportLoadedContainerService } from '../service/ExportReports/export-loaded-container/export-loaded-container.service';

@Component({
  selector: 'app-export-loaded-container-list',
  templateUrl: './export-loaded-container-list.component.html',
  styleUrls: ['./export-loaded-container-list.component.css']
})
export class ExportLoadedContainerListComponent implements OnInit {
  tmp_rot_no:any;
  containerOnboardInfo:any;
  rotation_no:any;
  containerOnboard:any;
  containerVesselInfo:any;
  exportLoadedContainerReport:any;
  vsl_Name:any;
  berth_op:any;
  fromDate:any;
  toDate:any;
  ata:any;
  fromTime:any;
  toTime:any;
  voy_No:any;
  berth:any;
  balance_LD_20:any;
  balance_LD_40:any;
  balance_MT_20:any;
  balance_MT_40:any;
  balance_LD_tues:any;
  balance_MT_tues:any;

  containerBalanceInfo:any;


  constructor(
    private toastr: ToastrService,
    private router: Router,
    private exportLoadedContainerReportService: ExportLoadedContainerService
  ) { }

  ngOnInit(): void {
    
    this.tmp_rot_no = localStorage.getItem("loaded_container_tmp_rot_no");
    this.fromDate=localStorage.getItem("loaded_container_fromDate");
    this.toDate=localStorage.getItem("loaded_container_toDate");
    this.fromTime=localStorage.getItem("loaded_container_fromTime");
    this.toTime=localStorage.getItem("loaded_container_toTime");


    console.log("fromDate:"+this.fromDate);
    console.log("rotation_no:"+this.tmp_rot_no);
    console.log("fromTime:"+this.fromTime);
    console.log("todate:"+this.toDate);
    console.log("totime:"+this.toTime);
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
  

    this.exportLoadedContainerReportService.getLoadedContainerVesselInfo(tmp_rot_no).subscribe(data => {
      this.containerVesselInfo = data;
      console.log(data);
      for (let containerVesselInfo of data) {
        this.vsl_Name = containerVesselInfo.vsl_name;
        this.berth_op=containerVesselInfo.berth_op;
        this.berth=containerVesselInfo.berth;
        this.ata=containerVesselInfo.ata;
      }
    });

    this.exportLoadedContainerReportService.getLoadedContaineVoyNo(tmp_rot_no).subscribe(data => {
      this.containerVesselInfo = data;
      console.log(data);      
      for (let containerVesselInfo of data) {
        this.voy_No = containerVesselInfo.voy_No;       
      }
      console.log(this.voy_No);
    });


    
    this.exportLoadedContainerReportService.getLoadedContainerReport(tmp_rot_no,this.fromDate,this.toDate,this.fromTime,this.toTime).subscribe(data => {
      this.exportLoadedContainerReport = data;
      console.log(data);
    });
    
    this.exportLoadedContainerReportService.getLoadedContainerOnboardList(tmp_rot_no,this.fromDate,this.toDate,this.fromTime,this.toTime).subscribe(data => {
      this.containerOnboardInfo = data;
      console.log(data);
    });

    this.exportLoadedContainerReportService.getLoadedContainerBalanceList(tmp_rot_no,this.fromDate,this.toDate,this.fromTime,this.toTime).subscribe(data => {
      this.containerBalanceInfo = data;
      console.log(data);     



      for (let containerBalanceInfo of data) {
        this.balance_LD_20 = containerBalanceInfo.balance_LD_20;
        this.balance_LD_40=containerBalanceInfo.balance_LD_40;
        this.balance_MT_20=containerBalanceInfo.balance_MT_20;
        this.balance_MT_40 = containerBalanceInfo.balance_MT_40;
        this.balance_LD_tues=containerBalanceInfo.balance_LD_tues;
        this.balance_MT_tues=containerBalanceInfo.balance_MT_tues;
      }


    });

    this.tmp_rot_no = localStorage.getItem("loaded_container_tmp_rot_no");
    this.rotation_no = tmp_rot_no.toString().replace("_", "/");

    console.log(this.rotation_no);
  }

}
