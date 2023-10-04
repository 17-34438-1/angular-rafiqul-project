import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fs  from 'file-saver';
import { Workbook } from 'exceljs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DgManifestReportService {

  fileName= 'DG Manifest.xlsx';
  title:any = 'DG Manifest Report';
  header:any = ["Agent","MLOCode","LineNo.", "B/L&Number", "Number/Quantity", "Description", "Marks&&Number","DescriptionOfGoods","DateOfEntryofGoods","Net Weight","Gross Weight","Container Detail","","","","","","","","","","NameoftheImportersOrClearingAgent","BillOfEntryNumber","Delivered","Discharged "," TobeAccountedFor","Remarks","IMCO","UN","Navy comments"];

  constructor(
    private httpClient: HttpClient,

  ) { }

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
    //shiftTitle.font={ size: 16, bold: true};
     worksheet.addRow([]);

    let headerRow = worksheet.addRow(this.header);
    headerRow.font={bold:true};

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      /*cell.fill = {
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
      let titleRowConsignee = worksheet.addRow(["","","","","","","","","","","","","","","","","","","","","","Consignee"]);
      titleRowConsignee.eachCell((cell,number)=>{
        titleRowConsignee.font={bold:true};
        cell.border={ top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }};
        cell.alignment={vertical:'middle',horizontal:'center'}
      });

      let titleRow = worksheet.addRow(["","","","","","","","","","","","","","","","","","","","","",result["consigneeDesc"]]);
      titleRow.eachCell((cell,number)=>{
        titleRow.font={bold:true};
        cell.border={ top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }};
        cell.alignment={vertical:'middle',horizontal:'center'}
      });

      let titleRowNotify = worksheet.addRow(["","","","","","","","","","","","","","","","","","","","","","Notify Party"]);
      titleRowNotify.eachCell((cell,number)=>{
        titleRowNotify.font={bold:true};
        cell.border={ top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }};
        cell.alignment={vertical:'middle',horizontal:'center'}
      });

      let titleRowNotifyResult = worksheet.addRow(["","","","","","","","","","","","","","","","","","","","","",result["notify_name"]]);
      titleRowNotifyResult.eachCell((cell,number)=>{
        titleRowNotifyResult.font={bold:true};
        cell.border={ top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }};
        cell.alignment={vertical:'middle',horizontal:'center'}
      });


      let rowTotalContainerNo= worksheet.addRow(["","","","","","","","","","","","Off-dock Name","CntNumber","SealNumber","Size","Type","Height","Weight","Status","IMCO","UN","","","","","","","","","",""]);
      rowTotalContainerNo.eachCell((cell,number)=>{
       rowTotalContainerNo.font={bold:true};
       cell.border={ top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }};
       cell.alignment={vertical:'middle',horizontal:'center'}
     });

      let row = worksheet.addRow([result["organization_Name"],result["mlocode"],result["line_No"],result["bl_No"],result["pack_Number"],
      result["pack_Description"],result["pack_Marks_Number"],result["description_of_Goods"]
      ,result["date_of_Entry_of_Goods"],result["net_weight"],result["weight"],"","","",
      "","","","","","",""," ", "","","","",result["remarks"],"","",""]);

      for(let dgManifestReport of result.dgManifestReports){
        let row = worksheet.addRow(["","","","","","","","","","","",dgManifestReport["organization_Name"],dgManifestReport["cont_number"],dgManifestReport["cont_seal_number"],dgManifestReport["cont_size"],dgManifestReport["cont_type"],dgManifestReport["cont_height"],dgManifestReport["cont_weight"],dgManifestReport["cont_status"],dgManifestReport["cont_imo"],dgManifestReport["cont_un"],"","","","","","","","",""]);
        let color = 'FF99FF99';
        row.eachCell((cell,number)=>{
         cell.border={ top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        });
      }
   


        let color = 'FF99FF99';
        row.eachCell((cell,number)=>{
         cell.border={ top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
       });
    
   }

     worksheet.getColumn(1).width = 30;
     worksheet.getColumn(2).width = 30;
     worksheet.getColumn(3).width = 20;
     worksheet.getColumn(4).width = 20;
     worksheet.getColumn(5).width = 10;
     worksheet.getColumn(6).width = 25;
     worksheet.getColumn(7).width = 55;
     worksheet.getColumn(8).width = 400;
     worksheet.getColumn(9).width = 50;
     worksheet.getColumn(10).width = 20;
     worksheet.getColumn(11).width = 20;
     worksheet.getColumn(12).width = 40;
     worksheet.getColumn(13).width = 40;
     worksheet.getColumn(14).width = 40;
     worksheet.getColumn(15).width = 25;
     worksheet.getColumn(16).width = 25;
     worksheet.getColumn(17).width = 25;
     worksheet.getColumn(18).width = 20;
     worksheet.getColumn(19).width = 20;
     worksheet.getColumn(20).width = 20;
     worksheet.getColumn(21).width = 100;
     worksheet.getColumn(22).width = 200;
     worksheet.getColumn(23).width = 20;
     worksheet.getColumn(24).width = 10;
     worksheet.getColumn(25).width = 25;
     worksheet.getColumn(26).width = 25;
     worksheet.getColumn(27).width = 25;
     worksheet.getColumn(28).width = 50;
     worksheet.getColumn(29).width = 20;
     worksheet.getColumn(30).width = 20;
     worksheet.getRow(1).outlineLevel=200;
     worksheet.getRow(1).alignment={vertical:"middle",horizontal:"left"}
   workbook.xlsx.writeBuffer().then((data:any) => {
    let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fs.saveAs(blob, 'DG Information For Rotation.xlsx');
  });
  
 }

DischargInfo(tmp_rot_no: string):Observable<any> {
  return this.httpClient.get(`http://192.168.16.188:8081/DgInfoController/DgInfo/` + tmp_rot_no);
}

DischargByRotation(tmp_rot_no: string):Observable<any> {
  return this.httpClient.get(`http://192.168.16.188:8093/DgInfo/DgManifestReport/` + tmp_rot_no);
}


Discharg(tmp_rot_no: string):Observable<any> {
  return this.httpClient.get(`http://192.168.16.243:8093/DgInfo/DgDischarge/` + tmp_rot_no);
}

}
