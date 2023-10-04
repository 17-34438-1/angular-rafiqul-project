import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportAssignmentSheetForOutwadPangonService } from '../service/ExportReports/ExportAssignmentSheetForOutwadPangon/export-assignment-sheet-for-outwad-pangon.service';

@Component({
  selector: 'app-export-assignment-sheet-for-outwad-pangon',
  templateUrl: './export-assignment-sheet-for-outwad-pangon.component.html',
  styleUrls: ['./export-assignment-sheet-for-outwad-pangon.component.css']
})
export class ExportAssignmentSheetForOutwadPangonComponent implements OnInit {
  tmp_rot_no:any;
  dgInfo:any;
  rotation_no:any;
  options:any;
  dgContainerByRotation:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
     private exportAssignmentSheetForOutwadPangon: ExportAssignmentSheetForOutwadPangonService,
  ) { }

  ngOnInit(): void {
  }



  onSubmit(){

  //     if (this.options == "xl") {
  //       console.log("From Date:"+this.fromDate);
  //       console.log("To Date:"+this.toDate);
  //       this.exportcommentByShippingSection.getExportCommentsByShippingSection(this.fromDate,this.toDate).subscribe(data=>{
  //       this.exportCommentByShipping=data;
  //       console.log("excel Data:"+data);
  //       this.exportcommentByShippingSection.getResultWithExcel(data, this.fromDate,this.toDate);
  //  });
  // }

    if(this.options=="xl")
    {
      var rotation_no=this.rotation_no;
      console.log(rotation_no);
      var tmp_rot_no=rotation_no.toString().replace("/","_");
        let response=this.exportAssignmentSheetForOutwadPangon.getAssignmentSheetForOutwadPangon(tmp_rot_no);
        response.subscribe(data=>{
        this.dgInfo=data;
        console.log("excel Data:"+this.dgInfo);
        this.exportAssignmentSheetForOutwadPangon.getResultWithExcel(this.dgInfo,tmp_rot_no);
        });
    }

    if(this.options=="html")
    {
      console.log("helow world");
      var rotation_no=this.rotation_no;
      console.log(rotation_no);
      localStorage.setItem("export_assignment_sheet_for_outwad_tmp_rot_no",rotation_no);
      var tmp_rot_no=rotation_no.toString().replace("/","_");
      console.log(tmp_rot_no);
      localStorage.setItem("export_assignment_sheet_for_outwad_tmp_rot_no",tmp_rot_no);
      this.router.navigate([]).then(data=>window.open('exportReport/export-assignment-sheet-for-outwad-pangon-list','_blank'));
    }

  }

}
