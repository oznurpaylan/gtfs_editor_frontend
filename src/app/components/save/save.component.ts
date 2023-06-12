import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { DataSendService } from 'src/app/service/data-send.service';
import { SaveService } from 'src/app/service/save.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements AfterViewChecked{

  fileName:any=[]
  txtInput=''
  data: any = []
  private dataService= DataSendService.getInstance()
  constructor( private saveService:SaveService, private change:ChangeDetectorRef) {}

  ngAfterViewChecked(): void {
    this.fileName= this.dataService.fileName_data //servisten filename data almak
    this.change.detectChanges()
  }

  saveZip(){ //saveZip modul ile zip dosyası oluşturur dosya adı ve indirme linki verir
    //const body=JSON.stringify(this.fName);
    this.saveService.saveZip(this.txtInput,this.fileName).subscribe((Response) => {
      if (Response) {
        this.data[0]=Response[0]
        //console.log(this.data)
      }
    }
  )}

}
