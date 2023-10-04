import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportDateAndRotationWisePreAdvisedContainerService } from '../service/ExportReports/export-date-and-rotation-wise-pre-advised-container/export-date-and-rotation-wise-pre-advised-container.service';

@Component({
  selector: 'app-export-date-and-rotation-wise-pre-advised-container-list',
  templateUrl: './export-date-and-rotation-wise-pre-advised-container-list.component.html',
  styleUrls: ['./export-date-and-rotation-wise-pre-advised-container-list.component.css']
})
export class ExportDateAndRotationWisePreAdvisedContainerListComponent implements OnInit {
  fromdate:any;
  tmp_rot_no:any;
  rotation:any;
  rotation_no_pre_advised:any;
  rotation_no:any;
  rotation_no_pre_advised_container:any;
  containerDateAndRotation:any;
  containerBlockReport:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private mlo_wise_excel_uploaded:ExportDateAndRotationWisePreAdvisedContainerService
   

  ) { }

  ngOnInit(): void {


       
    if(localStorage['status']!=1)
    {
    
      this.router.navigate(['/login']);
      this.toastr.error('Login and try again.', 'Error',{
    
        disableTimeOut: true,
        tapToDismiss: false,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass:'toast-center-center',
        closeButton:true
      });
      return;
    }  



   this.fromdate= localStorage.getItem("fromDate");
    this.tmp_rot_no = localStorage.getItem("date_tmp_rot_no");
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log("tmp_rot_no for Date and rotation:"+tmp_rot_no);
    console.log(this.fromdate);
    this.mlo_wise_excel_uploaded.getContainerList(tmp_rot_no,this.fromdate).subscribe(data => {
      this.containerDateAndRotation = data;
      console.log(data);
      for (let containerDateAndRotation of data) {
        this.rotation = containerDateAndRotation.rotation;
      }
      console.log(this.rotation);

    });
   
}

}
