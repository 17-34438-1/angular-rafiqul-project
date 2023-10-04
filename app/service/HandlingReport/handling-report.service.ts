
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Workbook } from 'exceljs';

import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class HandlingReportService {


  constructor( 
      private httpClient: HttpClient
    ) { }


    fileName = 'Handling Report.xlsx';
    title: any = '24 HRS. CONTAINER HANDLING REPORT OF';



    title1: any = ' Date :';
    title2: any = 'VESSEL NAME - ';
    title3:any='VOYAGE - ';
    title4: any = 'IMP.ROT. -';
    title5: any = 'EXP.ROT. -';
    title6: any = 'BERTH NO -';
    title7: any = 'SHIPPING AGENT - ';
    title8: any = 'ARRIVED DATE - ';
    title9: any = 'EXPECTED TIME OF DEPARTURE -';


    title10: any = 'IMPORT';
    title11: any = 'EXPORT';


    title12: any = 'DISCHARGED';
    title13: any = 'TOTAL DISCHARGED'
    title14: any = 'BALANCE ON BOARD'
    
    title15: any = 'LOADED'
    title16:any='TOTAL LOADED'
    title17:any='BALANCE TO BE SHIPPED'

   
 
  

    header: any =  ["20", "40","20", "40",  "LT", "MT","20", "40","20", "40",  "LT", "MT","20", "40","20", "40",  "LT", "MT"]

  

    getResultWithExcel(workDateContainer:any,tmp_rot_no: any,ContainerHandling:any,ImportHandlingReport:any,ExportHandlingRepor:any) {
      // Create workbook and worksheet
      let workbook = new Workbook();
      let worksheet = workbook.addWorksheet('Handling Report');
  
      //Add Row and formatting


 
      let titleRow = worksheet.addRow(["","", this.title,workDateContainer]);
      titleRow.alignment = { vertical: 'top', horizontal: 'left' };
      titleRow.font = { size: 16, bold: true };
     
      let titleRow1 = worksheet.addRow([this.title1,workDateContainer]);
      titleRow1.alignment = { vertical: 'top', horizontal: 'left' };
      titleRow1.font = { size: 16, bold: true };
     
 
      for (let result of ContainerHandling) {
   
      let titleRowOne = worksheet.addRow([ this.title2,result["name"]]);
      titleRowOne.alignment = { vertical: 'top', horizontal: 'left' };
      titleRowOne.font = { size: 16, bold: true };
    
    
      let titleRowTwo = worksheet.addRow([ this.title3,""]);
      titleRowOne.alignment = { vertical: 'top', horizontal: 'left' };
      titleRowOne.font = { size: 16, bold: true };
    

      let titleRowThree = worksheet.addRow([ this.title4,result["ib_vyg"]]);
      titleRowOne.alignment = { vertical: 'top', horizontal: 'left' };
      titleRowOne.font = { size: 16, bold: true };
    


      let titleRowFour = worksheet.addRow([ this.title5,result["ob_vyg"]]);
      titleRowOne.alignment = { vertical: 'top', horizontal: 'left' };
      titleRowOne.font = { size: 16, bold: true };
    

      let titleRowFive = worksheet.addRow([ this.title6,result["berth"]]);
      titleRowOne.alignment = { vertical: 'top', horizontal: 'left' };
      titleRowOne.font = { size: 16, bold: true };
    

      
      let titleRowSex = worksheet.addRow([ this.title7,result["shipping_agent"]]);
      titleRowOne.alignment = { vertical: 'top', horizontal: 'left' };
      titleRowOne.font = { size: 16, bold: true };

      let titleRowSeven = worksheet.addRow([ this.title8,result["arrived_date"]]);
      titleRowOne.alignment = { vertical: 'top', horizontal: 'left' };
      titleRowOne.font = { size: 16, bold: true };

      let titleRowEight = worksheet.addRow([ this.title9,result["departure_date"]]);
      titleRowOne.alignment = { vertical: 'top', horizontal: 'left' };
      titleRowOne.font = { size: 16, bold: true };


      }

      worksheet.addRow([]);

      let titleRowTwelev = worksheet.addRow(["","","","","","","","","",this.title10,"","","","","","","",""]);
      titleRow1.alignment = { vertical: 'top', horizontal: 'left' };
      titleRow1.font = { size: 16, bold: true };
  
      
      let titleRowTweThirteen = worksheet.addRow([this.title12,"","","","","","",this.title13,"","","","","","",this.title14,"","",""]);
      titleRow1.alignment = { vertical: 'top', horizontal: 'left' };
      titleRow1.font = { size: 16, bold: true };
  
      let headerRow2 = worksheet.addRow(this.header);
      headerRow2.font = { bold: true };
  
   
      for (let result of ImportHandlingReport) {
    
        let row = worksheet.addRow([result["disch_load20"], result["disch_load40"],result["disch_mty20"], result["disch_mty40"],result["load_teus"], result["mty_teus"], result["tot_disch_load20"],result["tot_disch_load40"],result["tot_disch_mty20"],result["tot_disch_mty40"],result["tot_disch_load_teus"],result['tot_disch_mty_teus'],result['bal_load20'],result['bal_load40'],result['bal_mty20'],result['bal_mty40'],result['bal_load_teus'],result['bal_mty_teus']]);
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
  

      
      let titleRowThree = worksheet.addRow(["","","","","","","","",this.title11,"","","","","","","","",""]);
      titleRow1.alignment = { vertical: 'top', horizontal: 'left' };
      titleRow1.font = { size: 16, bold: true };
  
      let titleRowFour = worksheet.addRow([this.title15,"","","","","","",this.title16,"","","","","","",this.title17,"","",""]);

      titleRow1.alignment = { vertical: 'top', horizontal: 'left' };
      titleRow1.font = { size: 16, bold: true };
  
      let headerRow1 = worksheet.addRow(this.header);
      headerRow1.font = { bold: true };
      
  
      for (let result of ExportHandlingRepor) {
        let row = worksheet.addRow([result["disch_load20"], result["disch_load40"],result["disch_mty20"], result["disch_mty40"],result["load_teus"], result["mty_teus"], result["tot_disch_load20"],result["tot_disch_load40"],result["tot_disch_mty20"],result["tot_disch_mty40"],result["tot_disch_load_teus"],result['tot_disch_mty_teus'],result['bal_load20'],result['bal_load40'],result['bal_mty20'],result['bal_mty40'],result['bal_load_teus'],result['bal_mty_teus']]);
        let color = 'FF99FF99';
        row.eachCell((cell, number) => {
          cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        });
      }
  

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


  getExportHandlingReport(rotation: string,word_date:string): Observable<any> {
    return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/ContainerHandlingExportReport/`+rotation +"/"+word_date);
  }

  getImportHandlingReport(rotation: string,word_date:string):Observable<any> {
    return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/ContainerHandlingImportReport/`+rotation +"/"+word_date);
  }

  getContainerHandling(rotation: any): Observable<any> {
    return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/HandlingReport/`+ rotation);
  }
}
