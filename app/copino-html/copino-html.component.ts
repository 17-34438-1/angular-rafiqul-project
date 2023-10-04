import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CopinoService } from '../service/ExportReports/copino/copino.service';

@Component({
  selector: 'app-copino-html',
  templateUrl: './copino-html.component.html',
  styleUrls: ['./copino-html.component.css']
})
export class CopinoHtmlComponent implements OnInit {
  rotation_no:any;
  vname:any;

  copinoInfo:any;


tmp_rot_no:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
    private copinoService:CopinoService
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
    this.tmp_rot_no=localStorage.getItem("tmp_rot_no");
    var tmp_rot_no=this.tmp_rot_no.toString().replace("/","_");
    console.log(tmp_rot_no);
    this.copinoService.copinoList(tmp_rot_no).subscribe(data=>{
      this.copinoInfo=data;
    })

    this.copinoService.copinoListData(tmp_rot_no).subscribe(data=>{
      this.copinoInfo=data;

      for (let vnamedata of data) {
    this.vname= vnamedata.name
     console.log(this.vname);
      }
    })


    this.tmp_rot_no=localStorage.getItem("rotation_no");
    this.rotation_no=tmp_rot_no.toString().replace("_","/");

    console.log(this.rotation_no);
  }

}
