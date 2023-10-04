import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DgContainerDeliveryReportService } from '../service/DgReport/dg-container-delivery-report/dg-container-delivery-report.service';

@Component({
  selector: 'app-dg-container-delivery-report-list',
  templateUrl: './dg-container-delivery-report-list.component.html',
  styleUrls: ['./dg-container-delivery-report-list.component.css']
})
export class DgContainerDeliveryReportListComponent implements OnInit {
  searchText:any;
  shift:any;

  fromDate:any;
  Rotation:any;
  fromTime:any;
  toDate:any;
  toTime:any;
  resultList:any;
  show:Boolean=false;
  showRotation:Boolean=false;
   imRtotal:number=0;
   keepDTotal:number=0;
   dOffTotal:number=0;
   shiftTotal:number=0;
   total:number=0;

  constructor(
    private toastr:ToastrService,
    private formBuilder: FormBuilder,
    private dgContainerDeliveryReportService:DgContainerDeliveryReportService,
    private router:Router

  ) { 

  


  }

  ngOnInit(): void {

    this.shift= localStorage.getItem("dgContainerShift");
    this.Rotation= localStorage.getItem("dgContainerRotation");
    this.fromDate=localStorage.getItem("dgContainerFromDate");
    this.toDate= localStorage.getItem("dgContainerToDate");
  if(this.shift=="rotation"){
                  console.log("Shift for to day :"+this.shift);
          console.log("From Date to day :"+this.Rotation)

          this.showRotation=true;
    let response=this.dgContainerDeliveryReportService.getEquipmentHandlingPerformaceHistoryRtgList(this.shift,this.Rotation,this.fromDate,this.toDate);
          response.subscribe(
            data=>{
              console.log(data)
              this.resultList=data;
              for(let result of this.resultList){
                       
               }
              
          });      
          localStorage.removeItem('dgContainerRotation') 
    
      }
      else if(this.shift=="date"){
        this.show=true;
 let response=this.dgContainerDeliveryReportService.getEquipmentHandling(this.shift,this.Rotation,this.fromDate,this.toDate);
          response.subscribe(
            data=>{
              this.resultList=data;          
              console.log(data);
              for(let result of this.resultList){
                         
               }
          
          });
    
      }

    

  }

}
