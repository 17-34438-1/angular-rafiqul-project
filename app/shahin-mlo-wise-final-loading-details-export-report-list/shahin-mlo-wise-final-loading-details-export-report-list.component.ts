import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShahinMloWiseFinalLoadingExportReportService } from '../service/ShahinSpecialReport/shahin-mlo-wise-final-loading-export-report/shahin-mlo-wise-final-loading-export-report.service';

@Component({
  selector: 'app-shahin-mlo-wise-final-loading-details-export-report-list',
  templateUrl: './shahin-mlo-wise-final-loading-details-export-report-list.component.html',
  styleUrls: ['./shahin-mlo-wise-final-loading-details-export-report-list.component.css']
})
export class ShahinMloWiseFinalLoadingDetailsExportReportListComponent implements OnInit {
  tmp_rot_no:any;
  rotation_no:any;
  voYNo:any;

  mlo_wise_export:any;

  mlo:String="";
  cont_mlo:String="";
  total:number=0;
  
  totalweightd:number=0;
  orgNameShowStatus:Boolean=false;
  totalShowStatus:Boolean=false;
  j:number=0;
  i:number=0;

  vsl_Name:any;
  ata:any;
  atd:any;
  weight:number=0;
  // totalWeight:any;
  containerVoyNo:any;
  berth:any;
  fromDate:any;
  toDate:any;
  fromTime:any;
  toTime:any;
  mlo_excel_uploaded:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private shahinSpecialReportLoadedContainerService:ShahinMloWiseFinalLoadingExportReportService
  ) { }

  ngOnInit(): void {

    
  
    this.tmp_rot_no = localStorage.getItem("Shahin_mlo_wise_final_loading_details_export_report_rotaton");
    this.fromDate = localStorage.getItem("Shahin_mlo_wise_final_loading_details_export_report_fromDate");
    this.toDate = localStorage.getItem("Shahin_mlo_wise_final_loading_details_export_report_toDate");
    this.fromTime = localStorage.getItem("Shahin_mlo_wise_final_loading_details_export_report_fromTime");
    this.toTime = localStorage.getItem("Shahin_mlo_wise_final_loading_details_export_report_toTime");
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);


    this.shahinSpecialReportLoadedContainerService.getContainerLoadingVesselInfo(tmp_rot_no).subscribe(data => {
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
    this.shahinSpecialReportLoadedContainerService.getContainerLodingDetailsList(tmp_rot_no,this.fromDate,this.toDate,this.fromTime,this.toTime).subscribe(data => {
      this.mlo_wise_export = data;
      console.log(data);
      for (let mlo_wise_export of data) {
      
      
       for(let containerListData of mlo_wise_export.containerList){

        this.totalweightd = containerListData.size;
        console.log("mlowe:"+this.totalweightd)
       }

      }

    });


    
    this.tmp_rot_no = localStorage.getItem("vessel_list_with_Status_Details_tmp_rot_no");
    this.rotation_no = tmp_rot_no.toString().replace("_", "/");
    console.log(this.rotation_no); 

  }



   
  setWeight(weight:number,mlo:any){

 

    if(mlo!=this.mlo){
      if(this.j > 0){
        this.total=this.j;
    
        this.totalShowStatus=true;
     }
     this.orgNameShowStatus=true;
     this.j=1;
     this.totalweightd=weight;
     console.log("Weight:"+this.totalweightd);
    }
    // else{
    //   this.totalShowStatus=false;
    //   this.orgNameShowStatus=false;
    //   this.totalweight=this.totalweight+weight;


    //    console.log("totalweight:"+this.totalweight);
    //   this.j=this.j+1;
    // }
    this.mlo=mlo;

      
  }


}
