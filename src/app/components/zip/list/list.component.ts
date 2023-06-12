import { AfterViewChecked, Component } from '@angular/core';
import { DataSendService } from 'src/app/service/data-send.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewChecked{

  private dataService= DataSendService.getInstance()
  arrayList: any = [];

  constructor() {}

  ngAfterViewChecked(): void {
    this.arrayList= this.dataService.arrayList_data
  console.log(this.arrayList)
  }

}
