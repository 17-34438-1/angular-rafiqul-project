import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DgContainerDeliveryReportService } from '../service/DgReport/dg-container-delivery-report/dg-container-delivery-report.service';

@Component({
  selector: 'app-dg-container-delivery-report-form',
  templateUrl: './dg-container-delivery-report-form.component.html',
  styleUrls: ['./dg-container-delivery-report-form.component.css']
})
export class DgContainerDeliveryReportFormComponent implements OnInit {
  operatorRtgPerformaceHandingForm:FormGroup;
  isEditable:Boolean=true;
  isEditableDate:Boolean=true;
  rotation_no:any;
  shift:any;
  fromDate:any;
  Rotation:any;
  toDate:any;
  toTime:any;
  fileType:any;
  resultList:any;

  constructor(
    private toastr:ToastrService,
    private formBuilder: FormBuilder,
    private dgContainerDeliveryReportService:DgContainerDeliveryReportService,
    private router:Router
  ) { 

    this.operatorRtgPerformaceHandingForm=this.formBuilder.group({});
    this.shift="";
    this.fromDate="";
    this.Rotation="";
    this.toDate="";
    this.toTime="";   
  }

  ngOnInit(): void {
  }
  onSubmit(event:any){


    this.shift=event.shift.value;
    this.fromDate=event.fromDate.value;
   this.Rotation=event.Rotation.value;
    this.toDate=event.toDate.value;
    this.fileType=event.fileType.value;


   if(this.fileType=="xl"){
      if(this.shift=="rotation"){
      let response=this.dgContainerDeliveryReportService.getEquipmentHandlingPerformaceHistoryRtgList(this.shift,this.Rotation,this.fromDate,this.toDate);
      response.subscribe(data=>{
        this.dgContainerDeliveryReportService.getResultWithExcel(data,this.shift,this.Rotation,this.fromDate,this.toDate);
      });
    }
    else{

      console.log("excel")
      // if(this.fromDate!="" && this.toDate!="" ){
        let response=this.dgContainerDeliveryReportService.getEquipmentHandling(this.shift,this.Rotation,this.fromDate,this.toDate);
        response.subscribe(data=>{
          this.dgContainerDeliveryReportService.getResultWithExcelshit(data,this.Rotation,this.shift,this.fromDate,this.toDate);
        });

      // }
    }

  }


     if(this.fileType=="html" ){

      if(this.shift=="rotation"){
  
      localStorage.setItem("dgContainerShift",this.shift);
      localStorage.setItem("dgContainerRotation",this.Rotation);


       this.router.navigate([]).then(result=>window.open('/DgReport/dg-container-delivery-report-list', '_blank'));
      }

     else {
      if(this.fromDate!="" && this.toDate!=""){ 
        console.log("Shift:"+this.shift);
        console.log("formDate:"+this.fromDate);
        console.log("toDate:"+this.toDate);

        localStorage.setItem("dgContainerShift",this.shift);
        localStorage.setItem("dgContainerFromDate",this.fromDate);
        localStorage.setItem("dgContainerToDate",this.toDate);


      this.router.navigate([]).then(result=>window.open('/DgReport/dg-container-delivery-report-list', '_blank'));
      }
     }
  }



  }
  onShiftChange(value:any){
  
    if(value=="date"){
      this.isEditableDate=false;
      this.isEditable=true;
    }
    if(value=="rotation"){
      this.isEditable=false;
      this.isEditableDate=true;
    }
  }

}
