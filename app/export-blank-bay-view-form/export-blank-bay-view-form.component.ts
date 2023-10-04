import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportBlankBayViewService } from '../service/ExportReports/export-blank-bay-view/export-blank-bay-view.service';

@Component({
  selector: 'app-export-blank-bay-view-form',
  templateUrl: './export-blank-bay-view-form.component.html',
  styleUrls: ['./export-blank-bay-view-form.component.css']
})
export class ExportBlankBayViewFormComponent implements OnInit {
  vvd_gk:any;
  options:any;
  blankBay:any;

  vsl:any;
  vvd_gkey:any;
  selectedVvdGkey: any;
  vvd_gkey1:any;
 

  constructor(
    private exportBlankBayViewService:ExportBlankBayViewService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,   
    private router: Router,
  ) { 
 
  }

  ngOnInit(): void {



    this.exportBlankBayViewService.BlankBay().subscribe(data=>{
      this.blankBay=data;
      for (let blankBay of data) {
        this.vvd_gkey = blankBay.vvd_gkey;
        //console.log("vvd_gkey ---:"+this.vvd_gkey);
        this.vsl=blankBay.vsl;
        console.log("vvd_gkey:"+this.vvd_gkey);
        console.log("vsl:"+this.vsl);
      }  
    });



  
  }



  OnBlankBayChange(vvd_gkey:any){
    this.vvd_gkey = vvd_gkey;
    console.log("vvdGkey1:"+vvd_gkey);

  }




  onSubmit(){
    console.log("vvd_gkey:"+this.vvd_gkey);

  
    console.log("vvd_gkey:"+this.vvd_gkey);

     localStorage.setItem("export_blank_bay",this.vvd_gkey);
   
   this.router.navigate([]).then(data=>window.open('/exportReports/export-blank-bay-view/list','_blank'));
   
  }

}
