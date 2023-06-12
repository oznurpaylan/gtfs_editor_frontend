import { AfterViewChecked, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddService } from 'src/app/service/add.service';
import { DataSendService } from 'src/app/service/data-send.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, AfterViewChecked {
  decompressList: any = []// veriler alınarak yapılacak servise gönderilen decompreslist ve filename gerekli
  fileName:any=[]
  txtPathName:string|undefined
  private dataService= DataSendService.getInstance()

  constructor(private addService: AddService,  private change:ChangeDetectorRef, private toastService:ToastrService) {}
  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.decompressList= this.dataService.decompressList_data
    this.fileName=this.dataService.fileName_data
    this.change.detectChanges()
  }

  add(path:any){ //seçilen dosya adına göre db'ye dosyaları ekler
    this.txtPathName=path
      if( this.txtPathName=='agency.txt'){
        this.addService.addAgency(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='calendar.txt'){
        this.addService.addCalendar(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='routes.txt'){
        this.addService.addRoute(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='stops.txt'){
        this.addService.addStop(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName =='stop_times.txt'){
        this.addService.addStopTime(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='trips.txt'){
        this.addService.addTrip(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='attributions.txt'){
        this.addService.addAttribution(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='calendar_dates.txt'){
        this.addService.addCalendarDate(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='fare_attributes.txt'){
        this.addService.addFareAttributes(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='fare_rules.txt'){
        this.addService.addFareRule(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='feed_info.txt'){
        this.addService.addFeedInfo(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='frequencies.txt'){
        this.addService.addFrequencie(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='levels.txt'){
        this.addService.addLevel(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='pathways.txt'){
        this.addService.addPathway(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='shapes.txt'){
        this.addService.addShape(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='transfers.txt'){
        this.addService.addTransfer(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='translations.txt'){
        this.addService.addTranslations(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='areas.txt'){
        this.addService.addArea(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='stop_areas.txt'){
        this.addService.addStopArea(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='fare_transfer_rules.txt'){
        this.addService.addFareTransferRules(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='fare_leg_rules.txt'){
        this.addService.addFareLegRules(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='fare_products.txt'){
        this.addService.addFareProduct(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

      if( this.txtPathName=='fare_media.txt'){
        this.addService.addFareMedia(this.fileName).subscribe(res=>console.log(res))
        this.toastService.success('Kayıt Başarılı...')
      }

  }
}
