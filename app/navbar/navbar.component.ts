import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    
    var loginId = localStorage.getItem("loginId");
    this.authService.logout(loginId).subscribe(data => {
      console.log(data);

      localStorage.removeItem("accessToken");
      localStorage.removeItem("userRoleId");
      localStorage.removeItem("userRoleName");
      localStorage.removeItem("userName");
      localStorage.removeItem("loginId");
      localStorage.removeItem("status");
      
      this.toastr.success(data.message, 'Success',{
        // timeOut:5000,
        disableTimeOut: true,
        tapToDismiss: false,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass:'toast-center-center',
        closeButton:true
      });

      this.router.navigate(['/login']);
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
    });
  }

}
