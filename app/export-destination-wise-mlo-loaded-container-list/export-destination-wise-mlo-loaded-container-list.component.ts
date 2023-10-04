import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportDestinationWiseMloLoadedContainerService } from '../service/ExportReports/export-destination-wise-mlo-loaded-container/export-destination-wise-mlo-loaded-container.service';
@Component({
  selector: 'app-export-destination-wise-mlo-loaded-container-list',
  templateUrl: './export-destination-wise-mlo-loaded-container-list.component.html',
  styleUrls: ['./export-destination-wise-mlo-loaded-container-list.component.css']
})
export class ExportDestinationWiseMloLoadedContainerListComponent implements OnInit {
  voYNo:any;
  tmp_rot_no:any;
  containerVoyNo:any;
  vsl_Name:any;
  ata:any;
  atd:any;
  berth:any;
  containerList:any;
  berth_op:any;
  rotation_no:any;
  containerVesselInfo:any;
  constructor(

    private toastr:ToastrService,
    private router: Router,
    private exportDestinationWiseMloLoadedContainer:ExportDestinationWiseMloLoadedContainerService
  ) { }

  ngOnInit(): void {


    this.tmp_rot_no = localStorage.getItem("export_Destination_WiseMlo_LoadedContainer");
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
  

    this.exportDestinationWiseMloLoadedContainer.getContainerVesselInfo(tmp_rot_no).subscribe(data => {
      this.containerVesselInfo = data;
      console.log(data);
      for (let containerVesselInfo of data) {
        this.vsl_Name = containerVesselInfo.vsl_name;
        this.berth_op=containerVesselInfo.berth_op;
        this.berth=containerVesselInfo.berth;
      }
      console.log(this.voYNo);

    });




    let response = this.exportDestinationWiseMloLoadedContainer.getContainerList(tmp_rot_no);
    response.subscribe(data => {
      console.log(data);
      this.containerList = data;
    })




    this.tmp_rot_no = localStorage.getItem("export_container_block_report_rotation_no");
    this.rotation_no = tmp_rot_no.toString().replace("_", "/");

    console.log(this.rotation_no);
  }

  

}
