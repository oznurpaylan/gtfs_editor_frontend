import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataSendService } from 'src/app/service/data-send.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})

export class UploadComponent implements OnInit , AfterViewChecked{

  fileName: any ;
  private dataService= DataSendService.getInstance() //dataService

  constructor( private change:ChangeDetectorRef) { }
  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.fileName= this.dataService.fileName_data //servisten filename data almak
    this.change.detectChanges()
  }

  // ngAfterContentInit() { //zip den gelen filename servis ile alınır
  //   this.sub = this.dataService.fileName_data.subscribe(
  //     (data:any) => {
  //       console.log(data)
  //       this.fileName = data
  //     }
  //   )
  // }

  // ngOnDestroy() {
  //   if (this.sub) {
  //     this.sub.unsubscribe()
  //   }
  // }


}
