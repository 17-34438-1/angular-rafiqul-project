import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LaborService } from '../service/labor/labor.service';

@Component({
  selector: 'app-labor-category-add',
  templateUrl: './labor-category-add.component.html',
  styleUrls: ['./labor-category-add.component.css']
})
export class LaborCategoryAddComponent implements OnInit {

  laborCategoryAddForm: FormGroup;
  
  constructor(
    private router: Router,   
    private formBuilder: FormBuilder, 
    private laborService: LaborService,
    private toastr: ToastrService,
    private http: HttpClient
  ) { 
    this.laborCategoryAddForm = this.formBuilder.group({});
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

    this.laborCategoryAddForm  = this.formBuilder.group({
      name : ['', Validators.required]
    });
  }


  onSubmit() {
    this.laborService.addLaborCategory(this.laborCategoryAddForm.value).subscribe(data => {
      
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

      this.router.navigate(['laborCategoryList']);
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
      
    });
  }

}
