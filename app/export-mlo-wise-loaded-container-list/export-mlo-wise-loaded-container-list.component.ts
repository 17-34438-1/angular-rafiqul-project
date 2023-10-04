import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportMloWiseLoadedContainerService } from '../service/ExportReports/export-mlo-wise-loaded-container/export-mlo-wise-loaded-container.service';

@Component({
  selector: 'app-export-mlo-wise-loaded-container-list',
  templateUrl: './export-mlo-wise-loaded-container-list.component.html',
  styleUrls: ['./export-mlo-wise-loaded-container-list.component.css']
})
export class ExportMloWiseLoadedContainerListComponent implements OnInit {
  tmp_rot_no:any;
  rotation_no:any;
  voYNo:any;

  containerOnboardInfo:any;

  mlo:String="";
  cont_mlo:String="";
  total:number=0;
  orgNameShowStatus:Boolean=false;
  totalShowStatus:Boolean=false;
  j:number=0;
  i:number=0;
  vsl_Name:any;
  ata:any;
  atd:any;
  containerVoyNo:any;
  containerInfo:any;
  mlo_excel_uploaded:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private exportMloWiseLoadedContainerInformation:ExportMloWiseLoadedContainerService
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

    this.tmp_rot_no = localStorage.getItem("export_mlo_wise_excel_uploaded_tmp_rot_no");
    var tmp_rot_no = this.tmp_rot_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
    this.exportMloWiseLoadedContainerInformation.getVoyNo(tmp_rot_no).subscribe(data => {
      this.containerVoyNo = data;
      console.log(data);
      for (let mlo_excel_uploaded of data) {
        this.voYNo = mlo_excel_uploaded.voy_No;

      }
      console.log(this.voYNo);

    });


    this.exportMloWiseLoadedContainerInformation.getContainerVesselInfo(tmp_rot_no).subscribe(data => {
      this.containerVoyNo = data;
      console.log(data);
      for (let mlo_excel_uploaded of data) {
      
        this.vsl_Name = mlo_excel_uploaded.vsl_name;
        this.ata = mlo_excel_uploaded.ata;
        this.atd=mlo_excel_uploaded.atd;

      }
      console.log(this.voYNo);

    });

    this.exportMloWiseLoadedContainerInformation.getLoadedContainerOnboardList(tmp_rot_no).subscribe(data => {
      this.containerOnboardInfo = data;
      console.log(data);


    });

    this.exportMloWiseLoadedContainerInformation.getLoadedContainerBalanceList(tmp_rot_no).subscribe(data => {
      this.containerInfo = data;
      console.log(data);
     

    });



    let response = this.exportMloWiseLoadedContainerInformation.getContainerList(tmp_rot_no);
    response.subscribe(data => {
      console.log(data);
      this.mlo_excel_uploaded = data;
    })




    this.tmp_rot_no = localStorage.getItem("export_mlo_wise_excel_uploaded_tmp_rot_no");
    this.rotation_no = tmp_rot_no.toString().replace("_", "/");

    console.log(this.rotation_no);

  }


  setOffDock(mlo:String){
    if(mlo!=this.mlo){
      if(this.j > 0){
        this.total=this.j;
    
        this.totalShowStatus=true;
     }
     this.orgNameShowStatus=true;
     this.j=1;
    }
    else{
      this.totalShowStatus=false;
      this.orgNameShowStatus=false;
      this.j=this.j+1;
    }
    this.mlo=mlo;

      
  }

}
