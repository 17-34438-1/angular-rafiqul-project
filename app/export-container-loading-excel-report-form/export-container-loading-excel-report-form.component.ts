import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportContainerLoadingExcelReportService } from '../service/ExportReports/export-container-loading-excel-report/export-container-loading-excel-report.service';

@Component({
  selector: 'app-export-container-loading-excel-report-form',
  templateUrl: './export-container-loading-excel-report-form.component.html',
  styleUrls: ['./export-container-loading-excel-report-form.component.css']
})
export class ExportContainerLoadingExcelReportFormComponent implements OnInit {
  fromDate:any;
  fromTime:any;
  toDate:any;
  toTime:any;
  rotation:any;
  ContainerLoadingExcelReport:any;
  rotation_no: any
  tmp_rot_no: any;
  vname: any;
  voyNo: any;
  mlo_wise_excel: any;
  options: any;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private exportContainerLoadingExcelReport: ExportContainerLoadingExcelReportService
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.options == "xl") {
    var rotation_no = this.rotation_no;
      console.log(rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);

      console.log(this.fromDate);
      this.exportContainerLoadingExcelReport.getContainerLoadingExcelReport(tmp_rot_no,this.fromDate,this.toDate,this.fromTime,this.toTime).subscribe(data => {
        this.ContainerLoadingExcelReport = data;
        console.log(data);
        for (let containerLoadingExcelReport of data) {
          this.rotation = containerLoadingExcelReport.rotation;
        }
        this.exportContainerLoadingExcelReport.getResultWithExcel(data, this.rotation_no);
      
  
      });

    }

    
      if (this.options == "html") {
        
      var rotation_no = this.rotation_no;
      console.log(rotation_no);
   
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);
      localStorage.setItem("container_loading_excel_tmp_rot_no", tmp_rot_no);
      localStorage.setItem("container_loading_excel_fromDate",this.fromDate);
      localStorage.setItem("container_loading_excel_toDate",this.toDate);
      localStorage.setItem("container_loading_excel_fromTime",this.fromTime);
      localStorage.setItem("container_loading_excel_toTime",this.toTime);

      console.log("fromDate:"+this.fromDate);
      console.log("rotation_no:"+this.rotation_no);
      console.log("fromTime:"+this.fromTime);
      console.log("todate:"+this.toDate);
      console.log("totime:"+this.toTime);

  
      this.router.navigate([]).then(data => window.open('exportReports/export-container-loading-excel-report/list', '_blank'));
    }

  
  
  }

}
