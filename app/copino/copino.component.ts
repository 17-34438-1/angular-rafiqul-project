import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CopinoService } from '../service/ExportReports/copino/copino.service';
@Component({
  selector: 'app-copino',
  templateUrl: './copino.component.html',
  styleUrls: ['./copino.component.css']
})
export class CopinoComponent implements OnInit {
  rotation: any;
  vname:any;
  options: any;
  rotation_no: any;
  copinoInfo: any;
  constructor(
    
    private toastr:ToastrService,
    private router: Router,
    private copinoService: CopinoService,

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
  onSubmit() {



    if (this.options == "xl") {

      var rotation_no = this.rotation_no;
      console.log(rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);
      this.copinoService.copinoList(tmp_rot_no).subscribe(data => {
        this.copinoInfo = data;
      })


      this.copinoService.copinoListData(tmp_rot_no).subscribe(data=>{
        this.copinoInfo=data;
  
        for (let vnamedata of data) {
      this.vname= vnamedata.name
       console.log(this.vname);
        }

        let response = this.copinoService.copinoList(tmp_rot_no);
        response.subscribe(data => {
          this.copinoInfo = data;
          // this.tmp_rot_no=localStorage.getItem("rotation_no");
          // this.rotation_no=tmp_rot_no.toString().replace("_","/");
  
          this.copinoService.getResultWithExcel(data, this.rotation_no,this.vname);
  
        });

      });
     

      localStorage.setItem("tmp_rot_no", this.rotation_no);
      console.log(this.rotation_no);

    }

    if (this.options == "html") {
      // ['/dg/dg-rotation-list-for-html']
      console.log("helow world");
      // return;
      var rotation_no = this.rotation_no;
      console.log(rotation_no);
      localStorage.setItem("rotation_no:", rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);
      localStorage.setItem("tmp_rot_no", tmp_rot_no);
      const url = this.router.serializeUrl(
        // [routerLink]="['/copinohtml/report']
        this.router.createUrlTree(['/exportReports/copino/report'])
      );

      window.open(url, '_blank');

      //  this.router.navigate(['/dg/dg-rotation-list-for-html']);
      // this.router.createUrlTree( ['/dg/dg-rotation-list-for-html'])

    }

  }

}
