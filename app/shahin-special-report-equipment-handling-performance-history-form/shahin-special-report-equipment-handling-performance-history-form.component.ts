import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShahinSpecialReportEquipmentHandlingPerformanceService } from '../service/ShahinSpecialReport/shahin-special-report-equipment-handling-performance/shahin-special-report-equipment-handling-performance.service';

@Component({
  selector: 'app-shahin-special-report-equipment-handling-performance-history-form',
  templateUrl: './shahin-special-report-equipment-handling-performance-history-form.component.html',
  styleUrls: ['./shahin-special-report-equipment-handling-performance-history-form.component.css']
})
export class ShahinSpecialReportEquipmentHandlingPerformanceHistoryFormComponent implements OnInit {
  EquipmentHandlingPerformaceHandingForm:FormGroup;
  isEditable:Boolean=true;
  shift:any;
  fromDate:any;
  fromTime:any;
  toDate:any;
  toTime:any;
  fileType:any;
  resultList:any;

  constructor(
    private toastr:ToastrService,
    private formBuilder: FormBuilder,
    private EquipmentHandlingPerformaceService:ShahinSpecialReportEquipmentHandlingPerformanceService,
    private router:Router
  ) { 
    this.EquipmentHandlingPerformaceHandingForm=this.formBuilder.group({});
    this.shift="";
    this.fromDate="";
    this.fromTime="";
    this.toDate="";
    this.toTime="";  
  }

  ngOnInit(): void {
  }


  onSubmit(event:any){


    this.shift=event.shift.value;
    this.fromDate=event.fromDate.value;
    this.fromTime=event.fromTime.value;
    this.toDate=event.toDate.value;
    this.toTime=event.toTime.value;
    this.fileType=event.fileType.value;
   if(this.fileType=="xl" && this.shift!="" && this.fromDate!=""){
      if(this.shift=="Day" || this.shift=="Night"){
      let response=this.EquipmentHandlingPerformaceService.getEquipmentHandlingPerformaceHistoryRtgList(this.shift,this.fromDate,this.fromTime,this.toDate,this.toTime);
      response.subscribe(data=>{
        this.EquipmentHandlingPerformaceService.getResultWithExcel(data,this.shift,this.fromDate,this.toDate);
      });
    }
    else{
      if(this.fromTime!="" && this.toDate!="" && this.toTime!=""){
        let response=this.EquipmentHandlingPerformaceService.getEquipmentHandlingPerformaceHistoryRtgList(this.shift,this.fromDate,this.fromTime,this.toDate,this.toTime);
        response.subscribe(data=>{
          this.EquipmentHandlingPerformaceService.getResultWithExcel(data,this.shift,this.fromDate,this.toDate);
        });

      }
    }

  }



    else if(this.fileType=="html" &&  this.shift!="" && this.fromDate!=""){
      console.log("Shift:"+this.shift);
      console.log("FromDate:"+this.fromDate);
      if(this.shift=="Day" || this.shift=="Night"){
       this.fromTime="00:00";
        this.toDate="00-00-00"
       this.toTime="00:00"
       localStorage.setItem("equipmentHandlingPerformanceShift",this.shift);
       localStorage.setItem("equipmentHandlingPerformanceFromDate",this.fromDate);
       this.router.navigate([]).then(result=>window.open('shahinSpecialReport/equipment-handling-performance-history-list', '_blank'));
   }
     else {
      if(this.fromTime!="" && this.toDate!="" && this.toTime!=""){ 
      localStorage.setItem("equipmentHandlingPerformanceShift",this.shift);
      localStorage.setItem("equipmentHandlingPerformanceFromDate",this.fromDate);
      localStorage.setItem("equipmentHandlingPerformanceFromTime",this.fromTime);
      localStorage.setItem("equipmentHandlingPerformanceToDate",this.toDate);
      localStorage.setItem("equipmentHandlingPerformanceToTime",this.toTime);
      this.router.navigate([]).then(result=>window.open('shahinSpecialReport/equipment-handling-performance-history-list', '_blank'));
      }
     }
  }



  }
  onShiftChange(value:any){
    if(value=="timewise"){
      this.isEditable=false;
    }
    else{
      this.isEditable=true;
    }
  }

}
