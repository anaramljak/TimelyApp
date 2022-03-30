import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { TimelyComponent } from '../timely/timely.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  stClicked = false;
  stTime!: string;
  constructor(private dd: MatDialog,private dataService: DataService) { }

  ngOnInit(): void {
  }
 
  start() {
    this.stClicked = true;
    this.stTime = new Date().toString();
    this.changeStart()
  }

  changeStart(){
    this.dataService.changeStart(this.stTime);
  }

  openDialog() {
    this.dd.open(TimelyComponent);
  }

}
