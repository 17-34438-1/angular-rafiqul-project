import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs  from 'file-saver';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DgContainerDeliveryReportService {

  fileName= 'DG Container Delivery Report.xlsx';
  ctgPortTitle="CHITTAGONG PORT AUTHORITY,CHITTAGONG"
  title:any ="DG Container Delivery Report";
  header:any = ["SlNo","Vessel Name","Registration No","Berthing Time","Container No","Size", "MLO", "Discharge Time","BL No","Status","IMDG Class No","UN No","Description of Goods","Importer Name & Address","Navy Comments","Delivery Status","R/L No","R/L Date","OBPC No","OBPC Date","Delivery Date","Remarks"];



  constructor(
    private httpClient: HttpClient

  ) { }


  getEquipmentHandlingPerformaceHistoryRtgList(shift:any,rotation:any,fromDate:any,toDate:any){

    var tmp_rot_no = rotation.toString().replace("/", "_");
    console.log("tmp_rot_no for Date and rotation:"+tmp_rot_no);


    fromDate="00:00:00";
    toDate="00:00:00"


    console.log("rotation:"+rotation)
    console.log("formDate..............:"+fromDate)
    console.log("todate..........:"+toDate)
  

    return this.httpClient.get(`http://192.168.16.188:8093/DgInfo/DgContainerDeliveryReport/` +shift+"/"+tmp_rot_no+"/"+fromDate+"/"+toDate); 
  
  
  }

  getEquipmentHandling(shift:any,rotation:any,fromDate:any,toDate:any){
    rotation="0";
console.log("rotation........"+rotation)
 console.log("shift.................:"+shift)
    console.log("formDate..............:"+fromDate)
    console.log("todate..........:"+toDate)
  
    return this.httpClient.get(`http://192.168.16.188:8093/DgInfo/DgContainerDeliveryReport/`+shift+"/"+rotation+"/"+fromDate+"/"+toDate); 
  console.log(this.httpClient.get(`http://192.168.16.188:8093/DgInfo/DgContainerDeliveryReport/`+shift+"/"+rotation+"/"+fromDate+"/"+toDate) )
  }

  getResultWithExcel(resultList:any,shift:any,impotation:any,fromDate:any,toDate:any){
   

    console.log("Rotation..................:"+impotation)
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet("DG Container Delivery Report");

     //Add Row and formatting
     let portTitle=worksheet.addRow(["","",this.ctgPortTitle]);
     portTitle.alignment={ vertical: 'top', horizontal: 'left'};
     portTitle.font = {  size: 16, underline: 'single', bold: true };
     worksheet.addRow([]);
     let titleRow = worksheet.addRow(["","",this.title]);
     titleRow.alignment={ vertical: 'top', horizontal: 'left'};
     titleRow.font = {  size: 16, underline: 'single', bold: true };

 
    
     if(fromDate==""||toDate==""){
      var info=worksheet.addRow(["","","Rotation:"+impotation,"",""]);  
      info.font={ size: 16, bold: true};  
     }
     else{
      var info=worksheet.addRow([" From Date : "+fromDate,"","","To Date : "+toDate,"",""]);
     
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
        let row = worksheet.addRow([i,result["vessel_Name"],result["import_Rotation_No"],result["ata"],result["cont_number"],result["cont_size"],result["mlo"],result["Discharged_Status_date"],result["bl_No"],result["cont_status"],result["cont_imo"],result["cont_un"],result["description_of_Goods"],result["notify_name"],result[""],result[""],result["rl_no"],result["rl_date"],result["obpc_number"],result["obpc_date"],result["Delivery_Status_date"],result[""]]);
        row.border={ top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }};
        let color = 'FF99FF99';
      
      
        row.eachCell((cell,number)=>{
         cell.alignment={vertical:'middle',horizontal:'center'}
       });
  }

   let resultRow=worksheet.addRow(["Total","","","","",""]);
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
     worksheet.getColumn(12).width = 25;
     worksheet.getColumn(13).width = 300;
     worksheet.getColumn(14).width = 45;
     worksheet.getColumn(15).width = 25;
     worksheet.getColumn(16).width = 25;
     worksheet.getColumn(17).width = 25;
     worksheet.getColumn(18).width = 25;
     worksheet.getColumn(19).width = 25;
     worksheet.getColumn(20).width = 25;
     worksheet.getColumn(21).width = 25;
     worksheet.getColumn(22).width = 25;
     worksheet.getRow(1).outlineLevel=200;
     worksheet.getRow(1).alignment={vertical:"middle",horizontal:"left"};
    



   workbook.xlsx.writeBuffer().then((data:any) => {
    let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fs.saveAs(blob, 'DG Container Delivery Report.xlsx');
  });



 }





 getResultWithExcelshit(resultList:any,shift:any,Rotation:any,fromDate:any,toDate:any){
   
  let workbook = new Workbook();
  let worksheet = workbook.addWorksheet("DG Container Delivery Report");

   //Add Row and formatting
   let portTitle=worksheet.addRow(["","",this.ctgPortTitle]);
   portTitle.alignment={ vertical: 'top', horizontal: 'left'};
   portTitle.font = {  size: 16, underline: 'single', bold: true };
   worksheet.addRow([]);
   let titleRow = worksheet.addRow(["","",this.title]);
   titleRow.alignment={ vertical: 'top', horizontal: 'left'};
   titleRow.font = {  size: 16, underline: 'single', bold: true };



   worksheet.addRow([]);
  
   if(fromDate==""||toDate==""){
    var info=worksheet.addRow(["","","Rotation:"+Rotation,"",""]);    
   }
   else{
    var info=worksheet.addRow(["","","From Date : "+fromDate,"To Date : "+toDate,"",""]);
   
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
      let row = worksheet.addRow([i,result["vessel_Name"],result["import_Rotation_No"],result["ata"],result["cont_number"],result["cont_size"],result["mlo"],result["Discharged_Status_date"],result["bl_No"],result["cont_status"],result["cont_imo"],result["cont_un"],result["description_of_Goods"],result["notify_name"],result[""],result[""],result["rl_no"],result["rl_date"],result["obpc_number"],result["obpc_date"],result["Delivery_Status_date"],result[""]]);
      row.border={ top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }};
      let color = 'FF99FF99';
    
    
      row.eachCell((cell,number)=>{
       cell.alignment={vertical:'middle',horizontal:'center'}
     });
}

 let resultRow=worksheet.addRow(["Total","","","","",""]);
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
   worksheet.getColumn(12).width = 25;
   worksheet.getColumn(13).width = 300;
   worksheet.getColumn(14).width = 45;
   worksheet.getColumn(15).width = 25;
   worksheet.getColumn(16).width = 25;
   worksheet.getColumn(17).width = 25;
   worksheet.getColumn(18).width = 25;
   worksheet.getColumn(19).width = 25;
   worksheet.getColumn(20).width = 25;
   worksheet.getColumn(21).width = 25;
   worksheet.getColumn(22).width = 25;
   worksheet.getRow(1).outlineLevel=200;
   worksheet.getRow(1).alignment={vertical:"middle",horizontal:"left"};
  



 workbook.xlsx.writeBuffer().then((data:any) => {
  let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  fs.saveAs(blob, 'DG Container Delivery Report.xlsx');
});



}


}
