import { Component, OnInit } from '@angular/core';
import { PodListService } from '../service/podList/pod-list.service';

@Component({
  selector: 'app-po-dlist',
  templateUrl: './po-dlist.component.html',
  styleUrls: ['./po-dlist.component.css']
})
export class PoDListComponent implements OnInit {
  rotation_no:any;
  podInfo:any;
  
  IsoList:any;
  filterTerm: any;
  CATEGORIES: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  

  constructor(
    private podListData:PodListService,
  ) { 
    this.rotation_no="";
  }

  ngOnInit(): void {

    // this.podListData.podlist().subscribe(data=> {
    // this.dgInfo=data;
    // console.log(data);
    //  });

     
    this.podListData.podlist().subscribe(data => {
      console.log(data);
      this.podInfo = data;
      
    });
    this.onSubmit();
  }
onSubmit(){

  this.podListData.podForlistdata(this.rotation_no).subscribe(data => {
    this.podInfo=data;
   
    console.log(data);
    //this.router.navigate(['/dg/dg-cont-discharge-summary-list']);
 
  });

  // this.podListData.podForlistdata(this.rotation_no).subscribe(data => {
  //   console.log("welcome world");

  //   this.dgInfo = data;
  //   console.log(this.dgInfo);
    
  // });
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
}
