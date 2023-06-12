import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Agency } from 'src/app/interface/agency';
import { DataSendService } from 'src/app/service/data-send.service';
import { ModelService } from 'src/app/service/model.service';
import { SaveService } from 'src/app/service/save.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'],
})
export class AgencyComponent implements OnInit {
  private dataService = DataSendService.getInstance(); //dataService

  // fileName = '13.9.58sample-feed.zip'; // fileName:any dataserviceden alınacak
  fileName: any
  dataList: any = [];
  formValue!: FormGroup;

  constructor(private saveService: SaveService,private modelService: ModelService,private formBuilder: FormBuilder,private toastService: ToastrService) {
    this.fileName = this.dataService.fileName_data //dosya adını servisten almak oninitten önce çalışması için burda kullanılır.
    // console.log(this.fileName) //her yeniden güncelleme olduğunda sayfada değişiklikleri tekrar almalı afterviewchacked gibi
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({ //Form öğesi için model tanımlaması
      agency_id: '',
      agency_name: '',
      agency_url: '',
      agency_timezone: '',
      agency_lang: '',
      agency_phone: '',
      agency_fare_url: '',
      agency_email: '',
      session_id: this.fileName,
    });

    this.modelService.agencySearch(this.fileName).subscribe((Response) => {
      //sayfa yüklenirken verileri getirir.
      if (Response) {
        this.dataList = Response;
        console.log(this.dataList);
      }
    });
  }

  dataCreate(data: Agency) { //veri oluşturmak
    console.log(data);
    this.modelService.agencyCreate(data).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Başarılı...');
      }
    });

    //sayfayı yenilemek için tekrar çağırma eklenen veriyi de getirir
    this.modelService.agencySearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  deleteToId: any;
  deleteTo(x: any) {
    //tablodan gelen id ye göre silem
    console.log(x._id);
    this.deleteToId = x._id;
  }
  async deleteData() { //gelen id kaydedip silme işlemi
    this.modelService.agencyDel(this.deleteToId).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Silindi...');
      }
    });

    //sayfayı yenilemek için tekrar çağırma
    await this.modelService.agencySearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  updateToData = { //guncelleme yapılacak model tanımlama
    agency_id: '',
    agency_name: '',
    agency_url: '',
    agency_timezone: '',
    agency_lang: '',
    agency_phone: '',
    agency_fare_url: '',
    agency_email: '',
    session_id: '',
  };
  updateToId: any;

  update(x: any) { //güncelleme yapmak için verileri getirme
    this.updateToData = x;
    this.updateToId = x._id;
    console.log('toUpdate verileri ------ ', this.updateToData);
    console.log('id verileri ------ ', this.updateToId);
  }

  updateData() { //verileri güncelleme
    this.modelService
      .agencyUpdate(this.updateToId, this.updateToData)
      .subscribe((Response) => {
        if (Response) {
          console.log(Response);
          this.toastService.success('Kayıt Güncellendi...');
        }
      });
  }

  //saveModule
  save() {
    //saveModel olarak çalışır işlemlerden sonra dosyanın üzerine yazar
    this.saveService.agencySave(this.fileName).subscribe((Response) => {
      if (Response) {
        this.toastService.success(Response.message);
      }
    });
  }
}
