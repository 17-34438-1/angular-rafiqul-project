import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportContainerNotFoundReportService } from '../service/ExportReports/export-container-not-found-report/export-container-not-found-report.service';

@Component({
  selector: 'app-export-container-not-found-report-form',
  templateUrl: './export-container-not-found-report-form.component.html',
  styleUrls: ['./export-container-not-found-report-form.component.css']
})
export class ExportContainerNotFoundReportFormComponent implements OnInit {
  rotation_no:any;
  rotation:any;
  export_date_and_rotation:any;
  fromDate:any;
  toDate:any;
  options:any;
  constructor(

    private toastr: ToastrService,
    private router: Router,
    private exportContainerNotFoundService: ExportContainerNotFoundReportService

  ) { }

  ngOnInit(): void {
  }

  onSubmit(){

    if (this.options == "xl") {
      var rotation_no = this.rotation_no;
        console.log(rotation_no);
        var tmp_rot_no = rotation_no.toString().replace("/", "_");
        console.log(tmp_rot_no);
  
        console.log(this.fromDate);
        this.exportContainerNotFoundService.getContainerNotFoundList(tmp_rot_no,this.fromDate,this.toDate).subscribe(data => {
          this.export_date_and_rotation = data;
          console.log(data);
          for (let containerDateAndRotation of data) {
            this.rotation = containerDateAndRotation.rotation;
          }
          this.exportContainerNotFoundService.getResultWithExcel(data, this.rotation_no);
          console.log(this.rotation);
    
        });
  
      }
  
      
        if (this.options == "html") {
          

        console.log("hellow word");

        var rotation_no = this.rotation_no;
        console.log(rotation_no);
     
        var tmp_rot_no = rotation_no.toString().replace("/", "_");
        console.log(tmp_rot_no);
        localStorage.setItem("date_tmp_rot_no", tmp_rot_no);
        localStorage.setItem("fromDate",this.fromDate);
        localStorage.setItem("toDate",this.toDate);


        console.log("fromDate:"+this.fromDate);
        console.log("rotation_no:"+this.rotation_no);
  
    
        this.router.navigate([]).then(data => window.open('exportReports/export-container-not-found/list', '_blank'));
      }
  

  }

}
