import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportMloWiseLoadedContainerService } from '../service/ExportReports/export-mlo-wise-loaded-container/export-mlo-wise-loaded-container.service';

@Component({
  selector: 'app-export-mlo-wise-loaded-container-form',
  templateUrl: './export-mlo-wise-loaded-container-form.component.html',
  styleUrls: ['./export-mlo-wise-loaded-container-form.component.css']
})
export class ExportMloWiseLoadedContainerFormComponent implements OnInit {
  rotation_no:any;
  constructor(

    private toastr:ToastrService,
    private router: Router,
    private exportMloWiseLoadedContainerInformation:ExportMloWiseLoadedContainerService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){

    console.log("helow world");
    var rotation_no = this.rotation_no;
    console.log(rotation_no);
    localStorage.setItem("export_MloWiseLoadedContainer", rotation_no);
    var tmp_rot_no = rotation_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
    this.router.navigate([]).then(data => window.open('exportReports/export-mlo-wise-loaded-container/list', '_blank'));
  }

}
