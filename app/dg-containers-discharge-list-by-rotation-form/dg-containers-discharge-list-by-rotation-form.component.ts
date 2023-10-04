import { Component, OnInit } from '@angular/core';
import { DgContainersDischargeService }  from '../service/dg-containers-discharge/dg-containers-discharge.service';
import {Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dg-containers-discharge-list-by-rotation-form',
  templateUrl: './dg-containers-discharge-list-by-rotation-form.component.html',
  styleUrls: ['./dg-containers-discharge-list-by-rotation-form.component.css']
})
export class DgContainersDischargeListByRotationFormComponent implements OnInit {
  rotation_no:any;
  options:any;
  dgInfo:any;
  data:any;
  row:any;  
  rot_number:any;
  shift: any;
  tmp_rot_no: any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private dgInfoService: DgContainersDischargeService,
  
  ) { }

  ngOnInit(): void {

    if(localStorage['status']!=1)
    {
      // console.log("### User logged out already ### ");
      this.router.navigate(['/login']);
      this.toastr.error('Login and try again.', 'Error',{
        // timeOut:5000,
        disableTimeOut: true,
        tapToDismiss: false,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass:'toast-center-center',
        closeButton:true
      });
      return;
    }
  }
  onSubmit(){
    if(this.options=="xl")
    {

      var rotation_no=this.rotation_no;
      console.log(rotation_no);
      var tmp_rot_no=rotation_no.toString().replace("/","_");
      console.log( tmp_rot_no);

      let response=this.dgInfoService.DischargByRotation(tmp_rot_no);
      response.subscribe(data=>{
        this.dgInfo=data;
        this.tmp_rot_no=localStorage.getItem("rotation_no");
        this.rotation_no=tmp_rot_no.toString().replace("_","/");
    
      this.dgInfoService.getResultWithExcel(data,this.rotation_no);
  
      });
   
      console.log(this.rotation_no);
      console.log("hellow");
 
    }
  if(this.options=="html")
  {
 
console.log("helow world");

 var rotation_no=this.rotation_no;
 console.log(rotation_no);
  localStorage.setItem("dg_container_discharge_list_by_rotation_no:",rotation_no);
 var tmp_rot_no=rotation_no.toString().replace("/","_");
 console.log( tmp_rot_no);
 localStorage.setItem("dg_container_discharge_list_by_tmp_rot_no",tmp_rot_no);

this.router.navigate([]).then(data=>window.open('/dg/dg-containers-discharge-list-by-rotation','_blank'));

  }

  }

}
