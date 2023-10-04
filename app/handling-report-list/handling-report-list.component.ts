import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jspdf from 'jspdf';
import { ToastrService } from 'ngx-toastr';

import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AuthService } from '../service/auth/auth.service';
import { HandlingReportService } from '../service/HandlingReport/handling-report.service';
 import { jsPDF } from "jspdf";
// import * as jspdf from 'jspdf';  
 import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-handling-report-list',
  templateUrl: './handling-report-list.component.html',
  styleUrls: ['./handling-report-list.component.css']
})
export class HandlingReportListComponent implements OnInit {

  @ViewChild('content',{static:false}) el!:ElementRef;
  tmp_rot_no:any;
  workDateContainer:any;
  arrived_date:any;
  departure_date:any;
  ib_vyg:any;
  name:any;
  ob_vyg:any;
  shipping_agent:any;
  berth:any;
  show:Boolean=true;
  length:number=0;

  options:any;
  bal_load20:any;
  bal_load40:any;
  bal_load_teus:any;
  bal_mty20:any;
  bal_mty40:any;
  bal_mty_teus:any;
  disch_load20:any;
  disch_load40:any;
  disch_mty20:any;
  disch_mty40:any;
  load_teus:any;
  mty_teus:any;
  tot_disch_load20:any;
  tot_disch_load40:any;
  tot_disch_load_teus:any;
  tot_disch_mty20:any;
  tot_disch_mty40:any;
  tot_disch_mty_teus:any;

  ContainerHandling:any;
  ImportContainerHandling:any;
  ExportContainerHandling:any;
 
  constructor(
    private handlingReportService: HandlingReportService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService


  ) { }

  ngOnInit(): void {
    this.tmp_rot_no = localStorage.getItem("import_export_rot_no");
    this.workDateContainer = localStorage.getItem("workDates");
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
    console.log("workDate:"+this.workDateContainer);
    
 

    this.handlingReportService.getContainerHandling(tmp_rot_no).subscribe(data=>{
      this.ContainerHandling=data;
      console.log("ImportContainerHandling:"+this.ImportContainerHandling);
      console.log("data:",data);

      for (let ImportContainerHandling of data) {
        this.arrived_date=ImportContainerHandling.arrived_date;
        this.departure_date=ImportContainerHandling.departure_date;
        this.ib_vyg=ImportContainerHandling.ib_vyg;
        this.name=ImportContainerHandling.name;
        this.ob_vyg=ImportContainerHandling.ob_vyg;
        this.shipping_agent=ImportContainerHandling.shipping_agent;
        this.berth=ImportContainerHandling.berth;
     
      }
      
    });



    this.handlingReportService.getImportHandlingReport(tmp_rot_no,this.workDateContainer).subscribe(data=>{
      this.ImportContainerHandling=data;
      console.log("ImportContainerHandling:"+this.ImportContainerHandling);
      console.log("data:",data);
      for (let ImportContainerHandling of data) {


        this.bal_load20=ImportContainerHandling.bal_load20;
        this.bal_load40=ImportContainerHandling.bal_load40;
        this.bal_load_teus=ImportContainerHandling.bal_load_teus;
        this.bal_mty20=ImportContainerHandling.bal_mty20;
        this.bal_mty40=ImportContainerHandling.bal_mty40;
        this.bal_mty_teus=ImportContainerHandling.bal_mty_teus;
        this.disch_load20=ImportContainerHandling.disch_load20;
        this.disch_load40=ImportContainerHandling.disch_load40;
        this.disch_mty20=ImportContainerHandling.disch_mty20;
        this.disch_mty40=ImportContainerHandling.disch_mty40;
        this.load_teus=ImportContainerHandling.load_teus;
        this.mty_teus=ImportContainerHandling.mty_teus;
        this.tot_disch_load20=ImportContainerHandling.tot_disch_load20;
        this.tot_disch_load40=ImportContainerHandling.tot_disch_load40;
        this.tot_disch_load_teus=ImportContainerHandling.tot_disch_load_teus;
        this.tot_disch_mty20=ImportContainerHandling.tot_disch_mty20;
        this.tot_disch_mty40=ImportContainerHandling.tot_disch_mty40;
        this.tot_disch_mty_teus=ImportContainerHandling.tot_disch_mty_teus;
    
     
      }
      
    });



    this.handlingReportService.getExportHandlingReport(tmp_rot_no,this.workDateContainer).subscribe(data=>{
      this.ExportContainerHandling=data;
      console.log("ImportContainerHandling:"+this.ImportContainerHandling);
      console.log("data:",data);
      for (let ExportContainerHandling of data) {
      

        this.bal_load20=ExportContainerHandling.bal_load20;
        this.bal_load40=ExportContainerHandling.bal_load40;
        this.bal_load_teus=ExportContainerHandling.bal_load_teus;
        this.bal_mty20=ExportContainerHandling.bal_mty20;
        this.bal_mty40=ExportContainerHandling.bal_mty40;
        this.bal_mty_teus=ExportContainerHandling.bal_mty_teus;
        this.disch_load20=ExportContainerHandling.disch_load20;
        this.disch_load40=ExportContainerHandling.disch_load40;
        this.disch_mty20=ExportContainerHandling.disch_mty20;
        this.disch_mty40=ExportContainerHandling.disch_mty40;
        this.load_teus=ExportContainerHandling.load_teus;
        this.mty_teus=ExportContainerHandling.mty_teus;
        this.tot_disch_load20=ExportContainerHandling.tot_disch_load20;
        this.tot_disch_load40=ExportContainerHandling.tot_disch_load40;
        this.tot_disch_load_teus=ExportContainerHandling.tot_disch_load_teus;
        this.tot_disch_mty20=ExportContainerHandling.tot_disch_mty20;
        this.tot_disch_mty40=ExportContainerHandling.tot_disch_mty40;
        this.tot_disch_mty_teus=ExportContainerHandling.tot_disch_mty_teus;




      }
      
    });



  }



  print(){

    window.print();
    this.show=false;
  }
  



  Screen()
{  
    var data = document.getElementById('content');  
    html2canvas(this.ExportContainerHandling).then(canvas => {  
        // Few necessary setting options  
        var imgWidth = 208;   
        var pageHeight = 295;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  

        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
        var position = 0;  
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
        pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
}

}
