import { Component, OnInit } from '@angular/core';
import { DgInfoService } from '../service/dg_info/dg-info.service';
import { DgContainersDischargeService } from '../service/dg-containers-discharge/dg-containers-discharge.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dg-cont-discharge-summary-list',
  templateUrl: './dg-cont-discharge-summary-list.component.html',
  styleUrls: ['./dg-cont-discharge-summary-list.component.css']
})
export class DgContDischargeSummaryListComponent implements OnInit {

  // notifier:NotifierService;
  toggleShowHide: string = "visible";
  import_Rotation_No: any;
  document: any;
  isShown: boolean = false;
  isShow: boolean = false;
  flag: any;
  vname: any;
  rot_no: any;
  vessel_Name: any;
  rotation_no: any;
  rot_number: any;
  tmp_rot_no: any;
  dgInfo: any[];
  style: any;
  constructor(

    private toastr: ToastrService,
    private router: Router,
    private dgContainersDischargeService: DgContainersDischargeService,

    private dgInfoService: DgInfoService,
  ) {

    this.dgInfo = [];
    this.vessel_Name = "";

  }

  ngOnInit(): void {

    if (localStorage['status'] != 1) {
      // console.log("### User logged out already ### ");
      this.router.navigate(['/login']);
      this.toastr.error('Login and try again.', 'Error', {
        // timeOut:5000,
        disableTimeOut: true,
        tapToDismiss: false,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-center-center',
        closeButton: true
      });
      return;
    }

    var rotation_no = this.rot_no;
    this.rot_number = localStorage.getItem("dg_cont_discharge_summary_list_tmp_rot_no");
    var tmp_rot_no = this.rot_number.toString().replace("/", "_");
    console.log(tmp_rot_no);

    this.dgInfoService.DischargInfo(tmp_rot_no).subscribe(data => {
      this.rot_no = data;
      console.log(data);
    });

    this.dgContainersDischargeService.Discharg(tmp_rot_no).subscribe(data => {
      this.dgInfo = data;
      console.log(data);
      for (let vnamedata of data) {
        if (vnamedata.flag != null) {
          this.vname = vnamedata.vessel_Name;
          this.flag = vnamedata.flag;
          this.import_Rotation_No = vnamedata.import_Rotation_No;
        }
      console.log("flag:" + this.flag);
      }
    });

    this.rot_number = localStorage.getItem("dg_cont_discharge_summary_list_tmp_rot_no");
    this.rotation_no = this.rot_number.toString().replace("_", "/");
  }

}
