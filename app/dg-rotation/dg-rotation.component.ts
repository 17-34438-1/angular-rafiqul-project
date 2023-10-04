import { Component, OnInit } from '@angular/core';
import { DgInfoService } from '../service/dg_info/dg-info.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dg-rotation',
  templateUrl: './dg-rotation.component.html',
  styleUrls: ['./dg-rotation.component.css']
})
export class DgRotationComponent implements OnInit {
rotation_no:any;
options:any;

fileName= 'ExcelSheet.xlsx';
//dgInfo:any[];

dgInfo:any;
excel=[];
data:any;
row:any;  
rot_number:any;
shift: any;
tmp_rot_no: any;
  constructor(
    private dgInfoService: DgInfoService,
     private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.options=="xl")
    {

      var rotation_no=this.rotation_no;
      console.log(rotation_no);
      var tmp_rot_no=rotation_no.toString().replace("/","_");
      console.log( tmp_rot_no);

      let response=this.dgInfoService.DischargByRotation(tmp_rot_no);
      response.subscribe(data=>{
        this.dgInfo=data;
        this.tmp_rot_no=localStorage.getItem("rotation_no");
        this.rotation_no=tmp_rot_no.toString().replace("_","/");
    
      this.dgInfoService.getResultWithExcel(data,this.rotation_no);
  
      });
   
      console.log(this.rotation_no);
      console.log("hellow");
 
    }
  if(this.options=="html")
  {
 
console.log("helow world");

 var rotation_no=this.rotation_no;
 console.log(rotation_no);
  localStorage.setItem("rotation_no:",rotation_no);
 var tmp_rot_no=rotation_no.toString().replace("/","_");
 console.log( tmp_rot_no);
 localStorage.setItem("tmp_rot_no",tmp_rot_no);
const url = this.router.serializeUrl(
   this.router.createUrlTree(['/dg/dg-rotation-list-for-html'])
 );

 window.open(url, '_blank');

//  this.router.navigate(['/dg/dg-rotation-list-for-html']);
 // this.router.createUrlTree( ['/dg/dg-rotation-list-for-html'])

  }


  }

}
