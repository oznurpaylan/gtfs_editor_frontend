import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSendService } from 'src/app/service/data-send.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit,AfterViewChecked {

  private dataService= DataSendService.getInstance() //dataService
  filePath: string | undefined;
  decompressList: any = []
  fileName :any; //ilgili fileden gelecek yani datasend ile alınadak

  constructor(private router:Router, private change:ChangeDetectorRef) { }

  ngAfterViewChecked(): void {
    this.decompressList= this.dataService.decompressList_data //servisten  decompress cekmek için
    this.fileName= this.dataService.fileName_data //servisten filename data almak
    console.log(this.fileName)
    this.change.detectChanges()
  }

  ngOnInit(): void {}

  getChildView(path:any){ //seçilen dosya adına göre yönlendirme yaparak ilgili comp gider
    this.filePath=path

    if (this.filePath == 'agency.txt') {
      this.router.navigate(['/model/agency'])
    }
    if (this.filePath == 'areas.txt') {
      this.router.navigate(['/model/area'])
    }
    if (this.filePath == 'attributions.txt') {
      this.router.navigate(['/model/attribution'])
    }
    if (this.filePath == 'calendar_dates.txt') {
      this.router.navigate(['/model/calendardate'])
    }
    if (this.filePath == 'calendar.txt') {
      this.router.navigate(['/model/calendar'])
    }
    if (this.filePath == 'fare_attributes.txt') {
      this.router.navigate(['/model/fareattribute'])
    }
    if (this.filePath == 'fare_leg_rules.txt') {
      this.router.navigate(['/model/farelegrule'])
    }
    if (this.filePath == 'fare_media.txt') {
      this.router.navigate(['/model/faremedia'])
    }
    if (this.filePath == 'fare_products.txt') {
      this.router.navigate(['/model/fareproduct'])
    }
    if (this.filePath == 'fare_rules.txt') {
      this.router.navigate(['/model/farerule'])
    }
    if (this.filePath == 'fare_transfer_rules.txt') {
      this.router.navigate(['/model/faretransferrule'])
    }
    if (this.filePath == 'feed_info.txt') {
      this.router.navigate(['/model/feedinfo'])
    }
    if (this.filePath == 'frequencies.txt') {
      this.router.navigate(['/model/frequencie'])
    }
    if (this.filePath == 'levels.txt') {
      this.router.navigate(['/model/level'])
    }
    if (this.filePath == 'pathways.txt') {
      this.router.navigate(['/model/pathway'])
    }
    if (this.filePath == 'routes.txt') {
      this.router.navigate(['/model/route'])
    }
    if (this.filePath == 'shapes.txt') {
      this.router.navigate(['/model/shape'])
    }
    if (this.filePath == 'stop_areas.txt') {
      this.router.navigate(['/model/stoparea'])
    }
    if (this.filePath == 'stop_times.txt') {
      this.router.navigate(['/model/stoptime'])
    }
    if (this.filePath == 'stops.txt') {
      this.router.navigate(['/model/stop'])
    }
    if (this.filePath == 'transfers.txt') {
      this.router.navigate(['/model/transfer'])
    }
    if (this.filePath == 'translations.txt') {
      this.router.navigate(['/model/translation'])
    }
    if (this.filePath == 'trips.txt') {
      this.router.navigate(['/model/trip'])
    }
  }

}
