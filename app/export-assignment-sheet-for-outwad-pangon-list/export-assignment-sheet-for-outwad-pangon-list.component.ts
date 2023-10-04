import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportAssignmentSheetForOutwadPangonService } from '../service/ExportReports/ExportAssignmentSheetForOutwadPangon/export-assignment-sheet-for-outwad-pangon.service';

@Component({
  selector: 'app-export-assignment-sheet-for-outwad-pangon-list',
  templateUrl: './export-assignment-sheet-for-outwad-pangon-list.component.html',
  styleUrls: ['./export-assignment-sheet-for-outwad-pangon-list.component.css']
})
export class ExportAssignmentSheetForOutwadPangonListComponent implements OnInit {
  tmp_rot_no:any;
AssignmentSheetForOutwadPangon:any;

  rotation_no:any;
  options:any;
  rot_no: any;
  vessel_Name: any;
  rot_number: any;
  flag: any;
  vname: any;
  import_Rotation_No: any;

  constructor(

    private toastr:ToastrService,
    private router: Router,
     private exportAssignmentSheetForOutwadPangon: ExportAssignmentSheetForOutwadPangonService,
  ) { }

  ngOnInit(): void {

    var rotation_no = this.rot_no;
    this.rot_number = localStorage.getItem("export_assignment_sheet_for_outwad_tmp_rot_no");
    var tmp_rot_no = this.rot_number.toString().replace("/", "_");
    console.log(tmp_rot_no);

    this.exportAssignmentSheetForOutwadPangon.getAssignmentSheetForOutwadPangon(tmp_rot_no).subscribe(data => {
      this.AssignmentSheetForOutwadPangon = data;
      console.log(data);
      for (let vnamedata of data) {
   
          this.vname = vnamedata.vessel_Name;
          this.flag = vnamedata.flag;
          this.import_Rotation_No = vnamedata.import_Rotation_No;
     
      }
    });

  }

}
