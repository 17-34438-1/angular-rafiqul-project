import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportRotationWiseContainerInformationService } from '../service/ExportReports/export-rotation-wise-container-information/export-rotation-wise-container-information.service';

@Component({
  selector: 'app-export-rotation-wise-container-information-list',
  templateUrl: './export-rotation-wise-container-information-list.component.html',
  styleUrls: ['./export-rotation-wise-container-information-list.component.css']
})
export class ExportRotationWiseContainerInformationListComponent implements OnInit {
  ata:any;
  vessel_Name:any;
  rotation_no:any;
  tmp_rot_no:any;
  RotationWiseExportContainer:any;
  options:any;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private exportRotationWiseContainerInformation:ExportRotationWiseContainerInformationService
  ) { }

  ngOnInit(): void {
    
    this.tmp_rot_no = localStorage.getItem("export_RotationWiseContainerInformation");
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);


    this.exportRotationWiseContainerInformation.getRotationWiseContainerInformation(tmp_rot_no).subscribe(data=>{
      this.RotationWiseExportContainer=data;
      console.log("excel Data:"+this.RotationWiseExportContainer);
      console.log("data:",data);
      for (let RotationWiseExportContainer of data) {
      
        this.vessel_Name=RotationWiseExportContainer.vessel_Name
        
      }
      console.log("vessel_Name:"+this.vessel_Name);
    });

    
  }

}
