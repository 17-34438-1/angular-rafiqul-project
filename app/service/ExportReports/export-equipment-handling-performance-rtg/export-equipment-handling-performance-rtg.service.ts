import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workbook } from 'exceljs';
import * as fs  from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class ExportEquipmentHandlingPerformanceRtgService {
  fileName= 'ExcelSheet.xlsx';
  ctgPortTitle="     CHITTAGONG PORT AUTHORITY,CHITTAGONG"
  title:any ="EQUIPMENT HANDLING PERFORMANCE HISTORY";
  header:any = ["SlNo","RTG NO","Start VMT Log In Time","End VMT Log Out Time","ID NO","RTG Operator Name", "Export Receiving", "Yard Move","Shifting","Total Handing Boxes"];

  constructor(
    private httpClient: HttpClient
  ) { }

  getEquipmentHandlingPerformaceHistoryRtgList(shift:any,fromDate:any,fromTime:any,toDate:any,toTime:any){

    console.log("Shift:"+shift);
    console.log("fromedate:"+fromDate)
    if(shift=="Day" || shift=="Night"){
      fromTime="00:00:00";
      toDate="00:00:00"
      toTime="00:00:00"

    }
    return this.httpClient.get(`http://192.168.16.188:8093/ExportReport/ExportEquipmentHandlingPerformanceRTG/` +shift+"/"+fromDate+" /"+toDate+"/"+fromTime+"/"+toTime); 
  }
  getResultWithExcel(resultList:any,shift:any,fromDate:any,toDate:any){
    // Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet("EQUIPMENT HANDLING PERFORMANCE HISTORY");

     //Add Row and formatting
     let portTitle=worksheet.addRow(["","",this.ctgPortTitle]);
     portTitle.alignment={ vertical: 'top', horizontal: 'left'};
     portTitle.font = {  size: 16, underline: 'single', bold: true };
     worksheet.addRow([]);
     let titleRow = worksheet.addRow(["","",this.title]);
     titleRow.alignment={ vertical: 'top', horizontal: 'left'};
     titleRow.font = {  size: 16, underline: 'single', bold: true };

    // let shiftTitle=worksheet.addRow(["","","","Shift : ",shift]);
   //  shiftTitle.font={ size: 16, bold: true};

     worksheet.addRow([]);
    
     if(toDate==""){
      var info=worksheet.addRow([" From Date : "+fromDate,"","","","","","     Shift : "+shift]);    
     }
     else{
      var info=worksheet.addRow([" From Date : "+fromDate,"","","     To Date : "+toDate,"","","     Shift : "+shift]);
     
     }
    
     info.alignment={ vertical: 'top', horizontal: 'left'};
     info.font = {  size: 12, bold: true};
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
      cell.alignment={vertical:'middle',horizontal:'center'}
    });
    // worksheet.addRows(data);
    // Add Data and Conditional Formatting
     let i=0;
     let imRtotal=0;
     let keepDTotal=0;
	   let dOffTotal=0;
     
	   let shiftTotal=0;
     let total=0;
     for(let result of resultList){
      i++;
        let row = worksheet.addRow([i,result["eq"],result["log_in_time"],result["log_out_time"],result["log_by"],result["short_name"],result["expRcv"],result["yardMove"],result["expShift"],result["totalHandingBox"]]);
        row.border={ top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }};
        let color = 'FF99FF99';
        imRtotal=imRtotal+result["expRcv"];
        keepDTotal=keepDTotal+result["yardMove"];
        dOffTotal=dOffTotal+result["expShift"];
      
        row.eachCell((cell,number)=>{
         cell.alignment={vertical:'middle',horizontal:'center'}
       });
  }
   total=imRtotal+keepDTotal+dOffTotal;
   let resultRow=worksheet.addRow(["Total","","","","","",imRtotal,keepDTotal,dOffTotal,total]);
   resultRow.font={bold:true};
   resultRow.eachCell((cell, number) => {
   
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
      cell.alignment={vertical:'middle',horizontal:'center'}
    });

     worksheet.getColumn(1).width = 25;
     worksheet.getColumn(2).width = 25;
     worksheet.getColumn(3).width = 25;
     worksheet.getColumn(4).width = 25;
     worksheet.getColumn(5).width = 25;
     worksheet.getColumn(6).width = 25;
     worksheet.getColumn(7).width = 25;
     worksheet.getColumn(8).width = 25;
     worksheet.getColumn(9).width = 25;
     worksheet.getColumn(10).width = 25;
     worksheet.getColumn(11).width = 25;
     worksheet.getRow(1).outlineLevel=200;
     worksheet.getRow(1).alignment={vertical:"middle",horizontal:"left"};
    



   workbook.xlsx.writeBuffer().then((data:any) => {
    let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fs.saveAs(blob, 'EquipmentRtgPerformanceHandlingHistory.xlsx');
  });



 }
}
