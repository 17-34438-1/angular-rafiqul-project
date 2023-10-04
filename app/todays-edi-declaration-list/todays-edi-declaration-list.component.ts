
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodaysEdiDeclarationService } from '../service/IgmOperation/TodaysEdiDeclaration/todays-edi-declaration.service';

@Component({
  selector: 'app-todays-edi-declaration-list',
  templateUrl: './todays-edi-declaration-list.component.html',
  styleUrls: ['./todays-edi-declaration-list.component.css']
})
export class TodaysEdiDeclarationListComponent implements OnInit {
  yardInfo:any;
  laborId:any;
  voy_No:any;
  vessel_Name:any;




  grt:any;
  nrt: any;
  imo: any;
  loa_cm:any;
  flag:any;
  radio_call_sign: any;
  beam_cm:any;
  agent_name:any;
  
  import_Rotation_No: any;
  name_of_Master: any;
  voyNoExp: any;

  constructor(
 
    private todaysEdiDeclarationService:TodaysEdiDeclarationService,
    private activatedRoute: ActivatedRoute,
 
    private router: Router,
  ) { 

 
  }

  ngOnInit(): void {



    this.laborId= this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id:"+this.laborId)
    this.todaysEdiDeclarationService.EdiListforId(this.laborId).subscribe(data=>{
      this.yardInfo=data;



      for (let yardInfo of data) {
        this.vessel_Name = yardInfo.vessel_Name;
       this.voy_No=yardInfo.voy_No;
       this.grt=yardInfo.grt;
       this.nrt=yardInfo.nrt;
       this.imo=yardInfo.imo;
       this.loa_cm=yardInfo.loa_cm;
       this.flag=yardInfo.flag;
       this.radio_call_sign=yardInfo.radio_call_sign;
       this.beam_cm=yardInfo.beam_cm;
       this.agent_name=yardInfo.agent_name;
       this.import_Rotation_No=yardInfo.import_Rotation_No;
       this.name_of_Master=yardInfo.name_of_Master;
       this.voyNoExp=yardInfo.voyNoExp;
       
     


      }   
      console.log("data:"+data)
      console.log("vessel_Name:"+this.vessel_Name)
      console.log("voy_No:"+this.voy_No)


    })
  }

}
