import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth/auth.service';
import { SidebarService } from '../service/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  liveURLs: any[];
  userRoleName: any;
  userName: any;

  constructor(
    private sidebarService: SidebarService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { 
    this.liveURLs = [];
    this.userRoleName=localStorage.getItem("userRoleName");
    this.userName=localStorage.getItem("userName");
  }

  ngOnInit(): void {
    var userRoleId = localStorage.getItem("userRoleId");
    console.log("userRoleId : "+userRoleId); 

    this.sidebarService.getSidebarByRole(userRoleId).subscribe(data => {
      console.log(data);
      this.liveURLs = data;
      console.log(this.liveURLs);
    }, err => {
      console.log(err);
    });

   
    // if (!localStorage.getItem('reloadedSidebar')) { 
    //   localStorage.setItem('reloadedSidebar', 'Reloading now') 
    //   location.reload() 
    // } else {
    //   localStorage.removeItem('reloadedSidebar') 
    // }

  }

 

}
