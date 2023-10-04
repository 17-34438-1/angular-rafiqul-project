import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DgManifestReportService } from '../service/DgReport/dg-manifest-report/dg-manifest-report.service';

@Component({
  selector: 'app-dg-manifest-form',
  templateUrl: './dg-manifest-form.component.html',
  styleUrls: ['./dg-manifest-form.component.css']
})
export class DgManifestFormComponent implements OnInit {
  tmp_rot_no:any;
  dgInfo:any;
  rotation_no:any;
  options:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private dgManifestReport: DgManifestReportService,
  ) { 

  }

  ngOnInit(): void {
  }

  onSubmit(){

    if(this.options=="xl")
    {

      var rotation_no=this.rotation_no;
      console.log(rotation_no);
      var tmp_rot_no=rotation_no.toString().replace("/","_");
      console.log( tmp_rot_no);

      let response=this.dgManifestReport.DischargByRotation(tmp_rot_no);
      response.subscribe(data=>{
        this.dgInfo=data;
        this.tmp_rot_no=localStorage.getItem("rotation_no");
        this.rotation_no=tmp_rot_no.toString().replace("_","/");
    
        this.dgManifestReport.getResultWithExcel(data,this.rotation_no);
  
      });
   
      console.log(this.rotation_no);
      console.log("hellow");
 
    }
  if(this.options=="html")
  {
 
console.log("helow world");

 var rotation_no=this.rotation_no;
 console.log(rotation_no);
  localStorage.setItem("dg_manifest_tmp_rot_no",rotation_no);
 var tmp_rot_no=rotation_no.toString().replace("/","_");
 console.log( tmp_rot_no);
 localStorage.setItem("dg_manifest_tmp_rot_no",tmp_rot_no);
this.router.navigate([]).then(data=>window.open('/DgReport/dg-manifest-list','_blank'));

  }

  }

}
