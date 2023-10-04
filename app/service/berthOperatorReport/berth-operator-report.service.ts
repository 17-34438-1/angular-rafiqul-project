import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Workbook } from 'exceljs';
import * as fs  from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class BerthOperatorReportService {

  fileName= 'ExcelSheet.xlsx';
  title:any = 'BERTH OPERATOR REPORT';
  header:any = ["Serial No","MLO Code", "Shipping Agent", "Line No", "Container Number", "UN NO", "IMDG CODE", "Pack Name & Quantity", "Container Description", "Container Type", "TARE WEIGHT", "Gross Weight", "Container Seal Number", "Pack Marks Number", "Depu Code", "Description Of Good", "Commodity List", "Navy Comments", "Date of Comments", "SL"];

  constructor(private httpClient: HttpClient) { }

  mloCodeByRotation(rotation: any): Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/mloCodeByRotation/`+ rotation);
  }

  vslName(rotation: any): Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8081/vslName/`+ rotation);
  }

  getBerthOptReport(formData: any): Observable<any> {
    return this.httpClient.post(`http://192.168.16.188:8081/getBerthOptReport`, formData);
  }

  getResultWithExcel(resultList:any,vslName:any,imp_rot:any){

    console.log("******************************");
    console.log("resultList");
    console.log(resultList);
    console.log("vslName");
    console.log(vslName);
    console.log("imp_rot");
    console.log(imp_rot);
    // Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('BERTH OPERATOR REPORT');

     //Add Row and formatting
    let titleRow = worksheet.addRow(["","",this.title]);
    titleRow.alignment={ vertical: 'top', horizontal: 'left'};
    titleRow.font = {  size: 16, underline: 'double', bold: true };
    let vsl=worksheet.addRow(["","Vessel Name : ",vslName[0]]);
    vsl.font={ size: 12, bold: false};
    let rot=worksheet.addRow(["","Import Rotation No : ",imp_rot]);
    rot.font={ size: 12, bold: false};
    worksheet.addRow([]);

    let headerRow = worksheet.addRow(this.header);
    headerRow.font={bold:true};

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
    
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    });
    // worksheet.addRows(data);

    // Add Data and Conditional Formatting
     let i=0;
     for(let result of resultList){
      i++;
      console.log(result["logDate"]);
   
        // let row = worksheet.addRow([i,result["logDate"],result["logType"],result["logBy"],result["logEquip"],result["program"]]);
        let row = worksheet.addRow([result["serial_No"],result["mlocode"],result["organization_Name"],result["line_No"],result["cont_number"],result["un"],result["imco"],result["pack_Description"]+result["pack_Number"], result["cont_size"]+result["cont_status"]+result["cont_height"], result["cont_type"],result["cont_weight"],result["cont_gross_weight"],result["cont_seal_number"],result["pack_Marks_Number"],result["depu"],result["dg"],result["commudity_desc"],,,i]);
        let color = 'FF99FF99';
        row.eachCell((cell,number)=>{
         cell.border={ top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
       });
    }

    worksheet.getColumn(1).width = 10;
    worksheet.getColumn(2).width = 10;
    worksheet.getColumn(3).width = 40;
    worksheet.getColumn(4).width = 10;
    worksheet.getColumn(5).width = 20;
    worksheet.getColumn(6).width = 10;
    worksheet.getColumn(7).width = 10;
    worksheet.getColumn(8).width = 40;
    worksheet.getColumn(9).width = 30;
    worksheet.getColumn(10).width = 30;
    worksheet.getColumn(11).width = 30;
    worksheet.getColumn(12).width = 30;
    worksheet.getColumn(13).width = 30;

    worksheet.getColumn(14).width = 50;
    // worksheet.getColumn(14).height = 50;
    worksheet.getColumn(14).alignment = { wrapText: true };  
    
    worksheet.getColumn(15).width = 30;

    worksheet.getColumn(16).width = 60;
    worksheet.getColumn(16).alignment = { wrapText: true };  

    worksheet.getColumn(17).width = 20;
    worksheet.getColumn(18).width = 20;
    worksheet.getColumn(19).width = 20;
    worksheet.getColumn(20).width = 10;
   
   // worksheet.getRow(1).outlineLevel=200;
    //worksheet.getRow(1).alignment={ vertical:"middle",horizontal:"left" }



   workbook.xlsx.writeBuffer().then((data:any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'BERTHOPERATORREPORT.xlsx');
    });
  



 }

 
}
