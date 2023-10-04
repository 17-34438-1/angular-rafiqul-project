import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportRotationWiseExportContainerService } from '../service/ExportReports/export-rotation-wise-export-container/export-rotation-wise-export-container.service';

@Component({
  selector: 'app-export-rotation-wise-export-container-form',
  templateUrl: './export-rotation-wise-export-container-form.component.html',
  styleUrls: ['./export-rotation-wise-export-container-form.component.css']
})
export class ExportRotationWiseExportContainerFormComponent implements OnInit {
  fromDate:any;
  toDate:any;
  exportCommentByShipping:any;
  options:any;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private rotationWiseExportContainerService:ExportRotationWiseExportContainerService
  ) { }

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
      this.rotationWiseExportContainerService.getExportRotationWiseExportContainer(this.fromDate,this.toDate).subscribe(data=>{
      this.exportCommentByShipping=data;
      console.log("excel Data:"+data);
   
      this.rotationWiseExportContainerService.getResultWithExcel(data, this.fromDate,this.toDate);
 });


}

  if (this.options == "html") {
    console.log("helow world");
    console.log("Form Date:"+this.fromDate);
    console.log("To Date:"+this.toDate);

    localStorage.setItem("export_rotation_wise_export_container_fromDate",this.fromDate);
    localStorage.setItem("export_rotation_wise_export_container_toDate",this.toDate);

    this.router.navigate([]).then(data => window.open('exportReports/export-rotation-wise-export-container/list', '_blank'));
  }
  }

}
