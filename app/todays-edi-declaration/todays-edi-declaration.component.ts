
import { NotifierService } from 'angular-notifier';
import * as fs  from 'file-saver';


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TodaysEdiDeclarationService } from '../service/IgmOperation/TodaysEdiDeclaration/todays-edi-declaration.service';


@Component({
  selector: 'app-todays-edi-declaration',
  templateUrl: './todays-edi-declaration.component.html',
  styleUrls: ['./todays-edi-declaration.component.css']
})
export class TodaysEdiDeclarationComponent implements OnInit {
  terminal:any;
  yardInfo:any;
  path:any;
  item:any;
  file_download_by:any;
  loginId: any;
  filterTerm: any;
  file_name_edi:any;
  file_name_stow:any;
  isEditable:Boolean=true;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
   constructor(
    private router: Router,
     private todaysEdiDeclarationService:TodaysEdiDeclarationService,

   ) { 

   
     this.terminal="";
    this.loginId=localStorage.getItem("loginId");
   }
 
   ngOnInit(): void {

     this.todaysEdiDeclarationService.EdiList().subscribe(data=>{
       this.yardInfo=data;
       this.path= 'http://cpatos.gov.bd/pcs/resources/edi/';

     for (let yardInfo of data) {
      this.file_name_edi = yardInfo.file_name_edi;
      this.file_name_stow = yardInfo.file_name_stow;
      let path=this.path+this.file_name_edi
        console.log("file_name_edi:"+path);
    }


     })
  

    
   }
 
   onSubmitDoneForEdi(file_name_edi:any){
    let path=this.path+file_name_edi;
    console.log("path:"+path);
    let blob = new Blob([], { type: 'application/edi' });
    fs.saveAs(blob, path);

   }
   onSubmitDoneForStow(file_name_stow:any){
    let blob = new Blob([this.path+file_name_stow], { type: 'application/pdf' });
    fs.saveAs(blob, this.path+file_name_stow);

   }

   onSubmitDoneEdi(id:number) {

    let data = {
      file_download_by: this.loginId,
      id: id
   
    }

    if(confirm("Do you want done this EDI?"))
    {
         this.todaysEdiDeclarationService.updateTodaysEdi(data).subscribe(data => {
        console.log('Deleted', data);
  
        this.yardInfo = this.yardInfo.filter((item: { id: number; }) => item.id !== id);
      }, err => {
        console.log(err);
  
      });
  
      return true;
      
    }
    else
    {
      return false;
    }


   }


    
   
 
   onSubmit(){
     this.todaysEdiDeclarationService.EdiData(this.terminal).subscribe(data=>{
       this.yardInfo=data;
       console.log("yardInfo:"+data);
     })
   }

}
