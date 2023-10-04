import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportDateAndRotationWisePreAdvisedContainerService } from '../service/ExportReports/export-date-and-rotation-wise-pre-advised-container/export-date-and-rotation-wise-pre-advised-container.service';
@Component({
  selector: 'app-export-date-and-rotation-wise-pre-advised-container-form',
  templateUrl: './export-date-and-rotation-wise-pre-advised-container-form.component.html',
  styleUrls: ['./export-date-and-rotation-wise-pre-advised-container-form.component.css']
})
export class ExportDateAndRotationWisePreAdvisedContainerFormComponent implements OnInit {

  fromDate:any;
  rotation:any;
  export_date_and_rotation:any;
  rotation_no: any
  tmp_rot_no: any;
  vname: any;
  voyNo: any;

  options: any;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private exportDateAndRotationWisePreAdvised: ExportDateAndRotationWisePreAdvisedContainerService

  ) {


  }

  ngOnInit(): void {

    if (localStorage['status'] != 1) {
     
      this.router.navigate(['/login']);
      this.toastr.error('Login and try again.', 'Error', {
        disableTimeOut: true,
        tapToDismiss: false,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-center-center',
        closeButton: true
      });
      return;
    }
  }



  onSubmit() {
    if (this.options == "xl") {
    var rotation_no = this.rotation_no;
      console.log(rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);

      console.log(this.fromDate);
      this.exportDateAndRotationWisePreAdvised.getContainerList(tmp_rot_no,this.fromDate).subscribe(data => {
        this.export_date_and_rotation = data;
        console.log(data);
        for (let containerDateAndRotation of data) {
          this.rotation = containerDateAndRotation.rotation;
        }
        this.exportDateAndRotationWisePreAdvised.getResultWithExcel(data, this.rotation_no);
        console.log(this.rotation);
  
      });

    }

    
      if (this.options == "html") {
        
      var rotation_no = this.rotation_no;
      console.log(rotation_no);
   
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);
      localStorage.setItem("date_tmp_rot_no", tmp_rot_no);
      localStorage.setItem("fromDate",this.fromDate);

      console.log("fromDate:"+this.fromDate);
      console.log("rotation_no:"+this.rotation_no);

  
      this.router.navigate([]).then(data => window.open('exportReports/date-and-rotation-wise-pre-advised-container/list', '_blank'));
    }

  
  
  }

}


