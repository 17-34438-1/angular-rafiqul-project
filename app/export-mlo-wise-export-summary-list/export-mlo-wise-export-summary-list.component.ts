import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportMloWiseExportSummaryService } from '../service/ExportReports/export-mlo-wise-export-summary/export-mlo-wise-export-summary.service';

@Component({
  selector: 'app-export-mlo-wise-export-summary-list',
  templateUrl: './export-mlo-wise-export-summary-list.component.html',
  styleUrls: ['./export-mlo-wise-export-summary-list.component.css']
})
export class ExportMloWiseExportSummaryListComponent implements OnInit {
  tmp_rot_no:any;
  rotation_no:any;
  voYNo:any;
  vsl_Name:any;
  mlo:any;
  ata:any;
  atd:any;
  berth:any;
  containerVoyNo:any;
  containerBlockReport:any;
  mlo_wise_export:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private mlo_wise_export_summary:ExportMloWiseExportSummaryService

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

    this.tmp_rot_no = localStorage.getItem("export_mlo_wise_export_summary_rotation_no");
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
    this.mlo_wise_export_summary.getVoyNo(tmp_rot_no).subscribe(data => {
      this.containerVoyNo = data;
      console.log(data);
      for (let containerBlock of data) {
        this.voYNo = containerBlock.voy_No;

      }
      console.log(this.voYNo);

    });


    this.mlo_wise_export_summary.getContainerVesselInfo(tmp_rot_no).subscribe(data => {
      this.containerVoyNo = data;
      console.log(data);
      for (let containerBlock of data) {
      
        this.vsl_Name = containerBlock.vsl_name;
        this.ata = containerBlock.ata;
        this.atd=containerBlock.atd;
        this.berth=containerBlock.berth;

      }
      console.log(this.voYNo);

    });

    let response = this.mlo_wise_export_summary.getContainerList(tmp_rot_no);
    response.subscribe(data => {
      console.log(data);
      this.mlo_wise_export = data;
    })




    this.tmp_rot_no = localStorage.getItem("export_mlo_wise_export_summary_rotation_no");
    this.rotation_no = tmp_rot_no.toString().replace("_", "/");

    console.log(this.rotation_no);
  }

}
