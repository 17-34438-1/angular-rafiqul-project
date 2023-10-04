import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShahinSpecialReportEquipmentHandlingPerformanceService } from '../service/ShahinSpecialReport/shahin-special-report-equipment-handling-performance/shahin-special-report-equipment-handling-performance.service';

@Component({
  selector: 'app-shahin-special-report-equipment-handling-performance-history-list',
  templateUrl: './shahin-special-report-equipment-handling-performance-history-list.component.html',
  styleUrls: ['./shahin-special-report-equipment-handling-performance-history-list.component.css']
})
export class ShahinSpecialReportEquipmentHandlingPerformanceHistoryListComponent implements OnInit {
  searchText:any;
  shift:any;
  shiftresult:any;
  fromDate:any;
  fromTime:any;
  toDate:any;
  toTime:any;
  resultList:any;
  show:Boolean=false;
   imRtotal:number=0;
   keepDTotal:number=0;
   dOffTotal:number=0;
   shiftTotal:number=0;
   total:number=0;
  constructor(
    private toastr:ToastrService,
    private formBuilder: FormBuilder,
    private EquipmentHandlingPerformaceService:ShahinSpecialReportEquipmentHandlingPerformanceService,
    private router:Router

  ) { 
    this.shift= localStorage.getItem("equipmentHandlingPerformanceShift");
    this.fromDate=localStorage.getItem("equipmentHandlingPerformanceFromDate");
    this.fromTime=localStorage.getItem("equipmentHandlingPerformanceFromTime");
    this.toDate=localStorage.getItem("equipmentHandlingPerformanceToDate");
    this.toTime=localStorage.getItem("equipmentHandlingPerformanceToTime");
  }

  ngOnInit(): void {

    if( this.shift!="" && this.fromDate!=""){
      if(this.shift=="Day" || this.shift=="Night"){
                  console.log("Shift for to day :"+this.shift);
          console.log("From Date to day :"+this.fromDate)
          let response=this.EquipmentHandlingPerformaceService.getEquipmentHandlingPerformaceHistoryRtgList(this.shift,this.fromDate,this.fromTime,this.toDate,this.toTime);
          response.subscribe(
            data=>{
              console.log(data)
              this.resultList=data;
              for(let result of this.resultList){
                this.imRtotal=this.imRtotal+result["impRcv"];
                this.keepDTotal=this.keepDTotal+result["keepDlv"];
                this.dOffTotal=this.dOffTotal+result["dlvOcdOffDock"]; 
                this.shiftTotal=this.shiftTotal+result["shift"];           
               }
               this.total=this.imRtotal+this.keepDTotal+this.dOffTotal+this.shiftTotal;
          });      

    
      }
      else{
        if(this.fromTime!="" && this.toDate!="" && this.toTime!=""){
          this.show=true;  
         let response=this.EquipmentHandlingPerformaceService.getEquipmentHandlingPerformaceHistoryRtgList(this.shift,this.fromDate,this.fromTime,this.toDate,this.toTime);
          response.subscribe(
            data=>{
              this.resultList=data;          
              console.log(data);
              for(let result of this.resultList){
                this.imRtotal=this.imRtotal+result["impRcv"];
                this.keepDTotal=this.keepDTotal+result["keepDlv"];
                this.dOffTotal=this.dOffTotal+result["dlvOcdOffDock"]; 
                this.shiftTotal=this.shiftTotal+result["shift"];                
               }
               this.total=this.imRtotal+this.keepDTotal+this.dOffTotal+this.shiftTotal;
          });
         }

      }

    }

  }

}
