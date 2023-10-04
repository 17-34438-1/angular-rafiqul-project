import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MloWiseExcelUploadedService } from '../service/ExportReports/mlo-wise-excel-uploaded/mlo-wise-excel-uploaded.service';

@Component({
  selector: 'app-export-mlo-wise-excel-uploaded-report-form',
  templateUrl: './export-mlo-wise-excel-uploaded-report-form.component.html',
  styleUrls: ['./export-mlo-wise-excel-uploaded-report-form.component.css']
})
export class ExportMloWiseExcelUploadedReportFormComponent implements OnInit {
  rotation_no:any
  tmp_rot_no:any;
  vname:any;
  voyNo:any;
  containerVoyNo:any;
  mlo_wise_excel:any;
  options:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private mlo_wise_excel_uploaded:MloWiseExcelUploadedService
  ) { }

  ngOnInit(): void {

    if(localStorage['status']!=1)
    {
      
      this.router.navigate(['/login']);
      this.toastr.error('Login and try again.', 'Error',{
     
        disableTimeOut: true,
        tapToDismiss: false,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass:'toast-center-center',
        closeButton:true
      });
      return;
    }
    
    this.tmp_rot_no=localStorage.getItem("tmp_rot_no");
    var tmp_rot_no=this.tmp_rot_no.toString().replace("/","_");
    console.log(tmp_rot_no);

  }

  onSubmit(){
    
    if (this.options == "xl") {

      var rotation_no = this.rotation_no;
      console.log(rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);
      this.mlo_wise_excel_uploaded.getvvdgkey(tmp_rot_no).subscribe(data => {
        this.mlo_wise_excel = data;
      })


      this.mlo_wise_excel_uploaded.getVoyNo(tmp_rot_no).subscribe(data => {
        this.containerVoyNo = data;
        console.log(data);
        for (let mlo_excel_uploaded of data) {
          this.voyNo = mlo_excel_uploaded.voy_No;  
        }

        console.log(this.voyNo);
        this.mlo_wise_excel_uploaded.getContainerVesselInfo(tmp_rot_no).subscribe(data=>{
        this.mlo_wise_excel=data;  
        for (let vnamedata of data) {
        this.vname= vnamedata.vsl_name
        console.log(this.vname);    
        }

        let response = this.mlo_wise_excel_uploaded.getContainerList(tmp_rot_no);
        response.subscribe(data => {
          this.mlo_wise_excel = data;        
          this.mlo_wise_excel_uploaded.getResultWithExcel(data, this.rotation_no,this.vname,this.voyNo);  
        });

      });
     
    });
      localStorage.setItem("tmp_rot_no", this.rotation_no);
      console.log(this.rotation_no);

    }

    if(this.options == "html") {
      
      console.log("helow world");
      var rotation_no = this.rotation_no;
      console.log(rotation_no);
      localStorage.setItem("export_mlo_wise_excel_uploaded_tmp_rot_no", rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);
      this.router.navigate([]).then(data => window.open('exportReports/mlo-wise-excel-uploaded-report/list', '_blank'));
}
    
  }

}
