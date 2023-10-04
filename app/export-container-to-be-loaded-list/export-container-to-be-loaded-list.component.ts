import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportContainerToBeLoadedService } from '../service/ExportReports/export-container-to-be-loaded/export-container-to-be-loaded.service';

@Component({
  selector: 'app-export-container-to-be-loaded-list',
  templateUrl: './export-container-to-be-loaded-list.component.html',
  styleUrls: ['./export-container-to-be-loaded-list.component.css']
})
export class ExportContainerToBeLoadedListComponent implements OnInit {

  tmp_rot_no:any;
  rotation_no:any;
  voYNo:any;
  exportContainerToBeLoadedContainerList:any;
  ContainerBalanceList:any;
  vsl_Name:any;
  ata:any;
  atd:any;
  containerVoyNo:any;

  constructor(
    private toastr:ToastrService,
    private router: Router,
    private exportContainerToBeLoaded:ExportContainerToBeLoadedService
   
  ) { }

  ngOnInit(): void {

    this.tmp_rot_no = localStorage.getItem("export_container_to_be_loaded_tmp_rot_no");
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
    this.exportContainerToBeLoaded.getVoyNo(tmp_rot_no).subscribe(data => {
      this.containerVoyNo = data;
      console.log(data);
      for (let mlo_excel_uploaded of data) {
        this.voYNo = mlo_excel_uploaded.voy_No;

      }
      console.log(this.voYNo);

    });

    this.exportContainerToBeLoaded.getContainerVesselInfo(tmp_rot_no).subscribe(data => {
      this.containerVoyNo = data;
      console.log(data);
      for (let mlo_excel_uploaded of data) {
      
        this.vsl_Name = mlo_excel_uploaded.vsl_name;
        this.ata = mlo_excel_uploaded.ata;
        this.atd=mlo_excel_uploaded.atd;

      }
      console.log(this.voYNo);

    });

    this.exportContainerToBeLoaded.getLoadedContainerBalanceList(tmp_rot_no).subscribe(data => {
      this.ContainerBalanceList = data;
      console.log(data);  

    });    
    
        let response = this.exportContainerToBeLoaded.getContainerList(tmp_rot_no);
        response.subscribe(data => {
          console.log(data);
          this.exportContainerToBeLoadedContainerList = data;
        })

    this.tmp_rot_no = localStorage.getItem("export_container_to_be_loaded_tmp_rot_no");
    this.rotation_no = tmp_rot_no.toString().replace("_", "/");

    console.log(this.rotation_no);
}
  }
 

