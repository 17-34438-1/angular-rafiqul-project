import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LaborService } from '../service/labor/labor.service';

@Component({
  selector: 'app-labor-category-edit',
  templateUrl: './labor-category-edit.component.html',
  styleUrls: ['./labor-category-edit.component.css']
})
export class LaborCategoryEditComponent implements OnInit {

  name: any;
  laborCategoryId: any;
  laborCategory: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private laborService: LaborService,
    private toastr: ToastrService,
    private http: HttpClient
  ) { 
    this.name = '';
    this.laborCategoryId = '';
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

    this.laborCategoryId = this.activatedRoute.snapshot.params['id'];
    this.laborService.getLaborCategoryById(this.laborCategoryId).subscribe(data =>{
      console.log(data);
      this.laborCategory = data;
      this.name = data.name;
    });
  }

  saveLaborCategory() {

    let laborCategory = {
      id: this.laborCategory.id,
      name: this.name
    }
    this.laborService.editLaborCategory(laborCategory).subscribe(data => {
      console.log(data);
      this.toastr.success(data.message, 'Success',{
        // timeOut:5000,
        disableTimeOut: true,
        tapToDismiss: false,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass:'toast-center-center',
        closeButton:true
      });
      this.router.navigate(['labor/category/list']);
    }, err => {      
      console.log(err);
      console.log(err.error.message);
      this.toastr.error(err.error.message, 'Error',{
        // timeOut:5000,
        disableTimeOut: true,
        tapToDismiss: false,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass:'toast-center-center',
        closeButton:true
      });
      this.router.navigate(['labor/category/list']);
    });
  }

}
