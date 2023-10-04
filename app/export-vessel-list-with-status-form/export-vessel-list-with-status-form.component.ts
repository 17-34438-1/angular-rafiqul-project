import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportVesselListWithStatusService } from '../service/ExportReports/export-vessel-list-with-status/export-vessel-list-with-status.service';

@Component({
  selector: 'app-export-vessel-list-with-status-form',
  templateUrl: './export-vessel-list-with-status-form.component.html',
  styleUrls: ['./export-vessel-list-with-status-form.component.css']
})
export class ExportVesselListWithStatusFormComponent implements OnInit {
  rotation_no: any;
  iso_code: any;
  vesselListWithStatusInfo: any;
  filterTerm: any;

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  // tableSizes: any = [3, 6, 9, 12];
  constructor(

    // private isoCodeData:IsoCodeService,
    private exportVesselListWithStatusService: ExportVesselListWithStatusService,
    private toastr: ToastrService,
    private http: HttpClient,

    private router: Router,

  ) {
    this.iso_code = "";
  }

  ngOnInit(): void {


    this.exportVesselListWithStatusService.VesselListWithStatusInfo().subscribe(data => {
      this.vesselListWithStatusInfo = data;
    });
    this.onSubmit();
  }


  onTableDataChange(event: any) {
    this.page = event;
    this.onSubmit();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.onSubmit();
  }
  onSearchInput() {
    this.page = 1;
  }


  onSubmit() {

    var rotation_no = this.rotation_no;
    console.log(rotation_no);
    var tmp_rot_no = rotation_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
    this.exportVesselListWithStatusService.VesselListWithStatusList(tmp_rot_no).subscribe(data => {
      this.vesselListWithStatusInfo = data;

    });
  }
  onSubmitSummary(Ib_vyg:any) {
    console.log(Ib_vyg);
    console.log(Ib_vyg);
    localStorage.setItem("vessel_list_with_Status_Summary_tmp_rot_no", Ib_vyg);

    console.log("rotation_no:" + Ib_vyg);
  }
  onSubmitDetails(Ib_vyg:any) {  
    localStorage.setItem("vessel_list_with_Status_Details_tmp_rot_no", Ib_vyg);
    console.log("rotation_no:" + Ib_vyg);
  }


}
