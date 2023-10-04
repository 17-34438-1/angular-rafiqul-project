import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportLoadedContainerService } from '../service/ExportReports/export-loaded-container/export-loaded-container.service';

@Component({
  selector: 'app-export-loaded-container-form',
  templateUrl: './export-loaded-container-form.component.html',
  styleUrls: ['./export-loaded-container-form.component.css']
})
export class ExportLoadedContainerFormComponent implements OnInit {
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
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private exportLoadedContainerReportService: ExportLoadedContainerService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.options == "xl") {

      var rotation_no = this.rotation_no;
      console.log(rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);

      console.log(this.fromDate);
      this.exportLoadedContainerReportService.getLoadedContainerReport(tmp_rot_no, this.fromDate, this.toDate, this.fromTime, this.toTime).subscribe(data => {
        this.exportLoadedContainerReport = data;
        console.log(data);
        for (let containerDateAndRotation of data) {
          this.rotation = containerDateAndRotation.rotation;
        }       
    

        this.exportLoadedContainerReportService.getLoadedContainerOnboardList(tmp_rot_no, this.fromDate, this.toDate, this.fromTime, this.toTime).subscribe(data => {
          this.containerOnboardInfo = data;
          console.log(data);
        });

        this.exportLoadedContainerReportService.getLoadedContainerBalanceList(tmp_rot_no, this.fromDate, this.toDate, this.fromTime, this.toTime).subscribe(data => {
          this.containerBalance = data;
          console.log(data);
        });

        this.exportLoadedContainerReportService.getResultWithExcel(data, this.containerOnboardInfo, this.rotation_no);
        console.log(this.rotation);

      });
    }


    if (this.options == "html") {
      var rotation_no = this.rotation_no;
      console.log(rotation_no);

      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);

      localStorage.setItem("loaded_container_tmp_rot_no", tmp_rot_no);
      localStorage.setItem("loaded_container_fromDate", this.fromDate);
      localStorage.setItem("loaded_container_toDate", this.toDate);
      localStorage.setItem("loaded_container_fromTime", this.fromTime);
      localStorage.setItem("loaded_container_toTime", this.toTime);

      console.log("fromDate:" + this.fromDate);
      console.log("rotation_no:" + this.rotation_no);
      console.log("fromTime:" + this.fromTime);
      console.log("todate:" + this.toDate);
      console.log("totime:" + this.toTime);

      this.router.navigate([]).then(data => window.open('exportReports/export-loaded-container/list', '_blank'));
    }



  }
}
