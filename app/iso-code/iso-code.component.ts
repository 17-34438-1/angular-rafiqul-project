import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

import { IsoService } from '../service/ExportReports/iso/iso.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-iso-code',
  templateUrl: './iso-code.component.html',
  styleUrls: ['./iso-code.component.css']
})
export class IsoCodeComponent implements OnInit {
  iso_code:any;
  IsoList:any;
  filterTerm: any;
 
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  // tableSizes: any = [3, 6, 9, 12];
  constructor(
    
    // private isoCodeData:IsoCodeService,
    private isoService:IsoService,
    private toastr: ToastrService,
    private http: HttpClient,
   
    private router: Router,
    
    ) {
    this.iso_code="";
   }

  ngOnInit(): void {


    if(localStorage['status']!=1)
    {
      // console.log("### User logged out already ### ");
      this.router.navigate(['/login']);
      this.toastr.error('Login and try again.', 'Error',{
        // timeOut:5000,
        disableTimeOut: true,
        tapToDismiss: false,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass:'toast-center-center',
        closeButton:true
      });
      return;
    }


    this.isoService.IsoList().subscribe(data=>{
      this.IsoList=data;
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
  onSearchInput(){
    this.page = 1;
  }


  onSubmit(){
    this.isoService.IsoListData(this.iso_code).subscribe(data=>{
this.IsoList=data;

    });
  }




}
