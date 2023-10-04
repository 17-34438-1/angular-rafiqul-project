import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportDestinationWiseMloLoadedContainerService } from '../service/ExportReports/export-destination-wise-mlo-loaded-container/export-destination-wise-mlo-loaded-container.service';

@Component({
  selector: 'app-export-destination-wise-mlo-loaded-container-form',
  templateUrl: './export-destination-wise-mlo-loaded-container-form.component.html',
  styleUrls: ['./export-destination-wise-mlo-loaded-container-form.component.css']
})
export class ExportDestinationWiseMloLoadedContainerFormComponent implements OnInit {
rotation_no:any;
options:any;

  constructor(
    private toastr:ToastrService,
    private router: Router,
    private exportDestinationWiseMloLoadedContainer:ExportDestinationWiseMloLoadedContainerService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){

      console.log("helow world");
      var rotation_no = this.rotation_no;
      console.log(rotation_no);
      localStorage.setItem("export_Destination_WiseMlo_LoadedContainer", rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);
      this.router.navigate([]).then(data => window.open('exportReports/export-destination-wise-mlo-loaded-container/list', '_blank'));
    
  }
}
