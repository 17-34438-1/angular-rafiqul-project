
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExportBlankBayViewService } from '../service/ExportReports/export-blank-bay-view/export-blank-bay-view.service';

@Component({
  selector: 'app-export-blank-bay-view-list',
  templateUrl: './export-blank-bay-view-list.component.html',
  styleUrls: ['./export-blank-bay-view-list.component.css']
})

export class ExportBlankBayViewListComponent implements OnInit {
  vvd_gkey:any;
  bay:any;
  msg:any;
  name:any;
  urls:any[];
  maxColLimit:any;
  minColLimit:any;
  centerLineA:any;
  centerLineB:any;
  secound:any;
  kval :any;
  //maxColData:any;
  first:any;
  title:any[];
  maxCol:any;
  maxCLimit:any;
  maxRowLimAbv:any;
  minRowLimAbv:any;
  minCLimitSec:any;
  maxCLimitSec:any;
  minCLimit:any;
  blankBayViewData:any;
  totalShowData:Boolean=false;
  totalShowValue:Boolean=false
  vvd_gke:any;
  totalShowStatus:Boolean=false;
maxData:any[];
minMaxData:any;
  ll:any;
  gapStr:any;
  maxColData: any[];
  maxColRight: any[];
  maxRowData:any[];
  rLimit:any;

  gapLineA:any;
  blankBayView:any;
  blankBayViews:any;
  constructor(
    private exportBlankBayViewService:ExportBlankBayViewService,
    private toastr: ToastrService,
    private http: HttpClient,
   
    private router: Router,
  ) { 
    this.title=[];
this.urls=[];
this.maxData=[];
    this.maxColData = [];
    this.maxColRight = [];
    this.maxRowData=[];
  }

