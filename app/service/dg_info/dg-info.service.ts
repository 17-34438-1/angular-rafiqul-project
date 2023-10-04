import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Workbook } from 'exceljs';

// import * as XLSX from 'xlsx';  
import * as fs  from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';  
const EXCEL_EXTENSION = '.xlsx'; 

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DgInfoService {
 // private content=new BehaviorSubject<any>("");
 // public share=this.content.asObservable();


 private content=new BehaviorSubject<any>("");
 public share=this.content.asObservable();
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
     worksheet.getColumn(3).width = 10;
     worksheet.getColumn(4).width = 10;
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



//  exportexcel(data:any,shift:any){
//   let dgInfo = document.getElementById('');

//   const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(dgInfo);

  
//   const wb: XLSX.WorkBook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(wb, ws, 'xl');

  
//   XLSX.writeFile(wb,  this.fileName);

// }

  
  // getLaborList(): Observable<any> {
  //   return this.httpClient.get(`http://192.168.16.188:8081/DgInfo/getSidebarByLoginId/`);
  // }
  // http://192.168.16.188:8081/DgInfo/DgContDischargeListByRotation/

  // http://192.168.16.188:8081/DgInfo/DgContDischargeListForRotation
  

 
 
  // addLabor(tmp_rot_no: string): Observable<any> {
  //   return this.httpClient.post(`http://192.168.16.243:8091/labor/add` + tmp_rot_no,null);
  // }

 


  DischargInfo(tmp_rot_no: string):Observable<any> {
    return this.httpClient.get(`http://192.168.16.188:8081/DgInfoController/DgInfo/` + tmp_rot_no);
  }
  
  DischargByRotation(tmp_rot_no: string):Observable<any> {
    return this.httpClient.get(`http://192.168.16.188:8081/DgInfo/DgContDischargeListForRotation/` + tmp_rot_no);
  }


  Discharg(tmp_rot_no: string):Observable<any> {
    return this.httpClient.get(`http://192.168.16.188:8081/DgInfo/DgDischarge/` + tmp_rot_no);
  }

}
