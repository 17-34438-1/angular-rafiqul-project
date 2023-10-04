import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportMloWisePreAdvisedLoadedContainerService } from '../service/ExportReports/export-mlo-wise-pre-advised-loaded-container/export-mlo-wise-pre-advised-loaded-container.service';

@Component({
  selector: 'app-export-mlo-wise-pre-advice-view-list',
  templateUrl: './export-mlo-wise-pre-advice-view-list.component.html',
  styleUrls: ['./export-mlo-wise-pre-advice-view-list.component.css']
})
export class ExportMloWisePreAdviceViewListComponent implements OnInit {
  rot_number:any;
  MLO:any;
  tmp_rot_no:any;
  MloWisePreAdvisedList:any;
  MloWisePreAdvisedLoadedContainer:any;
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
  activatedRoute: any;

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

  this.MLO=localStorage.getItem("MLO");
 

   this.rot_number = localStorage.getItem("export-mlo-wise-pre-advised-loaded-container-list");
   var tmp_rot_no = this.rot_number.toString().replace("/", "_");
   console.log(tmp_rot_no);
  this.exportMloWisePreAdvisedLoadedContainerService.getMloWisePreAdvisedListView(tmp_rot_no,this.MLO).subscribe(data => {
    this.MloWisePreAdvisedList = data;
    console.log(data);
    console.log(tmp_rot_no);
     console.log("cont_mlo:"+this.MLO);
    for(let MloWisePreAdvisedList of data)
    {
      this.cont_id=MloWisePreAdvisedList.cont_id;
      this.cont_size=MloWisePreAdvisedList.cont_size;
      this.goods_and_ctr_wt_kg=MloWisePreAdvisedList.goods_and_ctr_wt_kg;
      this.seal_no=MloWisePreAdvisedList.seal_no;
      
      this.MLO=MloWisePreAdvisedList.cont_mlo;
      this.isoType=MloWisePreAdvisedList.isoType;
      this.offdock=MloWisePreAdvisedList.offdock;
      this.vsl_name=MloWisePreAdvisedList.vsl_name;
      this.rotation=MloWisePreAdvisedList.rotation;
      this.last_update=MloWisePreAdvisedList.last_update;
      this.cont_status=MloWisePreAdvisedList.cont_status;
      this.pod=MloWisePreAdvisedList.pod;
      
    }
    console.log(this.cont_id);
    console.log(this.cont_size);
    console.log(this.goods_and_ctr_wt_kg);
    console.log(this.seal_no);

    console.log(this.MLO);
    console.log(this.isoType);
    console.log(this.offdock);
    console.log(this.vsl_name);
    console.log(this.last_update);
    console.log(this.rotation);
    console.log(this.cont_status);
    console.log(this.pod);

  });
  
  
  }

}
