import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportRotationWiseExportContainerService } from '../service/ExportReports/export-rotation-wise-export-container/export-rotation-wise-export-container.service';

@Component({
  selector: 'app-export-rotation-wise-export-container-list',
  templateUrl: './export-rotation-wise-export-container-list.component.html',
  styleUrls: ['./export-rotation-wise-export-container-list.component.css']
})
export class ExportRotationWiseExportContainerListComponent implements OnInit {
  fromDate:any;
  toDate:any;
  ata:any;
  v_name:any;
  exportCommentByShipping:any;
  options:any;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private exportRotationWiseExportContainer:ExportRotationWiseExportContainerService
  ) { }

  ngOnInit(): void {
 
    this.fromDate=localStorage.getItem("export_rotation_wise_export_container_fromDate");
    this.toDate=localStorage.getItem("export_rotation_wise_export_container_toDate");
    console.log("From Date:"+this.fromDate);
    console.log("To Date:"+this.toDate);

    this.exportRotationWiseExportContainer.getExportRotationWiseExportContainer(this.fromDate,this.toDate).subscribe(data=>{
      this.exportCommentByShipping=data;
      console.log("excel Data:"+this.exportCommentByShipping);
console.log(data)
      for (let exportCommentByShipping of data) {
        this.ata = exportCommentByShipping.ata;
        this.v_name=exportCommentByShipping.v_name
        
      }
      console.log(this.ata);
   
    
 });

 
}

}
