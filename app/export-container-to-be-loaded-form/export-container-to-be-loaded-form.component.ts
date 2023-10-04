import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportContainerToBeLoadedService } from '../service/ExportReports/export-container-to-be-loaded/export-container-to-be-loaded.service';

@Component({
  selector: 'app-export-container-to-be-loaded-form',
  templateUrl: './export-container-to-be-loaded-form.component.html',
  styleUrls: ['./export-container-to-be-loaded-form.component.css']
})
export class ExportContainerToBeLoadedFormComponent implements OnInit {

  rotation_no: any
  tmp_rot_no: any;
  vname: any;
  voyNo: any;
  containerVoyNo: any;
  mlo_wise_excel: any;

  ContainerBalanceList:any;
  options: any;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private export_container_to_be_loaded: ExportContainerToBeLoadedService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.options == "xl") {

      var rotation_no = this.rotation_no;
      console.log(rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);
      this.export_container_to_be_loaded.getvvdgkey(tmp_rot_no).subscribe(data => {
        this.mlo_wise_excel = data;
      })
  
      this.export_container_to_be_loaded.getVoyNo(tmp_rot_no).subscribe(data => {
        this.containerVoyNo = data;
        console.log(data);
        for (let mlo_excel_uploaded of data) {
          this.voyNo = mlo_excel_uploaded.voy_No;
  
        }
        console.log(this.voyNo);
  
  
  
        this.export_container_to_be_loaded.getContainerVesselInfo(tmp_rot_no).subscribe(data => {
          this.mlo_wise_excel = data;
          console.log("excel Data:" + data);
          for (let vnamedata of data) {
            this.vname = vnamedata.vsl_name
            console.log(this.vname);
  
          }
  
          let response = this.export_container_to_be_loaded.getContainerList(tmp_rot_no);
          response.subscribe(data => {


            this.mlo_wise_excel = data;
  

               
    
        let response = this.export_container_to_be_loaded.getLoadedContainerBalanceList(tmp_rot_no);
        response.subscribe(data => {
          console.log(data);
          this.ContainerBalanceList = data;
        });
          // this.ContainerBalanceList,

            this.export_container_to_be_loaded.getResultWithExcel(data,this.ContainerBalanceList,this.rotation_no, this.vname, this.voyNo);
  
          });

     
  
        });
      });
  
  
      localStorage.setItem("tmp_rot_no", this.rotation_no);
      console.log(this.rotation_no);
  
    }
  
    if (this.options == "html") {
      console.log("helow world");
      var rotation_no = this.rotation_no;
      console.log(rotation_no);
      localStorage.setItem("export_container_to_be_loaded_tmp_rot_no", rotation_no);
      var tmp_rot_no = rotation_no.toString().replace("/", "_");
      console.log(tmp_rot_no);
      this.router.navigate([]).then(data => window.open('exportReports/export-container-to-be-loaded/list', '_blank'));
    }
  }
  

}
