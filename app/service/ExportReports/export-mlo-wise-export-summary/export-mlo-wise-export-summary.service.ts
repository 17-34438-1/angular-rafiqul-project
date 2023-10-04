import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workbook } from 'exceljs';

import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class ExportMloWiseExportSummaryService {
  fileName = 'MLO WISE EXPORT SUMMARY.xlsx';
  title: any = 'CHITTAGONG PORT AUTHORITY,CHITTAGONG';
  title1: any = 'MLO WISE EXPORT SUMMARY';


  header: any =  ["Sl No", "Mlo_name","Mlo", "D_20",  "D_40", "H_40", "H_45","RH_40","R_20","OT_20", "FR_20","TK_20", "FR_40", "OT_40", "MD_20","MD_40","MH_40","MH_45","MRH_40","MR_20","MOT_20","MFR_20","MTK_20","MFR_40","MOT_40","Grand_tot","Tues"]
  constructor(
    private httpClient:HttpClient
  ) { }

  
  getResultWithExcel(mlo_wise_excel: any, rotation_no: any,vname: any,voyNo:any) {
    // Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Export Summary');

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
    for (let result of mlo_wise_excel) {
      i++;


     
      let row = worksheet.addRow([i, result["mlo_name"], result["mlo"], result["d_20"],result["d_40"],result["h_40"], result["h_45"], result["rh_40"],result["r_20"], result["ot_20"], result["fr_20"],result["tk_20"],result["fr_40"], result["ot_40"],result["md_20"],result["md_40"],result["mh_40"],result["mh_45"],result["mrh_40"],result["mr_20"],result["mot_20"], result["mfr_20"],result["mtk_20"],result["mfr_40"],result["mot_40"],result["grand_tot"],result["tues"]]);
      let color = 'FF99FF99';
      row.eachCell((cell, number) => {
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      });




    }
    worksheet.getColumn(1).width = 10;
    worksheet.getColumn(2).width = 40;
    worksheet.getColumn(3).width = 20;
    worksheet.getColumn(4).width = 20;
    worksheet.getColumn(5).width = 20;
    worksheet.getColumn(6).width = 20;
    worksheet.getColumn(7).width = 18;
    worksheet.getColumn(8).width = 10;
    worksheet.getColumn(9).width = 10;
    worksheet.getColumn(10).width = 18;
    worksheet.getColumn(11).width = 10;
    worksheet.getColumn(12).width = 16;
    worksheet.getColumn(13).width = 10;
    worksheet.getColumn(14).width = 10;
    worksheet.getColumn(15).width = 10;

    worksheet.getColumn(16).width = 18;
    worksheet.getColumn(17).width = 10;
    worksheet.getColumn(18).width = 10;
    worksheet.getColumn(19).width = 18;
    worksheet.getColumn(20).width = 10;
    worksheet.getColumn(21).width = 16;
    worksheet.getColumn(22).width = 16;
    worksheet.getColumn(23).width = 10;
    worksheet.getColumn(24).width = 10;
    worksheet.getColumn(25).width = 10;
    worksheet.getColumn(26).width = 10;
    worksheet.getColumn(27).width = 10;

    // worksheet.getRow(1).outlineLevel = 200;
    // worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "left" }



    workbook.xlsx.writeBuffer().then((data: any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'MLO WISE EXPORT SUMMARY.xlsx');
    });




  }


getVoyNo(rotation:String):Observable<any>
{
return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportMloWiseSummaryVoyNo/`+rotation)
}

getvvdgkey(rotation:String):Observable<any>{
  return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportMLOWiseSummaryVvd_Gkey/`+rotation);
}

getContainerVesselInfo(rotation:String):Observable<any>{
  return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportReportMloWiseExportSummaryVesselInfo/`+rotation);
}


getContainerList(rotation:String):Observable<any>{
  return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportReportMloWiseExportSummaryList/`+rotation);
}




}
