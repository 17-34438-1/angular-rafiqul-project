import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workbook } from 'exceljs';

import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ShahinSpecialReportLoadedContainerService {
  fileName = 'Export Loaded  Container Report.xlsx';
  title: any = 'CHITTAGONG PORT AUTHORITY,CHITTAGONG';
  title1: any = 'Export Loaded Container Report';
  title2: any = 'Export Summery Report';
  title3:any='TOTAL ONBOARD';
  titl3:any='BALANCE TO LOAD';
  title4: any = 'LADEN';
  title5: any = 'EMPTY';
  title6: any = 'TUES';
  titl4: any = 'LADEN';
  titl5: any = 'EMPTY';
  titl6: any = 'TUES';
  header: any =  ["Sl No", "Container No","ISO Type", "Type","MLO",  "Status","Weight","Pod","Stowage", "Loaded Time","Coming From","Commodity","User Id"]

  header1: any =  ["20", "40","20", "40",  "LD", "MT","20", "40","20", "40",  "LD", "MT"]

  constructor(
    private httpClient:HttpClient
  ) { }

  // ContainerBalanceList: any,  
  getResultWithExcel(rotation_no: any,export_date_and_rotation: any,containerOnboardInfo:any,dischargeContianerSummary:any) {
    // Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Excel Uploaded Sample');

    //Add Row and formatting
    let titleRow = worksheet.addRow(["", "", this.title]);
    titleRow.alignment = { vertical: 'top', horizontal: 'left' };
    titleRow.font = { size: 16, bold: true };
    let titleRowOne = worksheet.addRow(["", "", this.title1]);
    titleRowOne.alignment = { vertical: 'top', horizontal: 'left' };
    titleRowOne.font = { size: 16, bold: true };
    let RotationTitle = worksheet.addRow(["", "", "Rotation:", rotation_no]);
    RotationTitle.alignment = { vertical: 'top', horizontal: 'left' };
    RotationTitle.font = { size: 16, bold: true };


  
    worksheet.addRow([]);

    let headerRow = worksheet.addRow(this.header);
    headerRow.font = { bold: true };

   
    headerRow.eachCell((cell, number) => {
  
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    });
  
    worksheet.addRow([]);


     let i = 0;
    for (let result of export_date_and_rotation) {
      i++;
      let row = worksheet.addRow([i, result["id"],result["iso"], result["type"],result["mlo"],result["freight_kind"], result["weight"],result["pod"], result["stowage_pos"], result["last_update"],result["coming_from"],result["short_name"], result["user_id"]]);
      let color = 'FF99FF99';
      row.eachCell((cell, number) => {
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      });
    }
    
    worksheet.getColumn(1).width = 10;
    worksheet.getColumn(2).width = 20;
    worksheet.getColumn(3).width = 18;
    worksheet.getColumn(4).width = 17;
    worksheet.getColumn(5).width = 19;
    worksheet.getColumn(6).width = 20;
    worksheet.getColumn(7).width = 23;
    worksheet.getColumn(8).width = 18;
    worksheet.getColumn(9).width = 19;
    worksheet.getColumn(10).width = 20;
    worksheet.getColumn(11).width = 18;
    worksheet.getColumn(12).width = 18;
    worksheet.getColumn(13).width = 18;

    worksheet.getRow(1).outlineLevel = 200;
    worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "left" }
    worksheet.addRow([]);
    worksheet.addRow([]);
    worksheet.addRow([]);
    let titleRowTow = worksheet.addRow(["","",this.title2]);
    titleRowTow.alignment = { vertical: 'top', horizontal: 'left' };
    titleRowTow.font = { size: 16, bold: true };

    worksheet.addRow([]);
    worksheet.addRow([]);

    let titleRowThree = worksheet.addRow(["","",this.title3,"","","","",this.titl3,"",""]);
    titleRowThree.alignment = { vertical: 'top', horizontal: 'left' };
    titleRowThree.font = { size: 16, bold: true };

    let titleRowFour = worksheet.addRow([this.title4,"",this.title5,"",this.title6,"",this.titl4,"",this.titl5,"",this.titl6,""]);
    titleRowFour.alignment = { vertical: 'top', horizontal: 'left' };
    titleRowFour.font = { size: 16, bold: true };

    let headerRow1 = worksheet.addRow(this.header1);
    headerRow1.font = { bold: true };

   
    headerRow1.eachCell((cell, number) => {
  
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    });

    for (let result of containerOnboardInfo) {  

      let row = worksheet.addRow([result["onboard_LD_20"], result["onboard_LD_40"],result["onboard_MT_20"], result["onboard_MT_40"],result["onboard_LD_tues"], result["onboard_MT_tues"], result["balance_LD_20"],result["balance_LD_40"],result["balance_MT_20"], result["balance_MT_40"], result["balance_LD_tues"],result["balance_MT_tues"]]);
      let color = 'FF99FF99';
      row.eachCell((cell, number) => {
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      });
    }

    worksheet.getColumn(1).width = 10;
    worksheet.getColumn(2).width = 20;
    worksheet.getColumn(3).width = 30;
    worksheet.getColumn(4).width = 17;
    worksheet.getColumn(5).width = 19;
    worksheet.getColumn(6).width = 20;
    worksheet.getColumn(7).width = 18;
    worksheet.getColumn(8).width = 25;
    worksheet.getColumn(9).width = 19;
    worksheet.getColumn(10).width = 20;
    worksheet.getColumn(11).width = 18;
    worksheet.getColumn(12).width = 18;

    worksheet.getRow(1).outlineLevel = 200;
    worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "left" }

    workbook.xlsx.writeBuffer().then((data: any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Export Loaded  Container Report.xlsx');
    });
  }

  getLoadedContainerVesselInfo(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/ShahinSpecialReport/ShahinLoadedContainerVesselInfo/`+rotation);
  }

  getLoadedContaineVoyNo(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/ShahinSpecialReport/ShahinLoadedContainerVoyNo/`+rotation);
  }

 getLoadedContainerReport(rotation_no:String,fromDate:any,toDate:any,fromTime:any,toTime:any):Observable<any>{

    return this.httpClient.get(`http://192.168.16.188:8081/ShahinSpecialReport/ShahinReportLoadedContainer/`+rotation_no+"/"+fromDate+"/"+toDate+"/"+fromTime+"/"+toTime);
  }

  getLoadedContainerOnboardList(rotation_no:String,fromDate:any,toDate:any,fromTime:any,toTime:any):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/ShahinSpecialReport/ShahinReportLoadedContainerSummeryOnboardReport/`+rotation_no+"/"+fromDate+"/"+toDate+"/"+fromTime+"/"+toTime);
  }
  getLoadedContainerBalanceList(rotation_no:String,fromDate:any,toDate:any,fromTime:any,toTime:any):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/ShahinSpecialReport/ShahinReportLoadedContainerSummeryBalanceReportList/`+rotation_no+"/"+fromDate+"/"+toDate+"/"+fromTime+"/"+toTime);
 
  }
}
