import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DateWiseBillOfEntryReportService } from '../service/HeadDelivery/DateWiseBillOfEntryReport/date-wise-bill-of-entry-report.service';
import 'jspdf-autotable';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
@Component({
  selector: 'app-date-wise-bill-of-entry-report-form',
  templateUrl: './date-wise-bill-of-entry-report-form.component.html',
  styleUrls: ['./date-wise-bill-of-entry-report-form.component.css']
})
export class DateWiseBillOfEntryReportFormComponent implements OnInit {
  total:any;
  totalEnty:any;
  ip_address:any;
  containerVesselInfo:any;
  mloWiseContainerInfoTableData: any = [];
  fromDate:any;
  rsltRepLetPdf: any;
  constructor(
   
    private billOfEntryService:DateWiseBillOfEntryReportService,
    private toastr:ToastrService,
    private router: Router,
  ) { 

  }


  heading: any = [
    ['DATE WISE Bill of Entry REPORT']
  ];

  ngOnInit(): void {
  }

  onSubmit(){

    localStorage.setItem("export_fromDate", this.fromDate);
    this.router.navigate([]).then(data => window.open('headDelivery/date_wise_bill_of_entry_report', '_blank'));
 

    // this.billOfEntryService.getContainerHandling(this.fromDate).subscribe(data => {
    //   this.containerVesselInfo=data;
      
    //   console.log("---"+this.containerVesselInfo.length)
    //   for (var t = 0; t < this.containerVesselInfo.length; t++) {
    //     this.mloWiseContainerInfoTableData.push(
    //       [
    //         this.ip_address= this.containerVesselInfo[t]['ip_address'],
    //         this.total=this.containerVesselInfo[t]['total'],
    //         this.totalEnty=this.containerVesselInfo[t]['totalEnty']

    //       ]
    //     )

    //     console.log("ip_address:"+this.ip_address)
    //     console.log("total:"+this.total)
       
            
    //   }

    //   this.viewGeneralReportPdf();
      
    // });

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
    // body: this.mloWiseContainerInfoTableData,

    //table1
    autoTable(pdf, {
      head: [['Ip Address', 'Total Entry']],
      body: this.mloWiseContainerInfoTableData,
      // body: [[this.containerVesselInfo.ip_address, this.containerVesselInfo.total]],
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
