import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportCommentsByShippingSectionOnExportVesselService } from '../service/ExportReports/export-comments-by-shipping-section-on-export-vessel/export-comments-by-shipping-section-on-export-vessel.service';

@Component({
  selector: 'app-export-comments-by-shipping-section-on-export-vessel-form',
  templateUrl: './export-comments-by-shipping-section-on-export-vessel-form.component.html',
  styleUrls: ['./export-comments-by-shipping-section-on-export-vessel-form.component.css']
})
export class ExportCommentsByShippingSectionOnExportVesselFormComponent implements OnInit {
  fromDate:any;
  toDate:any;
  exportCommentByShipping:any;
  options:any;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private exportcommentByShippingSection:ExportCommentsByShippingSectionOnExportVesselService
  ) {

   

   }

  ngOnInit(): void {

    
    if (localStorage['status'] != 1) {
     
      this.router.navigate(['/login']);
      this.toastr.error('Login and try again.', 'Error', {
        disableTimeOut: true,
        tapToDismiss: false,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-center-center',
        closeButton: true
      });
      return;
    }
  }
  

  onSubmit(){
    if (this.options == "xl") {
        console.log("From Date:"+this.fromDate);
        console.log("To Date:"+this.toDate);
        this.exportcommentByShippingSection.getExportCommentsByShippingSection(this.fromDate,this.toDate).subscribe(data=>{
        this.exportCommentByShipping=data;
        console.log("excel Data:"+data);
        this.exportcommentByShippingSection.getResultWithExcel(data, this.fromDate,this.toDate);
    });


  }

    if (this.options == "html") {
      console.log("helow world");
      console.log("Form Date:"+this.fromDate);
      console.log("To Date:"+this.toDate);

      localStorage.setItem("export_comments_by_shipping_fromDate",this.fromDate);
      localStorage.setItem("export_comments_by_shipping_toDate",this.toDate);

      this.router.navigate([]).then(data => window.open('exportReports/comments-by-shipping-section-on-export-vessel/list', '_blank'));
    }
  }

}
