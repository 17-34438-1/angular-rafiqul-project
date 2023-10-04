import { Component, OnInit } from '@angular/core';
import { ContainerBlockReportService } from '../service/ExportReports/container-block-report/container-block-report.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-export-container-block-report-list',
  templateUrl: './export-container-block-report-list.component.html',
  styleUrls: ['./export-container-block-report-list.component.css']
})
export class ExportContainerBlockReportListComponent implements OnInit {
  vname: any;
  aTa: any;
  tmp_rot_no: any;
  vsl_Name: any;
  rotation_no: any;
  containerVoyNo: any;
  voYNo: any;
  containerBlockReport: any;
  constructor(
    private toastr:ToastrService,
    private router:Router,
    private containerBlockReportService: ContainerBlockReportService
  ) { }

  ngOnInit(): void {

    if(localStorage['status']!=1)
    {
      // console.log("### User logged out already ### ");
      this.router.navigate(['/login']);
      this.toastr.error('Login and try again.', 'Error',{
        // timeOut:5000,
        disableTimeOut: true,
        tapToDismiss: false,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass:'toast-center-center',
        closeButton:true
      });
      return;
    }

    
    this.tmp_rot_no = localStorage.getItem("export_container_block_report_tmp_rot_no");
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);


    this.containerBlockReportService.getVoyNo(tmp_rot_no).subscribe(data => {
      this.containerVoyNo = data;
      console.log(data);
      for (let containerBlock of data) {
        this.voYNo = containerBlock.voy_No;

      }
      console.log(this.voYNo);

    });



    this.containerBlockReportService.getContainerVesselInfo(tmp_rot_no).subscribe(data => {
      console.log(data);

      for (let containerBlock of data) {
        this.vsl_Name = containerBlock.vsl_name;
        this.aTa = containerBlock.ata;
      }
    });


    let response = this.containerBlockReportService.getContainerList(tmp_rot_no);
    response.subscribe(data => {
      console.log(data);
      this.containerBlockReport = data;
    })




    this.tmp_rot_no = localStorage.getItem("export_container_block_report_rotation_no");
    this.rotation_no = tmp_rot_no.toString().replace("_", "/");

    console.log(this.rotation_no);

  }

}
