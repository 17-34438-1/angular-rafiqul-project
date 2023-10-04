import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShahinSpecialReportLocationCertifyService } from '../service/ShahinSpecialReport/shahin-special-report-location-certify/shahin-special-report-location-certify.service';

@Component({
  selector: 'app-shahin-special-report-location-certify',
  templateUrl: './shahin-special-report-location-certify.component.html',
  styleUrls: ['./shahin-special-report-location-certify.component.css']
})
export class ShahinSpecialReportLocationCertifyComponent implements OnInit {
  ddl_imp_cont_no: any;
  ddl_imp_bl_no: any;
  locataionCertify: any;
  searchText: any;
  totcont: any;
  cont: any;
  t20: any;
  t40: any;
  t45: any;
  time_move: any;
  navOpen : boolean = false;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private shahinSpecialReportLocationCertifyService: ShahinSpecialReportLocationCertifyService
  ) {

  }

  ngOnInit(): void {
  }
  onSubmit() {

    this.navOpen = ! this.navOpen;
console.log("ddl_imp_bl_no:"+this.ddl_imp_bl_no)

    let data = {
      ddl_imp_bl_no: this.ddl_imp_bl_no,
      ddl_imp_cont_no: this.ddl_imp_cont_no,
      }
    this.shahinSpecialReportLocationCertifyService.getLoadedContainerReport(data).subscribe(data => {
      this.locataionCertify = data;

      this.totcont = this.locataionCertify.totcont;
      this.cont = this.locataionCertify.cont;
      this.time_move = this.locataionCertify.time_move;
      console.log("totcont:" + this.totcont);
      console.log("cont:" + this.cont);
      console.log("time_move:" + this.time_move);
      for (let locataionCertify of data) {
        this.totcont = locataionCertify.totcont;
        this.cont = locataionCertify.cont;
        this.time_move = locataionCertify.time_mov;
        this.t20 = locataionCertify.t20;
        this.t40 = locataionCertify.t40;
        this.t45 = locataionCertify.t45;
      }
     
  
    });
  }
}

