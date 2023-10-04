import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workbook } from 'exceljs';

import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExportContainerNotFoundReportService {

  fileName = 'Export Container Not Found Report.xlsx';
  title: any = 'CHITTAGONG PORT AUTHORITY,CHITTAGONG';
  title1: any = 'Export Container Not Found Report';


  header: any =  ["Sl No", "Container No","Rotation No.", "Type",  "MLO", "Status", "Weight","Yard","Current Position","Discharge date", "Assignment date", "POD", "Stowage","Coming From","Commodity","Remarks","User Id"]
  constructor(
    private httpClient:HttpClient
  ) { }



  getResultWithExcel(export_date_and_rotation: any, rotation_no: any) {
    // Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Export Container Not Found Report');

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
    // worksheet.addRows(data);

    // Add Data and Conditional Formatting
    let i = 0;
    for (let result of export_date_and_rotation) {
      i++;
      



      let row = worksheet.addRow([i, result["id"], result["rot"], result["iso"],result["mlo"], result["freight_kind"], result["weight"],result["yard"],result["last_pos_slot"], result["fcy_time_in"], result["assignmentdate"],result["pod"],result["stowage_pos"],result[""],result["short_name"],result[""],result["user_id"]]);
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
    worksheet.getColumn(7).width = 18;
    worksheet.getColumn(8).width = 18;
    worksheet.getColumn(9).width = 25;
    worksheet.getColumn(10).width = 25;
    worksheet.getColumn(11).width = 25;
    worksheet.getColumn(12).width = 16;
    worksheet.getColumn(13).width = 25;
    worksheet.getColumn(14).width = 25;
    worksheet.getColumn(15).width = 100;
    worksheet.getColumn(16).width = 16;
    worksheet.getColumn(17).width = 16;

    worksheet.getRow(1).outlineLevel = 200;
    worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "left" }



    workbook.xlsx.writeBuffer().then((data: any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'ExportContainerNotFoundReport.xlsx');
    });




  }


  getContainerVessel(rotation:String):Observable<any>
  {
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportContainerNotFoundVessleInformation/`+rotation)
  }

  getContainerNotFoundList(rotation:String,fromDate:any,toDate:any):Observable<any>
  {
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportContainerNotFoundReport/`+rotation + "/"+fromDate + "/" +toDate)
    console.log(this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportContainerNotFoundReport/`+rotation + "/"+fromDate + "/" +toDate))
  }

}

