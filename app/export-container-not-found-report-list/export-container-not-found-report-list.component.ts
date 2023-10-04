import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportContainerNotFoundReportService } from '../service/ExportReports/export-container-not-found-report/export-container-not-found-report.service';

@Component({
  selector: 'app-export-container-not-found-report-list',
  templateUrl: './export-container-not-found-report-list.component.html',
  styleUrls: ['./export-container-not-found-report-list.component.css']
})
export class ExportContainerNotFoundReportListComponent implements OnInit {
    fromdate:any;
    toDate:any;
    tmp_rot_no:any;
    rotation:any;
    rotation_no_pre_advised:any;
    rotation_no:any;
   
   
   
    ata:any;
    ddl_imp_rot_no:any;
    voysNo:any;
    vsl_name:any;

    rotation_no_pre_advised_container:any;
    containerDateAndRotation:any;
    containerBlockReport:any;


  constructor(
    private toastr:ToastrService,
    private router: Router,
    private exportContainerNotFoundReportService:ExportContainerNotFoundReportService
   

  ) { }

  ngOnInit(): void {

     this.fromdate= localStorage.getItem("fromDate");
    this.tmp_rot_no = localStorage.getItem("date_tmp_rot_no");
    this.toDate=localStorage.getItem("toDate");
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    this.exportContainerNotFoundReportService.getContainerNotFoundList(tmp_rot_no,this.fromdate,this.toDate).subscribe(data => {
      this.containerDateAndRotation = data;
      console.log(data);
      for (let containerDateAndRotation of data) {
        this.rotation = containerDateAndRotation.rotation;
      }
      console.log(this.rotation);

    });

    this.exportContainerNotFoundReportService.getContainerVessel(tmp_rot_no).subscribe(data => {
      this.containerDateAndRotation = data;
      console.log(data);
      for (let containerDateAndRotation of data) {
        this.ata=containerDateAndRotation.ata;
        this.voysNo=containerDateAndRotation.voysNo;
        this.vsl_name=containerDateAndRotation.vsl_name;
        this.ddl_imp_rot_no=containerDateAndRotation.ddl_imp_rot_no;
        this.rotation = containerDateAndRotation.rotation;
      }
      console.log(this.rotation);

    });

  }

}
