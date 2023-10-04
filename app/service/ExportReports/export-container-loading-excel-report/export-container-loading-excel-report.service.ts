import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workbook } from 'exceljs';

import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class ExportContainerLoadingExcelReportService {


  fileName = 'Export Container Loading Excel Report.xlsx';
  title: any = 'CHITTAGONG PORT AUTHORITY,CHITTAGONG';
  title1: any = 'Export Container Loading Excel Report';
  header: any = ["MLO", "2D", " 4D", " 4H", "45H", " 4RH", " 2RF", " 2OT", " 2FR", " 2TK", " 4FR", " 4OT", "2D", "4D", "4H", "45H", "4RH", "2RF", "2OT", "2FR", "2TK", " 4FR", "4OT", "Grand_tot", "Tues", "Weight"]
  constructor(private httpClient: HttpClient) { }

  getResultWithExcel(export_date_and_rotation: any, rotation_no: any) {
    // Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Export Container Loading Excel Report');

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
      let row = worksheet.addRow([result["mlo"], result["d_20"], result["d_40"], result["h_40"], result["h_45"], result["rh_40"], result["r_20"], result["ot_20"], result["fr_20"], result["tk_20"], result["ot_40"], result["fr_40"], result["md_20"], result["md_40"], result["mh_40"], result["mh_45"], result["mrh_40"], result["mr_20"], result["mot_20"], result["mfr_20"], result["mtk_20"], result["mfr_40"], result["mot_40"], result["grand_tot"], result["tues"], result["weight"]]);
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
      fs.saveAs(blob, 'Export Container Loading Excel Report.xlsx');
    });
  }

  getContainerLoadingVesselInfo(rotation: String): Observable<any> {
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportContainerLodingVesselInfo/` + rotation);
  }

  getContainerLoadingVoyNo(rotation: String): Observable<any> {
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportContainerLoadingVoyNo/` + rotation);
  }
  getContainerLoadingList(rotation: String): Observable<any> {
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportLoadedContainerListLoadandEmptyInfo/` + rotation);
  }
  getContainerLoadingExcelReport(rotation_no: String, fromDate: any, toDate: any, fromTime: any, toTime: any): Observable<any> {
  
    console.log(`http://192.168.16.188:8093/ExportReport/ExportReportContainerLoading/` + rotation_no + "/" + fromDate + "/" + toDate + "/" + fromTime + "/" + toTime);
  
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportReportContainerLoading/` + rotation_no + "/" + fromDate + "/" + toDate + "/" + fromTime + "/" + toTime);
  }
}
