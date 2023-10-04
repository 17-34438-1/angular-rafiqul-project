import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ExportMloWisePreAdvisedLoadedContainerService } from '../service/ExportReports/export-mlo-wise-pre-advised-loaded-container/export-mlo-wise-pre-advised-loaded-container.service';

@Component({
  selector: 'app-export-mlo-wise-summary-list',
  templateUrl: './export-mlo-wise-summary-list.component.html',
  styleUrls: ['./export-mlo-wise-summary-list.component.css']
})
export class ExportMloWiseSummaryListComponent implements OnInit {
  rot_number: any;

  MloWiseSummary: any;

  MLO: any;
  voys_no: any;


  cont_size: any;
  cont_status: any;
  emty_20: any;
  emty_40: any;

  fw_20: any;
  fw_40: any;

  i_20: any;
  i_40: any;

  imdg_20: any;
  imdg_40: any;
  imdgw_20: any;
  imdgw_40: any;

  iw_20: any;
  iw_40: any;
  l_20: any;
  l_40: any;
  last_update: any;

  lw_20: any;
  lw_40: any;
  m_20: any;
  m_40: any;

  mw_20: any;
  mw_40: any;
  vsl_name: any;


  r_20: any;
  r_40: any;

  rw_20: any;
  rw_40: any;

  t_20: any;
  t_40: any;
  array: any;
  tw_20: any;
  tw_40: any;
  SUB_20: any;
  total: number = 0;
  f_20: string;
  f_40: number = 0;
  FL_20: any;
  SUBW_20: any;
  FLW_20: any;
  SUB_40: any;
  FL_40: any;
  SUBW_40: any;
  FLW_40: any;
  TT: any;
  TF: any;
  TM: any;

  TTW: any;
  TFW: any;
  TMW: any;



  constructor(
    private toastr: ToastrService,
    private router: Router,

    private exportMloWisePreAdvisedLoadedContainerService: ExportMloWisePreAdvisedLoadedContainerService
  ) {
    this.f_20 = ""
    this.SUB_20 = ""
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



    this.MLO = localStorage.getItem("MLO");
    this.rot_number = localStorage.getItem("export-mlo-wise-pre-advised-loaded-container-list");
    var tmp_rot_no = this.rot_number.toString().replace("/", "_");
    console.log(tmp_rot_no);


    this.exportMloWisePreAdvisedLoadedContainerService.getMloWiseSummaryList(tmp_rot_no, this.MLO).subscribe(data => {
      this.MloWiseSummary = data;

      console.log(this.MloWiseSummary);
      console.log(data);
      console.log(tmp_rot_no);
      console.log("cont_mlo:" + this.MLO);



      for (let MloWiseSummary of data) {

        this.cont_size = MloWiseSummary.cont_size;

        this.vsl_name = MloWiseSummary.name;

        this.last_update = MloWiseSummary.last_update;
        this.voys_no = MloWiseSummary.voys_no;

        this.fw_20 = MloWiseSummary.fw_20;
        this.fw_40 = MloWiseSummary.fw_40
        this.i_20 = MloWiseSummary.i_20;
        this.i_40 = MloWiseSummary.i_40;
        this.imdg_20 = MloWiseSummary.imdg_20;
        this.imdg_40 = MloWiseSummary.imdg_40;
        this.imdgw_20 = MloWiseSummary.imdgw_20;
        this.imdgw_40 = MloWiseSummary.imdgw_40;
        this.iw_20 = MloWiseSummary.iw_20;
        this.iw_40 = MloWiseSummary.iw_40;
        this.l_20 = MloWiseSummary.l_20;
        this.l_40 = MloWiseSummary.l_40;

        this.lw_20 = MloWiseSummary.lw_20;
        this.lw_40 = MloWiseSummary.lw_40;
        this.m_20 = MloWiseSummary.m_20;
        this.m_40 = MloWiseSummary.m_40;
        this.mw_20 = MloWiseSummary.mw_20;
        this.mw_40 = MloWiseSummary.mw_40;
        this.r_20 = MloWiseSummary.r_20;
        this.r_40 = MloWiseSummary.r_40;
        this.rw_20 = MloWiseSummary.rw_20;
        this.rw_40 = MloWiseSummary.rw_40;
        this.t_20 = MloWiseSummary.t_20;
        this.t_40 = MloWiseSummary.t_40;
        this.tw_20 = MloWiseSummary.tw_20;
        this.tw_40 = MloWiseSummary.tw_40;
        this.f_20 = MloWiseSummary.f_20;
        this.f_40 = MloWiseSummary.f_40;
      }


      console.log("cont_size:" + this.cont_size);

      console.log("Vessel_Name:" + this.vsl_name);
      console.log("Last_Update:" + this.last_update);
      console.log("Voy_no:" + this.voys_no);
      console.log(this.f_20);

      console.log(this.fw_20);
      console.log(this.fw_40);





      this.SUB_20 = Number(this.f_20) + Number(this.l_20) + Number(this.m_20) + Number(this.i_20) + Number(this.t_20) + Number(this.r_20) + Number(this.imdg_20);

      console.log("Sub_20:" + this.SUB_20);
      this.FL_20 = Number(this.f_20) + Number(this.l_20) + Number(this.i_20) + Number(this.t_20) + Number(this.r_20) + Number(this.imdg_20);
      console.log("FL_20:" + this.FL_20);


      this.SUBW_20 = Number(this.fw_20) + Number(this.lw_20) + Number(this.mw_20) + Number(this.iw_20) + Number(this.tw_20) + Number(this.rw_20) + Number(this.imdgw_20);
      console.log("SUBW_20:" + this.SUBW_20);
      this.FLW_20 = Number(this.fw_20) + Number(this.lw_20) + Number(this.iw_20) + Number(this.tw_20) + Number(this.rw_20) + Number(this.imdgw_20);
      console.log("FLW_20:" + this.FLW_20);
      this.SUB_40 = Number(this.f_40) + Number(this.l_40) + Number(this.m_40) + Number(this.i_40) + Number(this.t_40) + Number(this.r_40) + Number(this.imdg_40);
      console.log("SUB_40:" + this.SUB_40);
      this.FL_40 = Number(this.f_40) + Number(this.l_40) + Number(this.i_40) + Number(this.t_40) + Number(this.r_40) + Number(this.imdg_40);
      console.log("FL_40:" + this.FL_40);
      this.SUBW_40 = Number(this.fw_40) + Number(this.lw_40) + Number(this.mw_40) + Number(this.iw_40) + Number(this.tw_40) + Number(this.rw_40) + Number(this.imdgw_40);
      console.log("SUBW_40:" + this.SUBW_40);
      this.FLW_40 = Number(this.fw_40) + Number(this.lw_40) + Number(this.iw_40) + Number(this.tw_40) + Number(this.rw_40) + Number(this.imdgw_40);
      console.log("FLW_40:" + this.FLW_40);


      this.TF = this.FL_20 + this.FL_40;
      console.log("TF:" + this.TF);
      this.TM = Number(this.m_20) + Number(this.m_40);
      console.log("TM:" + this.TM);
      this.TT = this.SUB_20 + this.SUB_40;
      console.log("TT:" + this.TT);
      this.TFW = this.FLW_20 + this.FLW_40;
      console.log("TFW:" + this.TFW);
      this.TMW = Number(this.mw_20) + Number(this.mw_40);
      console.log("TMW:" + this.TMW);
      this.TTW = this.SUBW_20 + this.SUBW_40;
      console.log("TTW:" + this.TTW);
      console.log(this.i_20);


    });


  }

}
