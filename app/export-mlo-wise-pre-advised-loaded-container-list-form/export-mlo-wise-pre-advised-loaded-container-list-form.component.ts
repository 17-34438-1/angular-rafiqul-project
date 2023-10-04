import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportMloWisePreAdvisedLoadedContainerService } from '../service/ExportReports/export-mlo-wise-pre-advised-loaded-container/export-mlo-wise-pre-advised-loaded-container.service';

@Component({
  selector: 'app-export-mlo-wise-pre-advised-loaded-container-list-form',
  templateUrl: './export-mlo-wise-pre-advised-loaded-container-list-form.component.html',
  styleUrls: ['./export-mlo-wise-pre-advised-loaded-container-list-form.component.css']
})
export class ExportMloWisePreAdvisedLoadedContainerListFormComponent implements OnInit {
  
rot_no:any;
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

  }


onSubmit(){


  var rotation_no=this.rot_no;
  var tmp_rot_no=rotation_no.toString().replace("/","_");
  console.log( tmp_rot_no);
  localStorage.setItem("export-mlo-wise-pre-advised-loaded-container-list",tmp_rot_no);
  this.exportMloWisePreAdvisedLoadedContainerService.getMloWisePreAdvisedLoadedContainer(tmp_rot_no).subscribe(data=>{
  this.MloWisePreAdvisedLoadedContainer=data;
  console.log(data);


  });
}


}