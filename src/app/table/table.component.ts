import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  OnDestroy,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, OnChanges, DoCheck {

  
  @Input() tableDetails: any = [];
  @Output() updateData = new EventEmitter<any>();
  keyValues: Array<string> = [];
  numbers = [];
   index = 1;
  constructor() { }

  ngOnChanges() {
    console.log(this.tableDetails);
  }
  ngOnInit() {
  }
  ngDoCheck() {
    if(this.tableDetails.data.length > 0)
    this.keyValues = Object.keys(this.tableDetails.data[0]);
    this.numbers = Array(this.tableDetails.totalNoOfPages).fill('x').map((x,i)=> i+1);
    console.log(this.numbers)

  }
  prev(){
    if(this.index !== 1){
        this.index -=1;
        this.updateData.emit(this.index);
    }

  }
  next(){
    if(this.index !== this.tableDetails.totalNoOfPages){
        this.index +=1;
        this.updateData.emit(this.index);
    }

  }
  nextPage(index) {
    if(this.index != index){
      this.index = index;
      this.updateData.emit(this.index);
    }
  }
}
