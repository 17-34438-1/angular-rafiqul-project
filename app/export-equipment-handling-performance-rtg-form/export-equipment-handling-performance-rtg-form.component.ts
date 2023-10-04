import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportEquipmentHandlingPerformanceRtgService } from '../service/ExportReports/export-equipment-handling-performance-rtg/export-equipment-handling-performance-rtg.service';

@Component({
  selector: 'app-export-equipment-handling-performance-rtg-form',
  templateUrl: './export-equipment-handling-performance-rtg-form.component.html',
  styleUrls: ['./export-equipment-handling-performance-rtg-form.component.css']
})
export class ExportEquipmentHandlingPerformanceRtgFormComponent implements OnInit {
  operatorRtgPerformaceHandingForm:FormGroup;
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
    private operatorRtgHandlingPerformaceService:ExportEquipmentHandlingPerformanceRtgService,
    private router:Router
  ) { 
    this.operatorRtgPerformaceHandingForm=this.formBuilder.group({});
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
      let response=this.operatorRtgHandlingPerformaceService.getEquipmentHandlingPerformaceHistoryRtgList(this.shift,this.fromDate,this.fromTime,this.toDate,this.toTime);
      response.subscribe(data=>{
        this.operatorRtgHandlingPerformaceService.getResultWithExcel(data,this.shift,this.fromDate,this.toDate);
      });
    }
    else{
      if(this.fromTime!="" && this.toDate!="" && this.toTime!=""){
        let response=this.operatorRtgHandlingPerformaceService.getEquipmentHandlingPerformaceHistoryRtgList(this.shift,this.fromDate,this.fromTime,this.toDate,this.toTime);
        response.subscribe(data=>{
          this.operatorRtgHandlingPerformaceService.getResultWithExcel(data,this.shift,this.fromDate,this.toDate);
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
       localStorage.setItem("equipmentPerformanceShift",this.shift);
       localStorage.setItem("equipmentPerformanceFromDate",this.fromDate);
       this.router.navigate([]).then(result=>window.open('exportReports/export-equipment-handling-performance-rtg/list', '_blank'));
   }
     else {
      if(this.fromTime!="" && this.toDate!="" && this.toTime!=""){ 
      localStorage.setItem("equipmentPerformanceShift",this.shift);
      localStorage.setItem("equipmentPerformanceFromDate",this.fromDate);
      localStorage.setItem("equipmentPerformanceFromTime",this.fromTime);
      localStorage.setItem("equipmentPerformanceToDate",this.toDate);
      localStorage.setItem("equipmentPerformanceToTime",this.toTime);
      this.router.navigate([]).then(result=>window.open('exportReports/export-equipment-handling-performance-rtg/list', '_blank'));
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
