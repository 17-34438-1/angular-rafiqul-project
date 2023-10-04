import { Component, OnInit } from '@angular/core';
import { DgContainersDischargeService }  from '../service/dg-containers-discharge/dg-containers-discharge.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dg-containers-discharge-general-list',
  templateUrl: './dg-containers-discharge-general-list.component.html',
  styleUrls: ['./dg-containers-discharge-general-list.component.css']
})
export class DgContainersDischargeGeneralListComponent implements OnInit {
  vname:any;
  rot_no:any;
  rot_number:any;
  rotation_no:any;
  dgInformation:any[];
  flag:any;
  style:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private dgContainersDischargeService:DgContainersDischargeService
  ) { 
    this.dgInformation=[];
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

    

    var rotation_no=this.rot_no;
    this.rot_number=localStorage.getItem("tmp_rot_no");
    var tmp_rot_no=this.rot_number.toString().replace("/","_");
    console.log(tmp_rot_no);

 
    this.dgContainersDischargeService.Discharg(tmp_rot_no).subscribe(data=>{
      this.dgInformation=data;
     console.log(data);
     
      // const myArray = data;
      // myArray.forEach((element: { vessel_Name: any; }, index: any, array: any) => {
      //   if(element.vessel_Name != null){
      //     this.vname = element.vessel_Name;
      //     console.log("this.vname : "+this.vname);
      //   }
      // });
      // console.log("Outside : " + this.vname);

      for (let vnamedata of data) {
        if(vnamedata.vessel_Name != null){
          this.vname = vnamedata.vessel_Name;
          this.flag=vnamedata.flag;

          
          if(this.flag=="DG_CONTAINER_DISCHARGE_SUMMARY")
          {
            //this.isShown=true;
            console.log("hellow World");
             //  this.router.navigate(['/login']);
            // document.getElementById("flag").style.display = "none";
            this.style.display="none";
           
          }

        }  
   
     console.log("flag:"+this.flag);         
      }
    });

    var rotation_no=this.rot_no;
    this.rot_number=localStorage.getItem("tmp_rot_no");
    this.rotation_no=this.rot_number.toString().replace("_","/");
  }

}
