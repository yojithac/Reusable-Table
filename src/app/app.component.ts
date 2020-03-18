import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private service: HttpServiceService){

  }
  title = 'table-grid';
  tableHeaders = ['Name','Phone','Email','Company','Date_entry','Org_num','Address_1',
  'City','Zip','Geo','Pan','Pin','Id','Status','Fee','Guid','Date_exit','Date_first','Date_recent','Url'];
  responseBody = [];
    tableData = {
      headers: this.tableHeaders,
      data: [],
      totalNoOfPages: 0
    };
    ngOnInit() {
        this.service.getJSON().subscribe((data)=>{
           this.responseBody = data;
           console.log(this.responseBody.slice(0,10));
           this.tableData.data = this.responseBody.slice(0,10);
            this.tableData.totalNoOfPages = this.responseBody.length /10;
            this.title='data'

        })
    }
    updateData(page) {
      this.tableData.data = this.responseBody.slice(page*10-10,page*10);
    }
}
