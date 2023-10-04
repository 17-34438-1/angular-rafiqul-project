import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ToastrService } from 'ngx-toastr';

import { BerthOperatorReportService } from '../service/berthOperatorReport/berth-operator-report.service';

@Component({
  selector: 'app-berth-operator-report-form',
  templateUrl: './berth-operator-report-form.component.html',
  styleUrls: ['./berth-operator-report-form.component.css']
})
export class BerthOperatorReportFormComponent implements OnInit {

  imp_rot: string;
  mlo_code: string;
  status: string;
  format: string;

  vslName: string;

  mloCodeList: any;

  resultList:any;

  

  constructor(
    private router: Router,
    // private notifierService: NotifierService,
    private toastr:ToastrService,

    private berthOprRptService : BerthOperatorReportService
  ) {
    this.imp_rot='';
    this.mlo_code='';
    this.status='';
    this.format='';

    this.vslName = "";
   }

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

  mloCodeByRotation() {
    var reqRot = "";
   
    reqRot = this.imp_rot.replace("/","_");
  

    this.berthOprRptService.mloCodeByRotation(reqRot).subscribe(data => {
      console.log("MLO List");
      console.log(data);
      this.mloCodeList = data;
    }, err => {
      console.log(err);
      // this.notifierService.notify('error', err.error.message);
    });
  }

 

  onSubmit() {
    console.log("berth operator report value : ");
    
    if(this.format=="html")
    {
      localStorage.setItem("Import_Rotation_No",this.imp_rot);
      localStorage.setItem("mlo_code",this.mlo_code);
      localStorage.setItem("status",this.status);     // both, fcl, lcl
      localStorage.setItem("format",this.format);     // html, excel
  
      window.open('ImportReport/berthOperatorReportView','_blank');
    }
    else if(this.format=="excel"){

      let formData = {
        // import_Rotation_No: this.imp_rot,
        // mlo_code: this.mlo_code,
        // status: this.status,
        // format: this.format
        
        import_Rotation_No: this.imp_rot,
        mlocode: this.mlo_code,
        cstatus: this.status
      }    

      var reqRot = this.imp_rot.replace("/","_");
      this.berthOprRptService.vslName(reqRot).subscribe(data => {
        console.log("vslName");
        console.log(data);
        this.vslName = data;
        console.log("vslName ############ : "+this.vslName);
      }, err => {
        console.log('vsl name error');

        this.toastr.error('vsl name error', 'Error',{
          // timeOut:5000,
          disableTimeOut: true,
          tapToDismiss: false,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-center-center',
          closeButton:true
        });


        // this.notifierService.notify('error', 'vsl name error');
      });

      let response=this.berthOprRptService.getBerthOptReport(formData);
      response.subscribe(data=>{  
        console.log(data);    // works
        this.resultList=data;
      
        this.berthOprRptService.getResultWithExcel(this.resultList,this.vslName,this.imp_rot);
  
      });
      console.log("test ---------------------");
      console.log(this.resultList);
    }
  }

}
