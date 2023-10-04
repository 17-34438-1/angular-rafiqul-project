import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LaborService } from '../service/labor/labor.service';

@Component({
  selector: 'app-labor-category-list',
  templateUrl: './labor-category-list.component.html',
  styleUrls: ['./labor-category-list.component.css']
})
export class LaborCategoryListComponent implements OnInit {

  filterTerm: any;
  CATEGORIES: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  constructor(
    private router: Router,   
    private laborService: LaborService,
    private toastr: ToastrService,
    private http: HttpClient
    ) { }

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

    this.fetchLaborCategories();
  }

  fetchLaborCategories():void {
    this.laborService.getLaborCategoryList().subscribe(
      (response) => {
        this.CATEGORIES = response;
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchLaborCategories();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchLaborCategories();
  }
  onSearchInput(){
    this.page = 1;
  }

  deleteLaborCategory(id: number) {
    if(confirm("Do you want to delete ?")) {      
      this.laborService.deleteLaborCategory(id).subscribe(data => {
        console.log('Deleted', data);
  
        this.toastr.warning(data.message, 'Success',{
          // timeOut:5000,
          disableTimeOut: true,
          tapToDismiss: false,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-center-center',
          closeButton:true
        });
  
        this.fetchLaborCategories();
      }, err => {
  
        console.log(err);
  
        this.toastr.error(err.error.message, 'Error',{
          // timeOut:5000,
          disableTimeOut: true,
          tapToDismiss: false,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-center-center',
          closeButton:true
        });
  
        this.fetchLaborCategories();
      });

    }
  }

}
