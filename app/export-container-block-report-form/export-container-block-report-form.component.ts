import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyTxtRecord } from 'dns';
import { forkJoin } from 'rxjs';
import { ContainerBlockReportService } from '../service/ExportReports/container-block-report/container-block-report.service';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-export-container-block-report-form',
  templateUrl: './export-container-block-report-form.component.html',
  styleUrls: ['./export-container-block-report-form.component.css']
})
export class ExportContainerBlockReportFormComponent implements OnInit {
  vname: any;
  rotation_no: any;
  containerVoyNo: any;
  containerBlockReport: any;
  containerVesselInfo: any;
  options: any;
  data: any;
  voy_No: any;

  ContainerList: any;
  voyno: any;
  vvdGkey: any;
  vvd_Gkey: any;
  VesselInfo: any;
  VesselName: any;
  voyNo: any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private containerBlockReportService: ContainerBlockReportService,
  ) {

  }

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
  }

  onSubmit() {

    if (this.options == "xl") {

      var rotation_no = this.rotation_no;
      console.log(rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);




      this.containerBlockReportService.getVoyNo(tmp_rot_no).subscribe(data => {
        this.containerBlockReport = data
        console.log(this.containerBlockReport);
        for (let containerBlock of data) {
          this.voyNo = containerBlock.voy_No;

        }
        console.log(this.voyNo);


        let response = this.containerBlockReportService.getContainerVesselInfo(tmp_rot_no)
        response.subscribe(data => {
          this.containerBlockReport = data;
          console.log(this.containerBlockReport);
          for (let containerBlock of data) {
            this.vname = containerBlock.vsl_name;
          }
          console.log(this.vname);
          this.containerBlockReport = data;
          let response = this.containerBlockReportService.getContainerList(tmp_rot_no);
          response.subscribe(data => {

            this.containerBlockReport = data;
            this.containerBlockReportService.getResultWithExcel(data, this.rotation_no, this.vname,this.voyNo);
          });



        });

      });

    }


    if (this.options == "html") {

      console.log("helow world");

      var rotation_no = this.rotation_no;
      console.log(rotation_no);
      localStorage.setItem("export_container_block_report_rotation_no:", rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);
      localStorage.setItem("export_container_block_report_tmp_rot_no", tmp_rot_no);


      this.router.navigate([]).then(data => window.open('exportReports/container-block-report/list', '_blank'));



    }

  }

}
