import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangeContainerStatusService } from '../service/IgmOperation/IgmAmendment/change-container-status.service';

@Component({
  selector: 'app-igm-amendment-change-container-status-form',
  templateUrl: './igm-amendment-change-container-status-form.component.html',
  styleUrls: ['./igm-amendment-change-container-status-form.component.css']
})
export class IgmAmendmentChangeContainerStatusFormComponent implements OnInit {
 
  container_no:any;
  bl_no:any;
  rotation_no:any;
  contStatus:any;
  igmType:any;
  igmContId:any;
  loginId:any;
  changeStatus:any;
  constructor(

    private toastr:ToastrService,
    private router: Router,
    private igmAmendment:ChangeContainerStatusService
  ) { 

    this.loginId=localStorage.getItem("loginId");
  }

  ngOnInit(): void {
  }

  onSubmit(){
    var tmp_rot_no = this.rotation_no.toString().replace("/", "_");
     console.log(tmp_rot_no);

  
    // let igmAmendmentStatusChanges = {
    //   container_no: this.container_no,
    //   tmp_rot_no: tmp_rot_no,
    //   bl_no:this.bl_no,
    //   contStatus:this.contStatus,
    //   igmType:this.igmType,
    //   igmContId:this.igmContId

    // }
    // console.log("container_no:"+this.container_no);
    // console.log("tmp_rot_no:"+tmp_rot_no);
    // console.log("bl_no:"+this.bl_no);
    // console.log("contStatus:"+this.contStatus);
    // console.log("igmType:"+this.igmType);
    // console.log("igmContId:"+this.igmContId);

    this.igmAmendment.ChangeContainerStatusByConBlRot(this.container_no,tmp_rot_no,this.bl_no,this.contStatus,this.igmType,this.loginId).subscribe(data => {
   
     console.log("contStatus:"+this.contStatus);

    });

  }




  processChange(){
    var tmp_rot_no = this.rotation_no.toString().replace("/", "_");
    console.log(tmp_rot_no);


    this.igmAmendment.ChangeContainerStatus(this.container_no,tmp_rot_no,this.bl_no).subscribe(data => {
    for (let changeStatus of data) {
        this.contStatus = changeStatus.contStatus;
        this.igmType=changeStatus.igmType;
        this.igmContId=changeStatus.igmContId;
      }
     console.log("contStatus:"+this.contStatus);

    });

  }

}
