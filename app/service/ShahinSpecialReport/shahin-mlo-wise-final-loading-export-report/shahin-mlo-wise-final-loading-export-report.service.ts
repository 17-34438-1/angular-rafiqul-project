import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workbook } from 'exceljs';

import * as fs from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class ShahinMloWiseFinalLoadingExportReportService {

  fileName1 = 'Mlo Wise Excel Uploaded.xlsx';
  title3: any = 'CHITTAGONG PORT AUTHORITY,CHITTAGONG';
  title2: any = 'Mlo Wise Excel Uploaded';


  header1: any =  ["Sl No", "Id","Iso", "Size",  "Height", "Mlo", "Freight_kind","Weight","Pod","Stowage_pos", "Last_update","Seal_no", "Coming_from", "Truck_no", "Craine_id","User Id"]



 

  fileName = 'Export Container Loading Excel Report.xlsx';
  title: any = 'CHITTAGONG PORT AUTHORITY,CHITTAGONG';
  title1: any = 'Export Container Loading Excel Report';
  header: any = ["MLO", "2D", " 4D", " 4H", "45H", " 4RH", " 2RF", " 2OT", " 2FR", " 2TK", " 4FR", " 4OT", "2D", "4D", "4H", "45H", "4RH", "2RF", "2OT", "2FR", "2TK", " 4FR", "4OT", "Grand_tot", "Tues", "Weight"]
  constructor(private httpClient: HttpClient) { }

  getResultWithExcel(rotation_no: any,ContainerLoadingVesselInfo:any,dischargeContianerSummary: any) {
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
  
    let i = 0;
    for (let result of dischargeContianerSummary) {
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










  getResultWithDetailsContainerExcel(rotation_no: any,vesselInfo: any,dischargeContianerSummary: any) {
    // Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Mlo Wise Excel Uploaded');

    //Add Row and formatting
    let titleRow = worksheet.addRow(["", "", this.title3]);
    titleRow.alignment = { vertical: 'top', horizontal: 'left' };
    titleRow.font = { size: 16, bold: true };
    let titleRowOne = worksheet.addRow(["", "", this.title2]);
    titleRowOne.alignment = { vertical: 'top', horizontal: 'left' };
    titleRowOne.font = { size: 16, bold: true };
    let RotationTitle = worksheet.addRow(["", "", "Rotation:", rotation_no]);
    RotationTitle.alignment = { vertical: 'top', horizontal: 'left' };
    RotationTitle.font = { size: 16, bold: true };


  
    worksheet.addRow([]);


    // for(let VesselDetails of vesselInfo ){
     
    //   let row = worksheet.addRow([ "VESSEL-",VesselDetails["vsl_name"],"EXP.ROT-:", rotation_no , "SAILED DATE-",VesselDetails["ata"],"BERTH-",VesselDetails["berth_op"]]);
    //   let color = 'FF99FF99';
    //   row.eachCell((cell, number) => {
    //     cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    //   });

    // }


    let headerRow = worksheet.addRow(this.header1);
    headerRow.font = { bold: true };

   
    headerRow.eachCell((cell, number) => {
  
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    });
    // worksheet.addRows(data);

    // Add Data and Conditional Formatting
    let i = 0;
    let mlo="";
    let j=0;

    for(let result of dischargeContianerSummary ){
       
      for(let ContianerDetails of result.containerList ){
        i++;
        let row = worksheet.addRow([i, ContianerDetails["id"], ContianerDetails["iso"], ContianerDetails["size"],ContianerDetails["height"], ContianerDetails["mlo"], ContianerDetails["freight_kind"],ContianerDetails["weight"], ContianerDetails["pod"], ContianerDetails["stowage_pos"],ContianerDetails["last_update"],ContianerDetails["seal_no"], ContianerDetails["coming_from"],ContianerDetails[" truck_no"],ContianerDetails[" craine_id"],ContianerDetails["user_id"]]);
        let color = 'FF99FF99';
        row.eachCell((cell, number) => {
          cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        });

      }
      if(mlo!=result.mlo){
 
        let rowOrgName=worksheet.addRow(["","","","","","","",result["totalWeight"],"","","","","","","",""]);
        rowOrgName.font={bold:true};
        rowOrgName.eachCell((cell,number)=>{
         cell.border={ top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }};
         cell.alignment={vertical:'middle',horizontal:'center'}
       });
 
        j=1;
 
      }
      else{
        j++;
      }
      mlo=result.mlo;

    
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
    worksheet.getColumn(15).width = 10;


    worksheet.getRow(1).outlineLevel = 200;
    worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "left" }



    workbook.xlsx.writeBuffer().then((data: any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Mlo Wise Excel Uploaded.xlsx');
    });




  }

















  getContainerLoadingVesselInfo(rotation: String): Observable<any> {
    return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/ExportContainerLodingVesselInfo/` + rotation);
  }

  getContainerLoadingVoyNo(rotation: String): Observable<any> {
    return this.httpClient.get(`http://192.168.16.188:8081/ExportReport/ExportContainerLoadingVoyNo/` + rotation);
  }
  getContainerLodingDetailsList(rotation: String,fromDate: any, toDate: any, fromTime: any, toTime: any): Observable<any> {
    return this.httpClient.get(`http://192.168.16.188:8081/ShahinSpecialReport/ShahinVesselListWithStatusForExportUploadReport/` + rotation + "/" + fromDate + "/" + toDate + "/" + fromTime + "/" + toTime);
  }
  getContainerLoadingExcelReport(rotation_no: String, fromDate: any, toDate: any, fromTime: any, toTime: any): Observable<any> {
      // http://192.168.16.188:8081/ShahinSpecialReport/ShahinVesselListWithStatusForExportUploadReport/2017_337/2017-02-05/2017-02-05/09%3A30%3A00/08%3A30%3A00
   // http://192.168.16.188:8081/ShahinSpecialReport/ShahinReportContainerLoadingReport/2017_337/2017-01-06/2022-01-06/0/0
   // console.log(`http://192.168.16.188:8081/ShahinSpecialReport/ShahinReportContainerLoadingReport/` + rotation_no + "/" + fromDate + "/" + toDate + "/" + fromTime + "/" + toTime);
  
    return this.httpClient.get(`http://192.168.16.188:8081/ShahinSpecialReport/ShahinReportContainerLoadingReport/` + rotation_no + "/" + fromDate + "/" + toDate + "/" + fromTime + "/" + toTime);
  }
}
