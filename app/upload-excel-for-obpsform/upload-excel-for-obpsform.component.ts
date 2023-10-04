import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { UploadexcelForOBPSService } from '../service/UploadExcelForOBPS/UploadExcelForOBPS/uploadexcel-for-obps.service';

@Component({
  selector: 'app-upload-excel-for-obpsform',
  templateUrl: './upload-excel-for-obpsform.component.html',
  styleUrls: ['./upload-excel-for-obpsform.component.css']
})
export class UploadExcelForOBPSformComponent implements OnInit {
  @ViewChild('UploadFileInput', { static: false }) uploadFileInput:any;
  UploadExcelFilePangaonForm:any;
  fileInputLabel:any;
  resultList:any;
  ipAddress:any="";
  response:any;
  loginId: any;
  size:number=0;
  constructor(

    private router: Router,
    private formBuilder: FormBuilder,
    private toastr:ToastrService,
    private httpClient: HttpClient,
    private uploadExcelForPangaonService:UploadexcelForOBPSService


  ) { 

    this.UploadExcelFilePangaonForm=this.formBuilder.group({
      excelfile: ['']
    })
    this.loginId = "";
  }

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
    else{
      this.loginId=localStorage.getItem("loginId");
      this.uploadExcelForPangaonService.getIpAddress().subscribe((res:any)=>{
        this.ipAddress=res.ip;
        

      });
    }




    

  }


  onFileSelect(event:any){
    let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);

      if (!_.includes(af, file.type)) {
        this.toastr.error('Only EXCEL Docs Allowed!', 'Error',{
          // timeOut:5000,
          disableTimeOut: true,
          tapToDismiss: false,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-center-center',
          closeButton:true
        });
        return;
      } else {


console.log("Rafiqul Islam");

        this.fileInputLabel = file.name;
        this.UploadExcelFilePangaonForm.get('excelfile').setValue(file);
       this.size=file.size;
       this.size=((this.size/1024)/1024);
       
       }
    }

  }

  onSubmit(event:any):any{

    if (!this.UploadExcelFilePangaonForm.get('excelfile').value) {
      this.toastr.error('Select An Excel File', 'Error',{
        // timeOut:5000,
        disableTimeOut: true,
        tapToDismiss: false,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass:'toast-center-center',
        closeButton:true
      });
      return false;
    }
    else{
      if(this.size<=2){
        console.log("ok")

     
        const formData = new FormData();
        formData.append('excelfile', this.UploadExcelFilePangaonForm.get('excelfile').value);
        console.log("Rafiqul Islam",this.loginId);
        console.log("Robin",this.ipAddress);
        formData.append('loginId',this.loginId);
        formData.append('ip',this.ipAddress);
        this.uploadExcelForPangaonService.uploadExcelForPangaon(formData).subscribe(result=>{
          this.resultList=result;
          for(let r of this.resultList){
            console.log("message "+r.message);
          }
        });

      }
      else{
        this.toastr.error('File size is getter than 2MB', 'Error',{
          // timeOut:5000,
          disableTimeOut: true,
          tapToDismiss: false,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-center-center',
          closeButton:true
        });
        return false;

      }
  
    }
  }

}
