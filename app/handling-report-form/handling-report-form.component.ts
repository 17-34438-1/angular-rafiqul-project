import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth/auth.service';
import { HandlingReportService } from '../service/HandlingReport/handling-report.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-handling-report-form',
  templateUrl: './handling-report-form.component.html',
  styleUrls: ['./handling-report-form.component.css']
})
export class HandlingReportFormComponent implements OnInit {
  rotation_no:any;
  workDateContainer:any;
  options:any;


  constructor
  (
    private handlingReportService: HandlingReportService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.options == "xl") {
      var rotation_no = this.rotation_no;
        console.log(rotation_no);
        var tmp_rot_no = rotation_no.toString().replace("/", "_");
        console.log(tmp_rot_no);
  
        console.log(this.workDateContainer);

        let ContainerHandling=this.handlingReportService.getContainerHandling(tmp_rot_no);
        let ImportHandlingReport=this.handlingReportService.getImportHandlingReport(tmp_rot_no,this.workDateContainer);
        let ExportHandlingRepor=this.handlingReportService.getExportHandlingReport(tmp_rot_no,this.workDateContainer);
        forkJoin([ContainerHandling,ImportHandlingReport,ExportHandlingRepor]).subscribe(result=>{
          this.handlingReportService.getResultWithExcel(this.workDateContainer,tmp_rot_no,result[0],result[1],result[2]);
         });
      }
  
      
        if (this.options == "html" || this.options=="pdf") {
          
        var rotation_no = this.rotation_no;
        console.log(rotation_no);
     
        var tmp_rot_no = rotation_no.toString().replace("/", "_");
        console.log(tmp_rot_no);
        localStorage.setItem("import_export_rot_no", tmp_rot_no);
        localStorage.setItem("workDates",this.workDateContainer);
  
        console.log("workDate:"+this.workDateContainer);
        console.log("import_export_rot_no:"+this.rotation_no);
  
    
        this.router.navigate([]).then(data => window.open('handlingReport/handling-report-list', '_blank'));
      }

    
  }

}
