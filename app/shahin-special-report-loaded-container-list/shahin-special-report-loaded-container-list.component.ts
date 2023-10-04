import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShahinSpecialReportLoadedContainerService } from '../service/ShahinSpecialReport/shahin-special-report-loaded-container/shahin-special-report-loaded-container.service';

@Component({
  selector: 'app-shahin-special-report-loaded-container-list',
  templateUrl: './shahin-special-report-loaded-container-list.component.html',
  styleUrls: ['./shahin-special-report-loaded-container-list.component.css']
})
export class ShahinSpecialReportLoadedContainerListComponent implements OnInit {





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
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private shahinSpecialReportLoadedContainerService:ShahinSpecialReportLoadedContainerService
  ) { }


  ngOnInit(): void {

   
    
    this.tmp_rot_no = localStorage.getItem("Shahin_loaded_container_tmp_rot_no");
    this.fromDate=localStorage.getItem("Shahin_loaded_container_fromDate");
    this.toDate=localStorage.getItem("Shahin_loaded_container_toDate");
    this.fromTime=localStorage.getItem("Shahin_loaded_container_fromTime");
    this.toTime=localStorage.getItem("Shahin_loaded_container_toTime");


    console.log("fromDate:"+this.fromDate);
    console.log("rotation_no:"+this.tmp_rot_no);
    console.log("fromTime:"+this.fromTime);
    console.log("todate:"+this.toDate);
    console.log("totime:"+this.toTime);
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
  

    this.shahinSpecialReportLoadedContainerService.getLoadedContainerVesselInfo(tmp_rot_no).subscribe(data => {
      this.containerVesselInfo = data;
      console.log(data);
      for (let containerVesselInfo of data) {
        this.vsl_Name = containerVesselInfo.vsl_name;
        this.berth_op=containerVesselInfo.berth_op;
        this.berth=containerVesselInfo.berth;
        this.ata=containerVesselInfo.ata;
      }
    });

    this.shahinSpecialReportLoadedContainerService.getLoadedContaineVoyNo(tmp_rot_no).subscribe(data => {
      this.containerVesselInfo = data;
      console.log(data);      
      for (let containerVesselInfo of data) {
        this.voy_No = containerVesselInfo.voy_No;       
      }
      console.log(this.voy_No);
    });


    
    this.shahinSpecialReportLoadedContainerService.getLoadedContainerReport(tmp_rot_no,this.fromDate,this.toDate,this.fromTime,this.toTime).subscribe(data => {
      this.exportLoadedContainerReport = data;
      console.log(data);
    });
    
    this.shahinSpecialReportLoadedContainerService.getLoadedContainerOnboardList(tmp_rot_no,this.fromDate,this.toDate,this.fromTime,this.toTime).subscribe(data => {
      this.containerOnboardInfo = data;
      console.log(data);
    });

    this.shahinSpecialReportLoadedContainerService.getLoadedContainerBalanceList(tmp_rot_no,this.fromDate,this.toDate,this.fromTime,this.toTime).subscribe(data => {
      this.containerOnboard = data;
      console.log(data);     

    });

    this.tmp_rot_no = localStorage.getItem("loaded_container_tmp_rot_no");
    this.rotation_no = tmp_rot_no.toString().replace("_", "/");

    console.log(this.rotation_no);
  }
  
}

