import { APP_ID, Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ColDef, GridApi } from 'ag-grid-community';
import { Observable, Subscribable, Subscriber } from 'rxjs';
import { Data } from '../data';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
    selector: 'app-timely',
    templateUrl: './timely.component.html',
    styleUrls: ['./timely.component.css'] 
})
export class TimelyComponent  {

  st!: string;
  spClicked = false;
  times: Data[] = [];
  stNow!: Date;
  spNow!: Date;
  pName: string = "";
  newData!: Data
  durition!: Date
  hours : number = 0
  minutes : number = 0


  public rows: Observable<Date[]> | undefined;
  constructor(private dataService: DataService) {} 

  ngOnInit() {
    this.getData();
    this.dataService.start.subscribe((data: string)=>{
      this.st = data;
    })
  }
  
  public getData() {
    this.dataService.getTimeList().pipe(
      (response: Observable<Date[]>) => {
        return this.rows = response;
      }
    )
  }

  stop(){
    this.spClicked = true;  
    this.stNow = new Date(this.st);
    this.spNow = new Date();
    this.hours = this.spNow.getHours() - this.stNow.getHours()
    this.minutes = this.spNow.getMinutes() - this.stNow.getMinutes()
    this.durition = new Date(0,0,0,this.hours,this.minutes)
    this.addData()
    
  }
  
  addData(){
    this.newData  = {
    projectName: this.pName,
    startTime: this.stNow,
    stopTime: this.spNow,
    durition: this.durition
  };
    this.dataService.addData(this.newData).subscribe((newData)=> (this.times.push(newData)));
  }

}

