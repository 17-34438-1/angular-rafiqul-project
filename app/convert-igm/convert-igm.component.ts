import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConvertIgmService } from '../service/IgmOperation/convertIgm/convert-igm.service';
import * as fs  from 'file-saver';
@Component({
  selector: 'app-convert-igm',
  templateUrl: './convert-igm.component.html',
  styleUrls: ['./convert-igm.component.css']
})
export class ConvertIgmComponent implements OnInit {
  
  covertPangaonContainerForm:any;
  id:any;
  igm:any;
  update4:any;
  update3:any;
  vessel_Name:any;
  fileInputLabel:any;
  resultList:any;
  ipAddress:any="";
  response:any;
  loginId: any;
  size:number=0;
  visit:any="";
  nad:any="";
  xmlData:any="";
  filename:any="";

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr:ToastrService,
    private httpClient: HttpClient,
    private convertPangaonContainerService:ConvertIgmService

    
  ) { 
    this.covertPangaonContainerForm=this.formBuilder.group({});

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
    else{
      

    }
  }



  onSubmit(event:any):any{
    this.visit=event.visit.value;
    if(this.visit!=""){
      this.convertPangaonContainerService.convertPangaonContainer(this.visit).subscribe(result=>{
        this.resultList=result;

        console.log(result);
        for(let res of this.resultList){
           this.vessel_Name=res.vessel_Name;
           this.filename=res.filename;
           this.xmlData=res.xmlData;
           console.log("filename:"+ this.filename);
           console.log("xmlData:"+ this.xmlData);
           console.log("vessel_Name:"+ this.vessel_Name);

           if(this.filename!=null){
            this.filename=res.filename;
            console.log("igm:"+ this.filename);
           }
          

         
        }
        if(this.xmlData!="" && this.xmlData!=null){
          let blob = new Blob([this.xmlData], { type: 'application/xml' });
          fs.saveAs(blob, this.filename);

        }
       

      });

    }
    else{
      this.toastr.error('Visite ID is Empty', 'Error',{
        // timeOut:5000,
        disableTimeOut: true,
        tapToDismiss: false,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass:'toast-center-center',
        closeButton:true
      });

    }

  }

}
