import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DateWiseBillOfEntryReportService } from '../service/HeadDelivery/DateWiseBillOfEntryReport/date-wise-bill-of-entry-report.service';
import 'jspdf-autotable';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
@Component({
  selector: 'app-date-wise-bill-of-entry-report',
  templateUrl: './date-wise-bill-of-entry-report.component.html',
  styleUrls: ['./date-wise-bill-of-entry-report.component.css']
})
export class DateWiseBillOfEntryReportComponent implements OnInit {
  fromDate:any;
  totalEnty:any;
  containerVesselInfo:any;
  k:number=0;
  j:number=0;
  total:number=0;
  placeDec:String="";

  heading: any = [
    ['GENERAL INFORMATION']
  ];

  constructor(
    private billOfEntryService:DateWiseBillOfEntryReportService,
    private toastr:ToastrService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.fromDate=localStorage.getItem("export_fromDate");
      this.billOfEntryService.getContainerHandling(this.fromDate).subscribe(data => {
      this.containerVesselInfo = data;

      for (let containerVesselInfo of data) {
      
          this.totalEnty = containerVesselInfo.totalEnty;
   
    
      }

      this.viewGeneralReportPdf();
      console.log(data);      
    });
  }



  
  public viewGeneralReportPdf() {

    let pdf = new jsPDF()

    // for head 0ne
    autoTable(pdf, {
      head: this.heading,
      bodyStyles: {
        lineWidth: 0.3,
        lineColor: [0, 0, 0],
        fontSize: 10,
      }, theme: 'plain',

      margin: {
        left: 3,
        right: 4,
      },

    })


    //table1
    autoTable(pdf, {
      head: [['Total Number Of BL', 'Total Number Of Packages ', 'Total Number Of Containers', 'Total Gross Mass']],
      body: [[this.containerVesselInfo.ip_address, this.containerVesselInfo.total]],
      headStyles: {
        lineWidth: 0.3,
        lineColor: [0, 0, 0],
        fontSize: 9,
        fontStyle: 'bold',
        halign: 'center'
      },
      bodyStyles: {
        lineWidth: 0.3,
        lineColor: [0, 0, 0],
        fontSize: 8,
        halign: 'center'
      },
      theme: 'plain',
      margin: {
        left: 2,
        right: 2,
 
      },
    
    })


    pdf.output('dataurlnewwindow');

  }


}
