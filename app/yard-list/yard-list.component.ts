import { Component, OnInit } from '@angular/core';
import {YardListService} from '../service/yardList/yard-list.service';

@Component({
  selector: 'app-yard-list',
  templateUrl: './yard-list.component.html',
  styleUrls: ['./yard-list.component.css']
})
export class YardListComponent implements OnInit {
 terminal:any;
 yardInfo:any;

 filterTerm: any;
 
 page: number = 1;
 count: number = 0;
 tableSize: number = 5;
//  tableSizes: any = [3, 6, 9, 12];
  constructor(
    private yardListService:YardListService,
  ) { 

    this.terminal="";
  }

  ngOnInit(): void {
    this.yardListService.yardList().subscribe(data=>{
      this.yardInfo=data;

    })
this.onSubmit();
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

  onSubmit(){
    this.yardListService.yardData(this.terminal).subscribe(data=>{
      this.yardInfo=data;
    })
  }


}
