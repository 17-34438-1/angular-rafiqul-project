import { Component, OnInit } from '@angular/core';
import { DgInfoService } from '../service/dg_info/dg-info.service';


@Component({
  selector: 'app-dg-rotation-list-for-html',
  templateUrl: './dg-rotation-list-for-html.component.html',
  styleUrls: ['./dg-rotation-list-for-html.component.css']
})
export class DgRotationListForHtmlComponent implements OnInit {
  dgInfo: any[];
  rot_number:any;

  tmp_rot_no:any;
  rotation_no:any;
  constructor(
    private dgInfoService: DgInfoService,
  ) { 
    this.dgInfo=[];
  }

  ngOnInit(): void {

        //this.tmp_rot_no=localStorage.getItem("tmp_rot_no");
        this.rot_number=localStorage.getItem("tmp_rot_no");
        var tmp_rot_no=this.rot_number.toString().replace("/","_");
         console.log(tmp_rot_no);
         console.log( tmp_rot_no);
         this.dgInfoService.DischargByRotation(tmp_rot_no).subscribe(data => {
          this.dgInfo=data;
         
          console.log(data);
          //this.router.navigate(['/dg/dg-cont-discharge-summary-list']);
       
        });
    
         this.tmp_rot_no=localStorage.getItem("rotation_no");
        this.rotation_no=tmp_rot_no.toString().replace("_","/");
    
        console.log(this.rotation_no);
  }

}
