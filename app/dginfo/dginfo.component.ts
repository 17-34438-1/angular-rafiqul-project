import { Component, OnInit } from '@angular/core';

import { DgInfoService } from '../service/dg_info/dg-info.service';
@Component({
  selector: 'app-dginfo',
  templateUrl: './dginfo.component.html',
  styleUrls: ['./dginfo.component.css']
})
export class DginfoComponent implements OnInit {
rot_no:any;
  constructor(
  
    private dgInfoService: DgInfoService,
  ) { 

  }

  ngOnInit(): void {
  }
  onSubmit(){
      var rotation_no=this.rot_no;
      var tmp_rot_no=rotation_no.toString().replace("/","_");
      console.log( tmp_rot_no);
      localStorage.setItem("tmp_rot_no",tmp_rot_no);

  }


}

