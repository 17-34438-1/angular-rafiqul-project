import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportVesselListWithStatusService } from '../service/ExportReports/export-vessel-list-with-status/export-vessel-list-with-status.service';

@Component({
  selector: 'app-export-vessel-list-with-status-summary-list',
  templateUrl: './export-vessel-list-with-status-summary-list.component.html',
  styleUrls: ['./export-vessel-list-with-status-summary-list.component.css']
})
export class ExportVesselListWithStatusSummaryListComponent implements OnInit {
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
    private exportVesselListWithStatus:ExportVesselListWithStatusService

  )
  { }

  ngOnInit(): void {

    this.tmp_rot_no = localStorage.getItem("vessel_list_with_Status_Summary_tmp_rot_no");
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
    this.exportVesselListWithStatus.getVoyNo(tmp_rot_no).subscribe(data => {
      this.containerVoyNo = data;
      console.log(data);
      for (let containerBlock of data) {
        this.voYNo = containerBlock.voy_No;

      }
      console.log(this.voYNo);

    });


    this.exportVesselListWithStatus.getContainerVesselInfo(tmp_rot_no).subscribe(data => {
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

    let response = this.exportVesselListWithStatus.VesselListWithStatusForExportSummary(tmp_rot_no);
    response.subscribe(data => {
      console.log(data);
      this.mlo_wise_export = data;
    })




    this.tmp_rot_no = localStorage.getItem("vessel_list_with_Status_Summary_tmp_rot_no");
    this.rotation_no = tmp_rot_no.toString().replace("_", "/");

    console.log(this.rotation_no);

  }



  
}
