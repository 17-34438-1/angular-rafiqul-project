import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class CopinoService {
  fileName = 'Export Copino.xlsx';
  title: any = 'Export Copino';
  header: any = ["Sl No", "Container No.", "Size", "Height", "ISO Code", "MLO Code", "Status", "Weitht", "SealNo", "ComingFrom", "POD", "PermissionNo.", "Commmodity", "POL", "Remarks"]
  constructor(
    private httpClient: HttpClient,
  ) { }






  getResultWithExcel(copinoInfo: any, rotation_no: any, vname: any) {
    // Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Export Copino');

    //Add Row and formatting
    let titleRow = worksheet.addRow(["", "", this.title]);
    titleRow.alignment = { vertical: 'top', horizontal: 'left' };
    titleRow.font = { size: 16, bold: true };
    let RotationTitle = worksheet.addRow(["", "", "Rotation:", rotation_no, "Vessel Name:", vname]);
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
    for (let result of copinoInfo) {
      i++;
      console.log(result["logDate"]);

  

      let row = worksheet.addRow([i, result["cont_id"], result["cont_size"], result["cont_height"], result["isoType"], result["cont_mlo"], result["cont_status"], result["goods_and_ctr_wt_kg"], result["seal_no"]]);
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
    worksheet.getColumn(15).width = 10;

    worksheet.getRow(1).outlineLevel = 200;
    worksheet.getRow(1).alignment = { vertical: "middle", horizontal: "left" }



    workbook.xlsx.writeBuffer().then((data: any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Export Copino.xlsx');
    });




  }
  copinoListData(rotation: String): Observable<any> {

    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/copinoData/` + rotation);
  }

  copinoList(rotation: String): Observable<any> {

    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/copino/` + rotation);
  }

}
