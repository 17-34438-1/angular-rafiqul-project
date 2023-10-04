import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportVesselListWithStatusService } from '../service/ExportReports/export-vessel-list-with-status/export-vessel-list-with-status.service';

@Component({
  selector: 'app-export-vessel-list-with-status-detail-list',
  templateUrl: './export-vessel-list-with-status-detail-list.component.html',
  styleUrls: ['./export-vessel-list-with-status-detail-list.component.css']
})
export class ExportVesselListWithStatusDetailListComponent implements OnInit {
  tmp_rot_no:any;
  rotation_no:any;
  voYNo:any;

  mlo_wise_export:any;

  mlo:String="";
  cont_mlo:String="";
  total:number=0;
  orgNameShowStatus:Boolean=false;
  totalShowStatus:Boolean=false;
  j:number=0;
  i:number=0;
  vsl_Name:any;
  ata:any;
  atd:any;
  containerVoyNo:any;
  berth:any;
  mlo_excel_uploaded:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private mlo_wise_excel_uploaded:ExportVesselListWithStatusService
  ) { }

  ngOnInit(): void {

    this.tmp_rot_no = localStorage.getItem("vessel_list_with_Status_Details_tmp_rot_no");
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
    this.mlo_wise_excel_uploaded.getVoyNo(tmp_rot_no).subscribe(data => {
      this.containerVoyNo = data;
      console.log(data);
      for (let containerBlock of data) {
        this.voYNo = containerBlock.voy_No;

      }
      console.log(this.voYNo);

    });


    this.mlo_wise_excel_uploaded.getContainerVesselInfo(tmp_rot_no).subscribe(data => {
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
    this.mlo_wise_excel_uploaded.VesselListWithStatusForExportDetail(tmp_rot_no).subscribe(data => {
      this.mlo_wise_export = data;
      console.log(data);
 

    });

    // let response = this.mlo_wise_excel_uploaded.VesselListWithStatusForExportDetail(tmp_rot_no);
    // response.subscribe(data => {
    //   console.log(data);
    //   this.mlo_wise_export = data;
    // })
    
    this.tmp_rot_no = localStorage.getItem("vessel_list_with_Status_Details_tmp_rot_no");
    this.rotation_no = tmp_rot_no.toString().replace("_", "/");
    console.log(this.rotation_no); 
  }

  
  setOffDock(mlo:String){
    if(mlo!=this.mlo){
      if(this.j > 0){
        this.total=this.j;
    
        this.totalShowStatus=true;
     }
     this.orgNameShowStatus=true;
     this.j=1;
    }
    else{
      this.totalShowStatus=false;
      this.orgNameShowStatus=false;
      this.j=this.j+1;
    }
    this.mlo=mlo;

      
  }

}
