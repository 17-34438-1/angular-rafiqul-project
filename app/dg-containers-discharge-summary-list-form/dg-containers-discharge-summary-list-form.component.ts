import { Component, OnInit } from '@angular/core';
import { DgContainersDischargeService }  from '../service/dg-containers-discharge/dg-containers-discharge.service';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dg-containers-discharge-summary-list-form',
  templateUrl: './dg-containers-discharge-summary-list-form.component.html',
  styleUrls: ['./dg-containers-discharge-summary-list-form.component.css']
})
export class DgContainersDischargeSummaryListFormComponent implements OnInit {
rot_no:any;
flag:any;
vname:any;
dgInfo:any[];
isShown: boolean =true;
isShow: boolean = false;
  constructor(
    private router:Router,
    private toastr:ToastrService,
    private dgInfoService: DgContainersDischargeService,
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
  }

  onSubmit(){
    var rotation_no=this.rot_no;
    var tmp_rot_no=rotation_no.toString().replace("/","_");
    console.log( tmp_rot_no);
    localStorage.setItem("dg_cont_discharge_summary_list_tmp_rot_no",tmp_rot_no);
    this.dgInfoService.Discharg(tmp_rot_no).subscribe(data=>{
      this.dgInfo=data;
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
        if(vnamedata.flag != null){
          this.vname = vnamedata.vessel_Name;
          this.flag=vnamedata.flag;
         // if(this.flag=="DG_CONTAINER_DISCHARGE_SUMMARY")
          //{
            // this.isShown=!this.isShown
            //    this.router.navigate(['/dg/dg-cont-discharge-summary-list']);
            // console.log("hellow World");

          //  const url = this.router.serializeUrl(
           //   this.router.createUrlTree(['/dg/dg-cont-discharge-summary-list'])
           // );
           // window.open(url, '_blank');
             //  this.router.navigate(['/login']);
            // document.getElementById("flag").style.display = "none";
            //this.style.display="none";
           
          //}


         // if(this.flag=="GENERAL_INFORMATION"){
            // /dg/dg-containers-discharge-general-list
           // this.isShow=!this.isShow

          //  const url = this.router.serializeUrl(
           //   this.router.createUrlTree(['/dg/dg-containers-discharge-general-list'])
           // );
           // window.open(url, '_blank');
              // this.router.navigate(['/dg/dg-cont-discharge-summary-list']);
              //this.router.navigate(['/dg/dg-containers-discharge-general-list']);
            
         // }
         
        }  
   
     console.log("flag:"+this.flag);         
      }

      
    });

}

}
