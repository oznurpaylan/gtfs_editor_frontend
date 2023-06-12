import { AfterViewChecked, Component, EventEmitter, Output } from '@angular/core';
import { DataSendService } from 'src/app/service/data-send.service';

@Component({
  selector: 'app-decompress',
  templateUrl: './decompress.component.html',
  styleUrls: ['./decompress.component.css']
})
export class DecompressComponent implements AfterViewChecked{


  decompressList: any = [];
  private dataService= DataSendService.getInstance()

  constructor() {}

  ngAfterViewChecked(): void {
    this.decompressList= this.dataService.decompressList_data
    console.log(this.decompressList)
  }
}
