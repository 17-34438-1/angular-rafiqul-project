import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workbook } from 'exceljs';

import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class ExportExcelUploadSampleService {

  fileName = 'Excel Uploaded Sample.xlsx';
  title: any = 'CHITTAGONG PORT AUTHORITY,CHITTAGONG';
  title1: any = 'Excel Uploaded Sample';


  header: any =  ["Sl No", "Id","Iso", "Size",  "Height", "Mlo", "Freight_kind","Weight","Pod","Stowage_pos", "Last_update","Seal_no", "Coming_from", "Truck_no", "Craine_id","User Id"]
  constructor(
    private httpClient:HttpClient
  ) { }




  
  getResultWithExcel(mlo_wise_excel_uploaded: any, rotation_no: any,vname: any,voyNo:any) {
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
    let RotationTitle = worksheet.addRow(["", "", "Rotation:", rotation_no, "Vessel Name:", vname,"VoyNo:",voyNo]);
    RotationTitle.alignment = { vertical: 'top', horizontal: 'left' };
    RotationTitle.font = { size: 16, bold: true };


  
    worksheet.addRow([]);

    let headerRow = worksheet.addRow(this.header);
    headerRow.font = { bold: true };

   
    headerRow.eachCell((cell, number) => {
  
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    });


 
     let i = 0;
    for (let result of mlo_wise_excel_uploaded) {
      i++;
      let row = worksheet.addRow([i, result["id"], result["iso"], result["size"],result["height"], result["mlo"], result["freight_kind"],result["weight"], result["pod"], result["stowage_pos"],result["last_update"],result["seal_no"], result["coming_from"],result[" truck_no"],result[" craine_id"],result["user_id"]]);
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
    worksheet.getColumn(10).width = 18;
    worksheet.getColumn(11).width = 18;
    worksheet.getColumn(12).width = 16;
    worksheet.getColumn(13).width = 16;
    worksheet.getColumn(14).width = 10;
    worksheet.getColumn(15).width = 10;


    worksheet.getRow(1).outlineLevel = 200;
    worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "left" }



    workbook.xlsx.writeBuffer().then((data: any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Excel Uploaded Sample.xlsx');
    });




  }


  
  getVoyNo(rotation:String):Observable<any>
  {
  return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/ExportMloWiseExcelUploadedReportVoyNo/`+rotation)
  }


  getvvdgkey(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/ExportMLOExcelUploadedReport/`+rotation);
  }
  
  getContainerVesselInfo(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/ExportMLOExcelUploadedReportVesselInformation/`+rotation);
  }
  getContainerList(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.243:8093/ExportReport/ExportMloWiseExcelUploadedReportSummary/`+rotation);
  }
}
