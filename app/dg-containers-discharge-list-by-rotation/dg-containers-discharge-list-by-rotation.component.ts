import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DgContainersDischargeService }  from '../service/dg-containers-discharge/dg-containers-discharge.service';

@Component({
  selector: 'app-dg-containers-discharge-list-by-rotation',
  templateUrl: './dg-containers-discharge-list-by-rotation.component.html',
  styleUrls: ['./dg-containers-discharge-list-by-rotation.component.css']
})
export class DgContainersDischargeListByRotationComponent implements OnInit {
  dgInfo: any[];
  rot_number:any;
  
  tmp_rot_no:any;
  rotation_no:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private dgInfoService:DgContainersDischargeService,
  ) { 
    this.dgInfo=[];
  }

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

      this.rot_number=localStorage.getItem("dg_container_discharge_list_by_tmp_rot_no");
      var tmp_rot_no=this.rot_number.toString().replace("/","_");
       console.log(tmp_rot_no);
       console.log( tmp_rot_no);
       this.dgInfoService.DischargByRotation(tmp_rot_no).subscribe(data => {
        this.dgInfo=data;
       
        console.log(data);
        //this.router.navigate(['/dg/dg-cont-discharge-summary-list']);
     
      });
  
       this.tmp_rot_no=localStorage.getItem("dg_container_discharge_list_by_rotation_no");
      this.rotation_no=tmp_rot_no.toString().replace("_","/");
  
      console.log(this.rotation_no);
  }

}
