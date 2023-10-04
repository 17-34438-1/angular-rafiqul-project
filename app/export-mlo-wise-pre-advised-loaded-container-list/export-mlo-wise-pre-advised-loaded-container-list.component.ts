
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportMloWisePreAdvisedLoadedContainerService } from '../service/ExportReports/export-mlo-wise-pre-advised-loaded-container/export-mlo-wise-pre-advised-loaded-container.service';

@Component({
  selector: 'app-export-mlo-wise-pre-advised-loaded-container-list',
  templateUrl: './export-mlo-wise-pre-advised-loaded-container-list.component.html',
  styleUrls: ['./export-mlo-wise-pre-advised-loaded-container-list.component.css']
})
export class ExportMloWisePreAdvisedLoadedContainerListComponent implements OnInit {
  tmp_rot_no:any;
  rot_number:any;
  mlo:any;
  cont_id:any;
  seal_no:any;
  rotation_no:any;
  rotation:any;
  rot_no:any;
  offdock:any;
  vsl_name:any;
  goods_and_ctr_wt_kg:any;
  cont_size:any;
  isoType:any;
  last_update:any;
  cont_status:any;
  pod:any;
  MloWisePreAdvisedLoadedContainer:any;
  constructor(

    private router:Router,
    private toastr:ToastrService,
    private exportMloWisePreAdvisedLoadedContainerService:ExportMloWisePreAdvisedLoadedContainerService
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



    
    this.rot_number = localStorage.getItem("export-mlo-wise-pre-advised-loaded-container-list");
    var tmp_rot_no = this.rot_number.toString().replace("/", "_");
    console.log(tmp_rot_no);

    this.exportMloWisePreAdvisedLoadedContainerService.getMloWisePreAdvisedLoadedContainer(tmp_rot_no).subscribe(data => {
      this.MloWisePreAdvisedLoadedContainer = data;
      console.log(data);


      for(let MloWisePreAdvisedLoadedContainer of data){
        this.mlo=MloWisePreAdvisedLoadedContainer.mlo;

      }

      console.log(this.mlo);
    });
    this.rot_number = localStorage.getItem("export-mlo-wise-pre-advised-loaded-container-list");
    this.rotation_no = this.rot_number.toString().replace("_", "/");
  }

  onSubmit(MLO:any){

    console.log(MLO);
    localStorage.setItem("MLO",MLO);
    this.rot_number = localStorage.getItem("export-mlo-wise-pre-advised-loaded-container-list");
    var tmp_rot_no = this.rot_number.toString().replace("/", "_");
    console.log(tmp_rot_no);


  }

  OnSubmit_SummaryList(MLO:any){
    console.log(MLO);
    localStorage.setItem("MLO",MLO);
    this.rot_number = localStorage.getItem("export-mlo-wise-pre-advised-loaded-container-list");
    var tmp_rot_no = this.rot_number.toString().replace("/", "_");
    console.log(tmp_rot_no);


   
  }

}
