import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workbook } from 'exceljs';

import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class ExportDateAndRotationWisePreAdvisedContainerService {

 
  fileName = 'Export Report Date Wise Pre Advised Container Report.xlsx';
  title: any = 'CHITTAGONG PORT AUTHORITY,CHITTAGONG';
  title1: any = 'Date Wise Pre Advised Container Report';


  header: any =  ["Sl No", "Container No","SIZE", "Weight",  "SEAL NO", "MLO", "TYPE","COMING FROM","VESSEL NAME","ROTATION", "PREADVISED DATE", "STATUS", "PORT"]
  constructor(
    private httpClient:HttpClient
  ) { }


  getResultWithExcel(export_date_and_rotation: any, rotation_no: any) {
    // Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Export Report Date Wise Pre Advised Container Report');

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
      
      let row = worksheet.addRow([i, result["cont_id"], result["cont_size"], result["goods_and_ctr_wt_kg"],result["seal_no"], result["cont_mlo"], result["isoType"],result["offdock"],result["vsl_name"], result["rotation"], result["last_update"],result["cont_status"],result["pod"]]);
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
    

    worksheet.getRow(1).outlineLevel = 200;
    worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "left" }



    workbook.xlsx.writeBuffer().then((data: any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Export Report Date Wise Pre Advised Container Report.xlsx');
    });




  }


  
getContainerList(rotation:String,fromDate:any):Observable<any>
{
  return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportReportDateAndRotationWisePre-AdvisedContainer/`+rotation + "/"+fromDate)
}
}
