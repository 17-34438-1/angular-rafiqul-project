import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fs  from 'file-saver';
import { Workbook } from 'exceljs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DgContainerByRotationService {


  fileName= 'DG Container By Rotation.xlsx';
  title:any = 'DG Container By Rotation';


  header:any = ["Sl No.","Vessel Name","Registration No.", "Container No.", "Size", "Seal No", "Status","DescriptionOfGoods","DG Class","UN No","Bearth no","MLO","Remarks"];


  constructor(
    private httpClient: HttpClient,

  ) { }


  getResultWithExcel(dgInfo:any,rotation_no:any){
    // Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('DG Container By Rotation');

     //Add Row and formatting
     let titleRow = worksheet.addRow(["","",this.title]);
     titleRow.alignment={ vertical: 'top', horizontal: 'left'};
     titleRow.font = {  size: 16, underline: 'double', bold: true };


    let shiftTitle=worksheet.addRow(["","","Rotation:",rotation_no]);
    shiftTitle.alignment={ vertical: 'top', horizontal: 'left'};
    shiftTitle.font = {  size: 16, underline: 'double', bold: true };
     worksheet.addRow([]);

    let headerRow = worksheet.addRow(this.header);
    headerRow.font={bold:true};

    headerRow.eachCell((cell, number) => {
  cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    });

    // <td>{{dgContainerReport.vessel_Name}}</td>
    // <td>{{dgContainerReport.import_Rotation_No}}</td>
   
    // <td>{{dgContainerReport.cont_number}}</td>
    // <td>{{dgContainerReport.cont_size}}</td>
    // <td>{{dgContainerReport.cont_seal_number}}</td>
    // <td>{{dgContainerReport.cont_status}}</td>
    // <td>{{dgContainerReport.description_of_Goods}}</td>                   
    // <td>{{dgContainerReport.cont_imo}}</td>
    // <td>{{dgContainerReport.cont_un}}</td>                 
    // <td>{{dgContainerReport.berth}}</td>
    // <td>{{dgContainerReport.mlo}}</td>
    // <td>{{dgContainerReport.remarks}}</td>



     let i=0;
     for(let result of dgInfo){
      i++;

      let row = worksheet.addRow([i,result["vessel_Name"],result["import_Rotation_No"],result["cont_number"],result["cont_size"],result["cont_seal_number"],result["cont_status"],result["description_of_Goods"],result["cont_imo"],result["cont_un"],result["berth"],result["mlo"],result["remarks"]]);

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
     worksheet.getColumn(8).width = 145;
     worksheet.getColumn(9).width = 20;
     worksheet.getColumn(10).width = 20;
     worksheet.getColumn(11).width = 20;
     worksheet.getColumn(12).width = 40;
    

     worksheet.getRow(1).outlineLevel=200;
     worksheet.getRow(1).alignment={vertical:"middle",horizontal:"left"}



   workbook.xlsx.writeBuffer().then((data:any) => {
    let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fs.saveAs(blob, 'DG Information For Rotation.xlsx');
  });
  



 }

ContainerByRotation(tmp_rot_no: string):Observable<any> {
  return this.httpClient.get(`http://192.168.16.188:8093/DgInfo/DgContainerByRotation/` + tmp_rot_no);
}


}
