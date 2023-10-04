import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DgContainerByRotationService } from '../service/DgReport/dg-container-by-rotation/dg-container-by-rotation.service';

@Component({
  selector: 'app-dg-container-by-rotation-form',
  templateUrl: './dg-container-by-rotation-form.component.html',
  styleUrls: ['./dg-container-by-rotation-form.component.css']
})
export class DgContainerByRotationFormComponent implements OnInit {
  tmp_rot_no:any;
  dgInfo:any;
  rotation_no:any;
  options:any;
  constructor(

    private toastr:ToastrService,
    private router: Router,
    private dgContainerByRotation: DgContainerByRotationService,

  ) { }

  ngOnInit(): void {
  }


  onSubmit(){

    if(this.options=="xl")
    {

      var rotation_no=this.rotation_no;
      console.log(rotation_no);
      var tmp_rot_no=rotation_no.toString().replace("/","_");
      console.log( tmp_rot_no);

      let response=this.dgContainerByRotation.ContainerByRotation(tmp_rot_no);
      response.subscribe(data=>{
        this.dgInfo=data;
        this.tmp_rot_no=localStorage.getItem("rotation_no");
        this.rotation_no=tmp_rot_no.toString().replace("_","/");
    
        this.dgContainerByRotation.getResultWithExcel(data,this.rotation_no);
  
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
  this.router.navigate([]).then(data=>window.open('/DgReport/dg-container-report-list','_blank'));

    }

  }

}
