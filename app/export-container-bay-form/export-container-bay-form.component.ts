import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-export-container-bay-form',
  templateUrl: './export-container-bay-form.component.html',
  styleUrls: ['./export-container-bay-form.component.css']
})
export class ExportContainerBayFormComponent implements OnInit {
  rotation_no:any;
  constructor(
    private toastr:ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(){
    
    console.log("helow world");
    var rotation_no = this.rotation_no;
    console.log(rotation_no);
    localStorage.setItem("export_ContainerInformation", rotation_no);
    var tmp_rot_no = rotation_no.toString().replace("/", "_");
    console.log(tmp_rot_no);
    this.router.navigate([]).then(data => window.open('', '_blank'));
  }

}
