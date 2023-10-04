import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workbook } from 'exceljs';

import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExportRotationWiseExportContainerService {

  fileName = 'Rotation Wise Export Container.excel';
  title: any = 'CHITTAGONG PORT AUTHORITY,CHITTAGONG';



  header: any =  ["Sl No", "Import Rotation","Vessel Name",  "Phase","ATA", "ATD", "Berth Operator", "Total Unit"]
  
  constructor(
    private httpClient:HttpClient
  )
   { }
   


   getResultWithExcel(export_date_and_rotation: any, fromDate: any,toDate:any) {
    // Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Rotation Wise Export Container');

    //Add Row and formatting
    let titleRow = worksheet.addRow(["", "", this.title]);
    titleRow.alignment = { vertical: 'top', horizontal: 'left' };
    titleRow.font = { size: 16, bold: true };
    let titleRowOne = worksheet.addRow(["", "", ]);
    titleRowOne.alignment = { vertical: 'top', horizontal: 'left' };
    titleRowOne.font = { size: 16, bold: true };
    let fromdate = worksheet.addRow(["", "", "FromDate:", fromDate]);
    fromdate.alignment = { vertical: 'top', horizontal: 'left' };
    fromdate.font = { size: 16, bold: true };

    let todate = worksheet.addRow(["", "", "ToDate:", toDate]);
    todate.alignment = { vertical: 'top', horizontal: 'left' };
    todate.font = { size: 16, bold: true };


  
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

      
      let row = worksheet.addRow([i, result["vsl_visit_dtls_ib_vyg"], result["v_name"],result["phase"],result["ata"],result["atd"], result["bop"], result["exp_cont"]]);
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
   
    

    worksheet.getRow(1).outlineLevel = 200;
    worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "left" }



    workbook.xlsx.writeBuffer().then((data: any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Rotation Wise Export Container.xlsx');
    });




  }

     
  getExportRotationWiseExportContainer(fromDate:any,toDate:any):Observable<any>
{

   return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportRotationWiseExportContainerReport/`+fromDate + "/"+toDate);


}
}
