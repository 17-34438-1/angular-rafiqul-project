import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NotifierService } from 'angular-notifier';

import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { BerthOperatorReportService } from '../service/berthOperatorReport/berth-operator-report.service';

@Component({
  selector: 'app-berth-operator-report-view',
  templateUrl: './berth-operator-report-view.component.html',
  styleUrls: ['./berth-operator-report-view.component.css']
})
export class BerthOperatorReportViewComponent implements OnInit {  

  import_Rotation_No: any;
  mlo_code: any;
  status: any;
  format: any;

  vslName: string;

  bOptRpt : any[];

  constructor(
    private router: Router,
    // private notifierService: NotifierService,
    private berthOprRptService : BerthOperatorReportService
    ) 
    { 
  

    this.vslName = "";

    this.bOptRpt = [];
  }

  ngOnInit(): void {


    this.import_Rotation_No = localStorage.getItem('Import_Rotation_No');
    this.mlo_code = localStorage.getItem('mlo_code');
    this.status = localStorage.getItem('status');
    this.format = localStorage.getItem('format');

    console.log("# import_Rotation_No : "+this.import_Rotation_No);
    console.log("# mlocode : "+this.mlo_code);
    console.log("# CStatus : "+this.status);
    console.log("# format : "+this.format);

    let formData = {
      import_Rotation_No: this.import_Rotation_No,
      mlocode: this.mlo_code,
      cstatus: this.status
    }
    
    console.log("formData");
    console.log(formData);

    // vsl name
    console.log("vslName : "+this.import_Rotation_No);
    var reqRot = this.import_Rotation_No.replace("/","_");
    console.log("reqRot : "+reqRot);
    
    this.berthOprRptService.vslName(reqRot).subscribe(data => {
      console.log("vslName");
      console.log(data);
      this.vslName = data;
      console.log(this.vslName);
    }, err => {
      console.log('vsl name error');
      // this.notifierService.notify('error', 'vsl name error');
    });
    // vsl name

    this.berthOprRptService.getBerthOptReport(formData).subscribe(data => {
      console.log("--------------");
      console.log(data);
      this.bOptRpt=data;
      console.log("--------------");
      
      // this.notifierService.notify('success', 'Berth Operator Report Found');
      
      return;
    }, err => {      
      console.log(err);
      // this.notifierService.notify('error', err.error.message);
    });

    localStorage.setItem("Import_Rotation_No","");
    localStorage.setItem("mlo_code","");
    localStorage.setItem("status","");     // both, fcl, lcl
    localStorage.setItem("format","");     // html, excel
  }

}
