import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';
import { ShahinMloWiseFinalLoadingExportReportService } from '../service/ShahinSpecialReport/shahin-mlo-wise-final-loading-export-report/shahin-mlo-wise-final-loading-export-report.service';

@Component({
  selector: 'app-shahin-mlo-wise-final-loading-export-report-form',
  templateUrl: './shahin-mlo-wise-final-loading-export-report-form.component.html',
  styleUrls: ['./shahin-mlo-wise-final-loading-export-report-form.component.css']
})
export class ShahinMloWiseFinalLoadingExportReportFormComponent implements OnInit {
  vesselInfo:any;
  fromDate: any;
  rotation: any;
  exportLoadedContainerReport: any;
  containerBalance:any;
  rotation_no: any
  tmp_rot_no: any;
  vname: any;
  voyNo: any;
  mlo_wise: any;
  options: any;
  fromTime: any;
  toDate: any;
  toTime: any;
  containerVesselInfo: any;
  vsl_Name: any;
  berth_op: any;
  exportContainerLoadingExcelReport: any;
  berth: any
  voYNo: any;
  containerOnboardInfo: any;
  result:any;
  
  
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private shahinSpecialReportLoadedContainerService:ShahinMloWiseFinalLoadingExportReportService
  ) { }

  ngOnInit(): void {
  }


  

onSubmit(){




if(this.options=="xl"){
  var rotation_no = this.rotation_no;
  console.log(rotation_no);
  var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);
      console.log(this.fromDate);
        let ContainerLoadingVesselInfo = this.shahinSpecialReportLoadedContainerService.getContainerLoadingVesselInfo(tmp_rot_no);
        let dischargeContianerSummary= this.shahinSpecialReportLoadedContainerService.getContainerLoadingExcelReport(tmp_rot_no, this.fromDate, this.toDate, this.fromTime, this.toTime);      
  forkJoin([ContainerLoadingVesselInfo,dischargeContianerSummary]).subscribe(result=>{
    this.shahinSpecialReportLoadedContainerService.getResultWithExcel(this.rotation,result[0],result[1]);
  });
  
}



    if (this.options == "html") {
      var rotation_no = this.rotation_no;
      console.log(rotation_no);

      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);

      localStorage.setItem("Shahin_mlo_wise_final_loading_export_report_rotaton", tmp_rot_no);
      localStorage.setItem("Shahin_mlo_wise_final_loading_export_report_fromDate", this.fromDate);
      localStorage.setItem("Shahin_mlo_wise_final_loading_export_report_toDate", this.toDate);
      localStorage.setItem("Shahin_mlo_wise_final_loading_export_report_fromTime", this.fromTime);
      localStorage.setItem("Shahin_mlo_wise_final_loading_export_report_toTime", this.toTime);

      console.log("fromDate:" + this.fromDate);
      console.log("rotation_no:" + this.rotation_no);
      console.log("fromTime:" + this.fromTime);
      console.log("todate:" + this.toDate);
      console.log("totime:" + this.toTime);

      this.router.navigate([]).then(data => window.open('shahinSpecialReport/shahin-mlo-wise-loading-export-report-list', '_blank'));
    }



  }



  onSubmited(){
  





    if(this.options=="xl"){
      var rotation_no = this.rotation_no;
      console.log(rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
          console.log(tmp_rot_no);
          console.log(this.fromDate);
            let vesselInfo= this.shahinSpecialReportLoadedContainerService.getContainerLoadingVesselInfo(tmp_rot_no);
            let dischargeContianerSummary= this.shahinSpecialReportLoadedContainerService.getContainerLodingDetailsList(tmp_rot_no, this.fromDate, this.toDate, this.fromTime, this.toTime);      
           
      
      forkJoin([vesselInfo,dischargeContianerSummary]).subscribe(result=>{
    
 
       this.shahinSpecialReportLoadedContainerService.getResultWithDetailsContainerExcel(this.rotation,result[0],result[1]);

      });
      
  

    }
    
    
    
        if (this.options == "html") {
          var rotation_no = this.rotation_no;
          console.log(rotation_no);
    
          var tmp_rot_no = rotation_no.toString().replace("/", "_");
          console.log(tmp_rot_no);
    
          localStorage.setItem("Shahin_mlo_wise_final_loading_details_export_report_rotaton", tmp_rot_no);
          localStorage.setItem("Shahin_mlo_wise_final_loading_details_export_report_fromDate", this.fromDate);
          localStorage.setItem("Shahin_mlo_wise_final_loading_details_export_report_toDate", this.toDate);
          localStorage.setItem("Shahin_mlo_wise_final_loading_details_export_report_fromTime", this.fromTime);
          localStorage.setItem("Shahin_mlo_wise_final_loading_details_export_report_toTime", this.toTime);
    
          console.log("fromDate:" + this.fromDate);
          console.log("rotation_no:" + this.rotation_no);
          console.log("fromTime:" + this.fromTime);
          console.log("todate:" + this.toDate);
          console.log("totime:" + this.toTime);
    
          this.router.navigate([]).then(data => window.open('shahinSpecialReport/shahin-mlo-wise-loading-details-export-report-list', '_blank'));
        }
    

  }
}
