import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportLoadedContainerListLoadAndEmptyServiceService } from '../service/ExportReports/export-Loaded-container-list-load-and-empty-service/export-loaded-container-list-load-and-empty-service.service';

@Component({
  selector: 'app-export-loaded-container-list-load-and-empty-form',
  templateUrl: './export-loaded-container-list-load-and-empty-form.component.html',
  styleUrls: ['./export-loaded-container-list-load-and-empty-form.component.css']
})
export class ExportLoadedContainerListLoadAndEmptyFormComponent implements OnInit {
  rotation_no:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private exportDestinationWiseMloLoadedContainer:ExportLoadedContainerListLoadAndEmptyServiceService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){

    console.log("helow world");
    var rotation_no = this.rotation_no;
    console.log(rotation_no);
    localStorage.setItem("export_loaded_container_list_load_and_empty_list", rotation_no);
    var tmp_rot_no = rotation_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
    this.router.navigate([]).then(data => window.open('exportReports/export-loaded-container-list-load-and-empty/list', '_blank'));
  
  }
}
