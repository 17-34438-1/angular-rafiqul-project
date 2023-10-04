import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workbook } from 'exceljs';

import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class ExportContainerToBeLoadedService {
  fileName = 'Export Container Balance To Be Loaded Report.xlsx';
  title: any = 'CHITTAGONG PORT AUTHORITY,CHITTAGONG';
  title1: any = 'Export Container Balance To Be Loaded Report';
  title2: any = 'Export Container Balance To Be Loaded Summary Report';
  title3:any='BALANCE TO LOAD';
  title4: any = 'LADEN';
  title5: any = 'EMPTY';
  title6: any = 'TUES';

  header: any =  ["Sl No", "Container No","Type", "MLO",  "Status", "Weight","Pod","Stowage", "Short Name"]

  header1: any =  ["20", "40","20", "40",  "LD", "MT"]

  constructor(
    private httpClient:HttpClient
  ) { }
  
  getResultWithExcel(mlo_wise_excel_uploaded: any,ContainerBalanceList:any,rotation_no: any,vname: any,voyNo:any) {
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
  
    worksheet.addRow([]);

    // worksheet.addRows(data);

    // Add Data and Conditional Formatting


     let i = 0;
    for (let result of mlo_wise_excel_uploaded) {
      i++;
      let row = worksheet.addRow([i, result["id"], result["iso"],result["mlo"], result["freight_kind"],result["weight"], result["pod"], result["fcy_last_pos_slot"],result["short_name"]]);
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

    let titleRowThree = worksheet.addRow(["","",this.title3,"",""]);
    titleRowThree.alignment = { vertical: 'top', horizontal: 'left' };
    titleRowThree.font = { size: 16, bold: true };

    let titleRowFour = worksheet.addRow([this.title4,"",this.title5,"",this.title6,""]);
    titleRowFour.alignment = { vertical: 'top', horizontal: 'left' };
    titleRowFour.font = { size: 16, bold: true };

    let headerRow1 = worksheet.addRow(this.header1);
    headerRow1.font = { bold: true };

    let j = 0;
    for (let result of ContainerBalanceList) {
      j++;
 
      let row = worksheet.addRow([result["balance_LD_20"], result["balance_LD_40"],result["balance_MT_20"], result["balance_MT_40"],result["balance_LD_tues"], result["balance_MT_tues"]]);
      let color = 'FF99FF99';
      row.eachCell((cell, number) => {
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      });
    }

   
    headerRow1.eachCell((cell, number) => {
  
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    });
    worksheet.addRow([]);

    worksheet.getColumn(1).width = 20;
    worksheet.getColumn(2).width = 20;
    worksheet.getColumn(3).width = 30;
    worksheet.getColumn(4).width = 17;
    worksheet.getColumn(5).width = 19;
    worksheet.getColumn(6).width = 20;


    worksheet.getRow(1).outlineLevel = 200;
    worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "left" }

    workbook.xlsx.writeBuffer().then((data: any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Export Container Balance To Be Loaded Report.xlsx');
    });
  }
  
  getVoyNo(rotation:String):Observable<any>
  {
  return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportContainerToBeLoadingVoyNo/`+rotation)
  }
  getvvdgkey(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportContainerToBeLoadedVvd_Gkey/`+rotation);
  }
  
  getContainerVesselInfo(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportContainerToBeLodingVesselInfo/`+rotation);
  }
  getContainerList(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportContainerToBeLoadedInformation/`+rotation);
  }
  getLoadedContainerBalanceList(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportContainerToBeLoadedBalanceList/`+rotation);
  }
  
}
