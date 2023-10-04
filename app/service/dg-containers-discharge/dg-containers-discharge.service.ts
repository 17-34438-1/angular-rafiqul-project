import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as fs  from 'file-saver';
import { Workbook } from 'exceljs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DgContainersDischargeService {


   fileName= 'DG Information For Rotation.xlsx';
   title:any = 'DG Information For Rotation';
 
 
 
 
 
  header:any = ["SlNo","Container No.","Size", "Height", "MLO", "Destination", "IMDG Class","UN No","Description_of_Goods","Weight","Status"];
 
  constructor(
    private httpClient: HttpClient,
  ) { 

  }


  
  getResultWithExcel(dgInfo:any,rotation_no:any){
    // Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('DG Information For Rotation');

     //Add Row and formatting
     let titleRow = worksheet.addRow(["","",this.title]);
     titleRow.alignment={ vertical: 'top', horizontal: 'left'};
     titleRow.font = {  size: 16, underline: 'double', bold: true };
    let shiftTitle=worksheet.addRow(["","","Rotation:",rotation_no]);
    shiftTitle.alignment={ vertical: 'top', horizontal: 'left'};
    shiftTitle.font = {  size: 16, underline: 'double', bold: true };
    // shiftTitle.font={ size: 16, bold: true};
     worksheet.addRow([]);

    let headerRow = worksheet.addRow(this.header);
    headerRow.font={bold:true};

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
     let i=0;
     for(let result of dgInfo){
      i++;
      console.log(result["logDate"]);
   
        let row = worksheet.addRow([i,result["cont_number"],result["cont_size"],result["cont_height"],result["mlocode"],result["off_dock_id"],result["cont_imo"],result["cont_un"],result["description_of_Goods"],result["cont_gross_weight"],result["cont_status"]]);
        let color = 'FF99FF99';
        row.eachCell((cell,number)=>{
         cell.border={ top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
       });
       
       
   

   }
     worksheet.getColumn(1).width = 10;
     worksheet.getColumn(2).width = 30;
     worksheet.getColumn(3).width = 20;
     worksheet.getColumn(4).width = 20;
     worksheet.getColumn(5).width = 10;
     worksheet.getColumn(6).width = 25;
     worksheet.getColumn(7).width = 25;
     worksheet.getColumn(8).width = 25;
     worksheet.getColumn(9).width = 50;
     worksheet.getColumn(10).width = 20;
     worksheet.getColumn(11).width = 20;

     worksheet.getRow(1).outlineLevel=200;
     worksheet.getRow(1).alignment={vertical:"middle",horizontal:"left"}



   workbook.xlsx.writeBuffer().then((data:any) => {
    let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fs.saveAs(blob, 'DG Information For Rotation.xlsx');
  });
  



 }
 
 
 

DischargInfo(tmp_rot_no: string):Observable<any> {
  return this.httpClient.get(`http://192.168.16.243:8093/DgInfoController/DgInfo/` + tmp_rot_no);
}

DischargByRotation(tmp_rot_no: string):Observable<any> {
  return this.httpClient.get(`http://192.168.16.188:8093/DgInfo/DgContDischargeListForRotation/` + tmp_rot_no);
}


Discharg(tmp_rot_no: string):Observable<any> {
  return this.httpClient.get(`http://192.168.16.188:8093/DgInfo/DgDischarge/` + tmp_rot_no);
}

}
