import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DgManifestReportService } from '../service/DgReport/dg-manifest-report/dg-manifest-report.service';

@Component({
  selector: 'app-dg-manifest-list',
  templateUrl: './dg-manifest-list.component.html',
  styleUrls: ['./dg-manifest-list.component.css']
})
export class DgManifestListComponent implements OnInit {
  dgInfo: any;
  dgManifestReports:any;
  rot_number:any;
  
  tmp_rot_no:any;
  rotation_no:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private dgManifestReport: DgManifestReportService,
  ) { 

  }

  ngOnInit(): void {

    this.rot_number=localStorage.getItem("dg_manifest_tmp_rot_no");
    var tmp_rot_no=this.rot_number.toString().replace("/","_");
     console.log(tmp_rot_no);
     console.log( tmp_rot_no);
     this.dgManifestReport.DischargByRotation(tmp_rot_no).subscribe(data => {
      this.dgInfo=data;     
      console.log(data);   
    });
     this.tmp_rot_no=localStorage.getItem("dg_manifest_tmp_rot_no");
    this.rotation_no=tmp_rot_no.toString().replace("_","/");
    console.log(this.rotation_no);

  }

}
