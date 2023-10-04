import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import { Observable, retry } from 'rxjs';
import * as fs from 'file-saver';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContainerBlockReportService {


  igmMisIp : string;
  igmMisPort : string;

  // constructor(
  //   private httpClient: HttpClient
  // ) {
  //   this.laborModuleIp = environment.laborModuleIp;
  //   this.laborModulePort = environment.laborModulePort;
  //  }


  fileName = 'Export Container Block Report.xlsx';
  title: any = 'CHITTAGONG PORT AUTHORITY,CHITTAGONG';
  title1: any = 'Export Container Block Report';


  header: any = ["Sl No", "Container No.", "Type", "MLO", "Status", "Weight", "POD", "Stowage","ComingFrom", "Commodity", "Remarks.", "User Id"]
  constructor(
    private httpClient:HttpClient
  ) { 
    this.igmMisIp = environment.igmMisIp;
    this.igmMisPort = environment.igmMisPort;

  }

  getResultWithExcel(containerBlockReport: any, rotation_no: any,vname: any,voyNo:any) {
    // Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Export Container Block Report');

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


    // shiftTitle.font={ size: 16, bold: true};
    worksheet.addRow([]);

    let headerRow = worksheet.addRow(this.header);
    headerRow.font = { bold: true };

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      /*  cell.fill = {
          type: 'pattern',
          pattern: 'solid',
         fgColor: { argb: 'FFFFFF00' },
          bgColor: { argb: 'FF0000FF' }
        }*/
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    });
    // worksheet.addRows(data);

    // Add Data and Conditional Formatting
    let i = 0;
    for (let result of containerBlockReport) {
      i++;
      let row = worksheet.addRow([i, result["contNo"], result["iso"], result["mlo"], result["contStatus"], result["weight"], result["pod"], result["stowage_pos"], result["coming_from"],result[" commodity"],result[" remarks"],result["user_id"]]);
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
    worksheet.getColumn(11).width = 8;
    worksheet.getColumn(12).width = 16;
    worksheet.getColumn(13).width = 16;
    worksheet.getColumn(14).width = 10;


    worksheet.getRow(1).outlineLevel = 200;
    worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "left" }



    workbook.xlsx.writeBuffer().then((data: any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Export Container Block Report.xlsx');
    });




  }



  // getLocationList(): Observable<any> {
  //   return this.httpClient.get(this.laborModuleIp + this.laborModulePort + `/Locations/list`);
  // }


getVoyNo(rotation:String):Observable<any>
{
return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportContainerBlockReportVoyNo/`+rotation)
}

getvvdgkey(rotation:String):Observable<any>{
  return this.httpClient.get(this.igmMisIp + this.igmMisPort +`/ExportReport/ExportContainerBlockReport/`+rotation);
}

getContainerVesselInfo(rotation:String):Observable<any>{
  return this.httpClient.get(this.igmMisIp + this.igmMisPort +`/ExportReport/ExportContainerBlockReportVesselInfo/`+rotation);
}
getContainerList(rotation:String):Observable<any>{
  return this.httpClient.get(this.igmMisIp + this.igmMisPort +`/ExportReport/ExportContatinerBlockReportList/`+rotation);
}


}
