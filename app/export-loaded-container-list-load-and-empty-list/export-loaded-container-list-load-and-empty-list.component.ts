import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ExportDestinationWiseMloLoadedContainerService } from '../service/ExportReports/export-destination-wise-mlo-loaded-container/export-destination-wise-mlo-loaded-container.service';
import { ExportLoadedContainerListLoadAndEmptyServiceService } from '../service/ExportReports/export-Loaded-container-list-load-and-empty-service/export-loaded-container-list-load-and-empty-service.service';

@Component({
  selector: 'app-export-loaded-container-list-load-and-empty-list',
  templateUrl: './export-loaded-container-list-load-and-empty-list.component.html',
  styleUrls: ['./export-loaded-container-list-load-and-empty-list.component.css']
})
export class ExportLoadedContainerListLoadAndEmptyListComponent implements OnInit {
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
  balance_LD_20:any;
  balance_LD_40:any;
  balance_MT_20:any;
  balance_MT_40:any;
  balance_LD_tues:any;
  balance_MT_tues:any;

  containerBalanceInfo:any;
  containerOnboardInfo:any;
  containerVesselInfo:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private exportLoadedContainerListLoadAndEmptyService:ExportLoadedContainerListLoadAndEmptyServiceService
  ) { }

  ngOnInit(): void {

    
    this.tmp_rot_no = localStorage.getItem("export_loaded_container_list_load_and_empty_list");
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
  

    this.exportLoadedContainerListLoadAndEmptyService.getLoadedContainerVesselInfo(tmp_rot_no).subscribe(data => {
      this.containerVesselInfo = data;
      console.log(data);
      for (let containerVesselInfo of data) {
        this.vsl_Name = containerVesselInfo.vsl_name;
        this.berth_op=containerVesselInfo.berth_op;
        this.berth=containerVesselInfo.berth;
      }
      console.log(this.voYNo);

    });


    this.exportLoadedContainerListLoadAndEmptyService.getLoadedContainerOnboardList(tmp_rot_no).subscribe(data => {
      this.containerOnboardInfo = data;
      console.log(data);


    });

    this.exportLoadedContainerListLoadAndEmptyService.getLoadedContainerBalanceList(tmp_rot_no).subscribe(data => {
      this.containerBalanceInfo = data;
      console.log(data);

  
      for (let containerBalanceInfo of data) {
        this.balance_LD_20 = containerBalanceInfo.balance_LD_20;
        this.balance_LD_40=containerBalanceInfo.balance_LD_40;
        this.balance_MT_20=containerBalanceInfo.balance_MT_20;
        this.balance_MT_40 = containerBalanceInfo.balance_MT_40;
        this.balance_LD_tues=containerBalanceInfo.balance_LD_tues;
        this.balance_MT_tues=containerBalanceInfo.balance_MT_tues;
      }

    });


    let response = this.exportLoadedContainerListLoadAndEmptyService.getLoadedContainerList(tmp_rot_no);
    response.subscribe(data => {
      console.log(data);
      this.containerList = data;
    })


   



    this.tmp_rot_no = localStorage.getItem("export_loaded_container_list_load_and_empty_list");
    this.rotation_no = tmp_rot_no.toString().replace("_", "/");

    console.log(this.rotation_no);
  }
  

}
