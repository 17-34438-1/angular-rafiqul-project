import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { jsPDF } from "jspdf";
import { ExportMloWiseExportSummaryService } from '../service/ExportReports/export-mlo-wise-export-summary/export-mlo-wise-export-summary.service';

@Component({
  selector: 'app-export-mlo-wise-export-summary-form',
  templateUrl: './export-mlo-wise-export-summary-form.component.html',
  styleUrls: ['./export-mlo-wise-export-summary-form.component.css']
})
export class ExportMloWiseExportSummaryFormComponent implements OnInit {
  rotation_no:any
  tmp_rot_no:any;
  mlo:any;
  vname:any;
  voyNo:any;
  mlo_wise_excel:any;
  options:any;
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
  }
  onSubmit(){
    if (this.options == "xl") {
      var rotation_no = this.rotation_no;
      console.log(rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);
      this.mlo_wise_export_summary.getvvdgkey(tmp_rot_no).subscribe(data => {
        this.mlo_wise_excel = data;
      })

      this.mlo_wise_export_summary.getVoyNo(tmp_rot_no).subscribe(data => {
        this.mlo_wise_excel = data;
        console.log(data);
        for (let mlo_excel_uploaded of data) {
          this.voyNo = mlo_excel_uploaded.voy_No;
  
        }
      this.mlo_wise_export_summary.getContainerVesselInfo(tmp_rot_no).subscribe(data=>{
        this.mlo_wise_excel=data;
  
        for (let vnamedata of data) {
      this.vname= vnamedata.vsl_name
       console.log(this.vname);
   
        }

        let response = this.mlo_wise_export_summary.getContainerList(tmp_rot_no);
        response.subscribe(data => {
          this.mlo_wise_excel = data;
          console.log(this.mlo_wise_excel);
        
          this.mlo_wise_export_summary.getResultWithExcel(data, this.rotation_no,this.vname,this.voyNo);
  
        });

      });
    });

      localStorage.setItem("tmp_rot_no", this.rotation_no);
      console.log(this.rotation_no);

    }

    if (this.options == "html") { 
      var rotation_no = this.rotation_no;
      console.log(rotation_no);
      localStorage.setItem("export_mlo_wise_export_summary_rotation_no", rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);    
      this.router.navigate([]).then(data => window.open('exportReports/mlo-wise-export-summary/list', '_blank'));
    }

      if (this.options == "pdf") { 
      var rotation_no = this.rotation_no;
      console.log(rotation_no);
      localStorage.setItem("export_mlo_wise_export_summary_rotation_no", rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);    
      this.router.navigate([]).then(data => window.open('exportReports/mlo-wise-export-summary/list', '_blank'));
    }



  }

}
