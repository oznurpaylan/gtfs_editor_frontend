import { EventEmitter, Injectable, Input, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSendService {

  constructor() { }

  private static instance:DataSendService  //dosya yükledikten sonra gelen verileri diğer comp ile paylaşmak için servis
  public static getInstance():DataSendService{
    if(!DataSendService.instance){
      DataSendService.instance=new DataSendService()
    }
    return DataSendService.instance
  }

  public fileName_data:any=''    //ilk veriyi aldığında burda tutar ve diğer comp arasında kullanabilmeyi sağlar
  public decompressList_data:any=[]
  public arrayList_data:any=[]




//veri paylaşmka için 2 opsiyonel
//dataService
  // @Output() fileName_data = new EventEmitter<any>() //fileName
  // @Output() decompressList_data= new EventEmitter<any>() //decompressList
  // @Output() arrayList_data=new EventEmitter<any>() //arrayList


//parent comp
  // sendData() {
  //   this.dataService.zip_upload_data.emit(this.fileName)
  // }

//child comp
//sub: Subscription | undefined

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
