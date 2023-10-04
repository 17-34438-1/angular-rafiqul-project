import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportExcelUploadSampleService } from '../service/ExportReports/export-excel-upload-sample/export-excel-upload-sample.service';

@Component({
  selector: 'app-export-excel-upload-sample-with-loaded-container-list',
  templateUrl: './export-excel-upload-sample-with-loaded-container-list.component.html',
  styleUrls: ['./export-excel-upload-sample-with-loaded-container-list.component.css']
})
export class ExportExcelUploadSampleWithLoadedContainerListComponent implements OnInit {
  tmp_rot_no:any;
  rotation_no:any;
  voYNo:any;
  mlo:String="";
  cont_mlo:String="";
  orgNameShowStatus:Boolean=false;
  totalShowStatus:Boolean=false;
  vsl_Name:any;
  ata:any;
  atd:any;
  containerVoyNo:any;
  excel_uploaded_sample_with_container:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private excel_uploaded_sample_with_loaded_container:ExportExcelUploadSampleService
   
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


    this.tmp_rot_no = localStorage.getItem("export_excel_uploaded_tmp_rot_no");
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
    this.excel_uploaded_sample_with_loaded_container.getVoyNo(tmp_rot_no).subscribe(data => {
      this.containerVoyNo = data;
      console.log(data);
      for (let mlo_excel_uploaded of data) {
        this.voYNo = mlo_excel_uploaded.voy_No;

      }
      console.log(this.voYNo);

    });


    this.excel_uploaded_sample_with_loaded_container.getContainerVesselInfo(tmp_rot_no).subscribe(data => {
      this.containerVoyNo = data;
      console.log(data);
      for (let mlo_excel_uploaded of data) {
      
        this.vsl_Name = mlo_excel_uploaded.vsl_name;
        this.ata = mlo_excel_uploaded.ata;
        this.atd=mlo_excel_uploaded.atd;

      }
      console.log(this.voYNo);

    });




    let response = this.excel_uploaded_sample_with_loaded_container.getContainerList(tmp_rot_no);
    response.subscribe(data => {
      console.log(data);
      this.excel_uploaded_sample_with_container = data;
    })




    this.tmp_rot_no = localStorage.getItem("export_excel_uploaded_tmp_rot_no");
    this.rotation_no = tmp_rot_no.toString().replace("_", "/");

    console.log(this.rotation_no);
  }




}
