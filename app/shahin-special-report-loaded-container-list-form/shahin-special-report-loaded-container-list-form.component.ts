import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShahinSpecialReportLoadedContainerService } from '../service/ShahinSpecialReport/shahin-special-report-loaded-container/shahin-special-report-loaded-container.service';

@Component({
  selector: 'app-shahin-special-report-loaded-container-list-form',
  templateUrl: './shahin-special-report-loaded-container-list-form.component.html',
  styleUrls: ['./shahin-special-report-loaded-container-list-form.component.css']
})
export class ShahinSpecialReportLoadedContainerListFormComponent implements OnInit {
  
  
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
    private shahinSpecialReportLoadedContainerService:ShahinSpecialReportLoadedContainerService
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {




if(this.options=="xl"){
  var rotation_no = this.rotation_no;
  console.log(rotation_no);
  var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);
      console.log(this.fromDate);
        let ShahinContainerList=this.shahinSpecialReportLoadedContainerService.getLoadedContainerReport(tmp_rot_no, this.fromDate, this.toDate, this.fromTime, this.toTime);
        let balanceOnBoardSummary= this.shahinSpecialReportLoadedContainerService.getLoadedContainerOnboardList(tmp_rot_no, this.fromDate, this.toDate, this.fromTime, this.toTime);
        let dischargeContianerSummary= this.shahinSpecialReportLoadedContainerService.getLoadedContainerBalanceList(tmp_rot_no, this.fromDate, this.toDate, this.fromTime, this.toTime);      
  forkJoin([ShahinContainerList,balanceOnBoardSummary,dischargeContianerSummary]).subscribe(result=>{
   
   this.shahinSpecialReportLoadedContainerService.getResultWithExcel(this.rotation,result[0],result[1],result[2]);

  });
  
}



    if (this.options == "html") {
      var rotation_no = this.rotation_no;
      console.log(rotation_no);

      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);

      localStorage.setItem("Shahin_loaded_container_tmp_rot_no", tmp_rot_no);
      localStorage.setItem("Shahin_loaded_container_fromDate", this.fromDate);
      localStorage.setItem("Shahin_loaded_container_toDate", this.toDate);
      localStorage.setItem("Shahin_loaded_container_fromTime", this.fromTime);
      localStorage.setItem("Shahin_loaded_container_toTime", this.toTime);

      console.log("fromDate:" + this.fromDate);
      console.log("rotation_no:" + this.rotation_no);
      console.log("fromTime:" + this.fromTime);
      console.log("todate:" + this.toDate);
      console.log("totime:" + this.toTime);

      this.router.navigate([]).then(data => window.open('shahinSpecialReport/loaded-container-list', '_blank'));
    }



  }

}
