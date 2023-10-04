import { HttpClient } from '@angular/common/http';

import * as fs  from 'file-saver';
import { Workbook } from 'exceljs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


// <th>Seal No</th>
// <th>Goods Description</th>
// <th>Remarks</th>
// <th>Release Date,etc</th>
// <th>G. WT</th>
// <th>Imp Vessels Name/Depo</th>
// <th>Rot. No.</th>		
// <th>L/D</th>		
// <th>MLO</th>		
// <th>Desp Date</th>		
// <th>Carried Vessel</th>		
// <th>Berthing Date</th>		
// <th>Location</th>	




export class ExportAssignmentSheetForOutwadPangonService {
  header: any =  ["Sl No", "ContainerNo", "Size","Seal No","Goods Description","Remarks","Release Date,etc","G. WT","Rot. No.","L/D","MLO","Desp Date","Carried Vessel","Berthing Date","Location"]


  constructor(
    private httpClient:HttpClient,
  ) { }

  getAssignmentSheetForOutwadPangon(rotation:String):Observable<any>{
    return this.httpClient.get(`http://192.168.16.188:8099/ExportReportAssignmentSheetForOutwardPangonIctContainer/AssignmentSheetForOutwardPangon/`+rotation);
  }


  getResultWithExcel(dgInfo:any,tmp_rot_no:any){
  console.log("Import Rotation:"+tmp_rot_no)
    // Create workbook and worksheet

    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('DG Container By Rotation');



    let shiftTitle=worksheet.addRow(["","","Rotation:",tmp_rot_no]);
    shiftTitle.alignment={ vertical: 'top', horizontal: 'left'};
    shiftTitle.font = {  size: 16, underline: 'double', bold: true };
     worksheet.addRow([]);

    let headerRow = worksheet.addRow(this.header);
    headerRow.font={bold:true};

    headerRow.eachCell((cell, number) => {
  cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    });

    // "gkey": 46293619,
    // "id": "MGEU2011529",
    // "seal_nbr1": "",
    // "goods_and_ctr_wt_kg": 2,
    // "mlo": "MGP",
    // "name": "YM HEIGHTS",
    // "nominal_length": "NOM20",
    // "length": null



     let i=0;
     for(let result of dgInfo){
      i++;
      let row = worksheet.addRow([i,result["id"],result["length"],result["seal_nbr1"],result["id"],result["length"],result["seal_nbr1"]]);
     let color = 'FF99FF99';
        row.eachCell((cell,number)=>{
         cell.border={ top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
       });
       }



     worksheet.getColumn(5).width = 10;
     worksheet.getColumn(2).width = 30;
     worksheet.getColumn(3).width = 20;
     worksheet.getColumn(4).width = 20;
  


     

     worksheet.getColumn(5).width = 10;
     worksheet.getColumn(6).width = 30;
     worksheet.getColumn(7).width = 20;
     worksheet.getColumn(8).width = 20;
  
     worksheet.getRow(1).outlineLevel=200;
     worksheet.getRow(1).alignment={vertical:"middle",horizontal:"left"}



   workbook.xlsx.writeBuffer().then((data:any) => {
    let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fs.saveAs(blob, 'DG Information For Rotation.xlsx');
  });
  



 }


}
