import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportEquipmentHandlingPerformanceRtgService } from '../service/ExportReports/export-equipment-handling-performance-rtg/export-equipment-handling-performance-rtg.service';

@Component({
  selector: 'app-export-equipment-handling-performance-rtg-list',
  templateUrl: './export-equipment-handling-performance-rtg-list.component.html',
  styleUrls: ['./export-equipment-handling-performance-rtg-list.component.css']
})
export class ExportEquipmentHandlingPerformanceRtgListComponent implements OnInit {
  searchText:any;
  shift:any;
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
    private operatorRtgHandlingPerformaceService:ExportEquipmentHandlingPerformanceRtgService,
    private router:Router
  ) { 
    this.shift= localStorage.getItem("equipmentPerformanceShift");
    this.fromDate=localStorage.getItem("equipmentPerformanceFromDate");
    this.fromTime=localStorage.getItem("equipmentPerformanceFromTime");
    this.toDate=localStorage.getItem("equipmentPerformanceToDate");
    this.toTime=localStorage.getItem("equipmentPerformanceToTime");
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

    if( this.shift!="" && this.fromDate!=""){
      if(this.shift=="Day" || this.shift=="Night"){
                  console.log("Shift for to day :"+this.shift);
          console.log("From Date to day :"+this.fromDate)
          let response=this.operatorRtgHandlingPerformaceService.getEquipmentHandlingPerformaceHistoryRtgList(this.shift,this.fromDate,this.fromTime,this.toDate,this.toTime);
          response.subscribe(
            data=>{
              console.log(data)
              this.resultList=data;
              for(let result of this.resultList){
                this.imRtotal=this.imRtotal+result["expRcv"];
                this.keepDTotal=this.keepDTotal+result["yardMove"];
                this.dOffTotal=this.dOffTotal+result["expShift"];            
               }
               this.total=this.imRtotal+this.keepDTotal+this.dOffTotal;
          });      

    
      }
      else{
        if(this.fromTime!="" && this.toDate!="" && this.toTime!=""){
          this.show=true;  
         let response=this.operatorRtgHandlingPerformaceService.getEquipmentHandlingPerformaceHistoryRtgList(this.shift,this.fromDate,this.fromTime,this.toDate,this.toTime);
          response.subscribe(
            data=>{
              this.resultList=data;          
              console.log(data);
              for(let result of this.resultList){
                this.imRtotal=this.imRtotal+result["expRcv"];
                this.keepDTotal=this.keepDTotal+result["yardMove"];
                this.dOffTotal=this.dOffTotal+result["expShift"];                
               }
               this.total=this.imRtotal+this.keepDTotal+this.dOffTotal;
          });
         }

      }

    }
  }
  
  
}