  ngOnInit(): void {

    this.vvd_gkey=localStorage.getItem("export_blank_bay");
    console.log("vvdGkey:"+this.vvd_gkey) 
    this.exportBlankBayViewService.BlankBayView(this.vvd_gkey).subscribe(data=>{
    this.blankBayView=data;
     console.log(data);     


     this.title[0]= this.blankBayView.title;
     this.title[1]= this.blankBayView.title;
     this.title[2]= this.blankBayView.title;
     this.title[3]= this.blankBayView.title;
     this.title[4]= this.blankBayView.title;
     console.log("title:"+this.title[0])
console.log("title:"+this.title[1])
console.log("title:"+this.title[2])
console.log("title:"+this.title[3])
//var s=0;
var r=0;
     for (let blankBayView of data) { 
       this.bay=blankBayView.bay;

   
      this.title[r]=blankBayView.title;
     r++;

     this.maxData=blankBayView.maxData;
   
     this.minMaxData=blankBayView.minMaxData;

// for(var s=0;s<= this.maxData.length;s++){
//   console.log("maxDataInLoop.........:"+this.maxData[s])
// }


console.log("maxData:"+this.maxData.length)

console.log("minMaxData:"+this.minMaxData.length)


      this.name=blankBayView.name;
      this.maxColLimit=blankBayView.maxColLimit;

      this.maxCLimit=blankBayView.maxColLimit;
      this.maxCLimitSec=blankBayView.maxColLimit;
      
      this.maxRowLimAbv=blankBayView.maxRowLimAbv;
      this.minRowLimAbv=blankBayView.minRowLimAbv;


      this.minColLimit=blankBayView.minColLimit;
    console.log("minColLimit:"+this.minColLimit);
      console.log("maxColLimit:"+this.maxColLimit);
      this.minCLimit=blankBayView.minColLimit;
      this.minCLimitSec=blankBayView.minColLimit;
      this.centerLineA=blankBayView.centerLineA;
      this.centerLineB=blankBayView.centerLineB;
      this.gapLineA=blankBayView.gapLineA;


      var i=0;
      while(this.maxColLimit>=this.minColLimit)
      {
            if(this.minColLimit!=0){
                    if(this.maxColLimit<10){
                        this.maxColData[i]="0"+this.maxColLimit;
                      
                        i++;                     
                        
                    }
                    else{
                      this.maxColData[i]=this.maxColLimit;
                      i++;
                    }        
            }
            this.maxColLimit = this.maxColLimit-2;   
            
      }  
   var j=0;
      while(this.minCLimit<=this.maxCLimit)
      {
      
                    if(this.minCLimit<10){
                        this.maxColRight[j]="0"+this.minCLimit;
                     }
                    else{
                      this.maxColRight[j]=this.minCLimit;
                   
                    }        
                
            this.minCLimit = this.minCLimit+2;  
            j++;   
        
      } 
    

      var k=this.maxRowLimAbv;
    var l=this.minRowLimAbv;
    
     var m=0;
      for(var k=this.maxRowLimAbv; k >= this.minRowLimAbv;   k=k-2)
      { 

        if(k!=90){
          this.maxRowData[0]==" ";
          console.log(" this.maxRowData[0]:"+ this.maxRowData[0])
        }

        if(l==undefined||l==null||l==""){

         // console.log("terminate")
          break;
        }
          if(this.minRowLimAbv<82){
            this.maxRowData[m]=k;
            m++; 
          }
        else{
          this.maxRowData[m]=k;
          m++;
        }  
         //console.log("K........:"+k)
      }
  



      
      
    }

    console.log("title:"+this.title[0])
    console.log("maxData........:"+this.maxData[0])
      console.log("maxData........:"+this.maxData[1])
      console.log("maxData........:"+this.maxData[2])
      console.log("maxData........:"+this.maxData[3])
      console.log("maxData........:"+this.maxData[4])
      console.log("maxData........:"+this.maxData[5])

    this.exportBlankBayViewService.BlankBayViews(this.vvd_gkey).subscribe(data=>{
      this.blankBayViews=data;
      console.log(data);

      for (let blankBayViews of data) {

        console.log("blankBayViews:"+blankBayViews.urls[0][0][0])
        console.log("blankBayViews:"+blankBayViews.urls[0][0][1])
        console.log("blankBayViews:"+blankBayViews.urls[0][0][2])
        console.log("blankBayViews:"+blankBayViews.urls[0][0][3])
        console.log("blankBayViews:"+blankBayViews.urls[0][0][4])
        console.log("blankBayViews:"+blankBayViews.urls[0][0][5])
        console.log("blankBayViews:"+blankBayViews.urls[0][0][6])
        console.log("blankBayViews:"+blankBayViews.urls[0][0][7])
        console.log("blankBayViews:"+blankBayViews.urls[0][0][8])
        console.log("blankBayViews:"+blankBayViews.urls[0][0][9])
        console.log("blankBayViews:"+blankBayViews.urls[0][0][10])
        console.log("blankBayViews:"+blankBayViews.urls[0][0][11])
        console.log("blankBayViews:"+blankBayViews.urls[0][0][12])

        // for (var j = 0; j < this.blankBayViews.urls[0].length; j += 1) {
        //   console.log("blankBayViews:"+blankBayViews.urls[j].length)
        //   // for (var k = 0; k < this.blankBayViews.urls[0].length; k += 1) {
        //   //   console.log("blankBayViews:"+blankBayViews.urls[0].length)
        //   // }
        // }

        // for (var i = 0; i < this.blankBayViews.urls.length; i += 1) {
        //   for (var j = 0; j < this.blankBayViews.urls[0].length; j += 1) {
        //     console.log("blankBayViews:"+blankBayViews.urls[0].length)
        //     // for (var k = 0; k < this.blankBayViews.urls[0].length; k += 1) {
        //     //   console.log("blankBayViews:"+blankBayViews.urls[0].length)
        //     // }
        //   }
        // }

        
        //console.log("blankBayViews:"+blankBayViews.urls[0].length)


        
        console.log("blankBayViews:"+blankBayViews.urls[1].length)

        console.log("blankBayViews:"+blankBayViews.urls[2].length)
        console.log("blankBayViews:"+blankBayViews.urls[2].length)
        console.log("blankBayViews:"+blankBayViews.urls[3].length)
       }

    });






    
    });
  }




  setbalk(maxCLimitSecValue:any,minData:any,maxrow_avb:any,minrow_avb:any){

              while(maxrow_avb>=minrow_avb)
              {

           
                  while(maxCLimitSecValue >= minData)
                  {
                    if(maxCLimitSecValue < 10)
                    
                        {
                        this.kval= "0" + maxCLimitSecValue;

                        }
                        
                        else
                        {
                          this.kval = maxCLimitSecValue;
                          this.gapStr = this.kval+maxrow_avb;
                        }   
                        
                        // console.log("maxCLimit:"+maxCLimitSecValue);
                        // console.log("minCLimit:"+minData);
                        // console.log("maxrow_avb:"+maxrow_avb);
                        // console.log("minrow_avb:"+minrow_avb);
                        //console.log("Kval:"+this.kval)

                        if(minData!=0)
                        {       
                          if(maxCLimitSecValue>maxCLimitSecValue)
                          {   
                            
                           // console.log("maxCLimitSecValue"+maxCLimitSecValue)
                            this.totalShowStatus=true;  
                          }
                      
                          else 
                          {          
                            this.totalShowValue=true;            
                          } 

                        }
                        maxCLimitSecValue = maxCLimitSecValue-2;
                        // console.log("maxCLimitSecValue:"+maxCLimitSecValue);
                  }

                      while(minData<=maxCLimitSecValue)
                    {
                        // console.log("minData:"+minData)
                        //minData = minData+2;	
                    }

                    maxrow_avb=maxrow_avb-2;

                 //  console.log(" maxrow_avb:"+ maxrow_avb);


                  
             
                     
              }


              }





}



