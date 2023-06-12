import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Frequencie } from 'src/app/interface/frequencie';
import { DataSendService } from 'src/app/service/data-send.service';
import { ModelService } from 'src/app/service/model.service';
import { SaveService } from 'src/app/service/save.service';

@Component({
  selector: 'app-frequencie',
  templateUrl: './frequencie.component.html',
  styleUrls: ['./frequencie.component.css']
})
export class FrequencieComponent  implements OnInit {
  private dataService=DataSendService.getInstance()
  fileName:any
  dataList: any = [];
  formValue!: FormGroup

  constructor(private saveService:SaveService, private modelService:ModelService, private formBuilder:FormBuilder ,private toastService:ToastrService){
    this.fileName=this.dataService.fileName_data
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      trip_id: '',
      start_time: '',
      end_time: '',
      headway_secs: '',
      exact_times: '',
      session_id: this.fileName
    })


    this.modelService.frequencieSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  dataCreate(data: Frequencie) {
    this.modelService.frequencieCreate(data).subscribe((Response) => {
      if(Response){
        this.toastService.success('Kayıt Oluşturuldu...')
      }
    })
    this.modelService.frequencieSearch(this.fileName).subscribe((Response) => {
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
  async deleteData() {
    this.modelService.frequencieDel(this.deleteToId).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Silindi...');
      }
    });

    //sayfayı yenilemek için tekrar çağırma
   await this.modelService.frequencieSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  updateToData = {
    trip_id: '',
    start_time: '',
    end_time: '',
    headway_secs: '',
    exact_times: '',
    session_id: ''
  }
  updateToId: any

  update(x: any) {
    this.updateToData = x
    this.updateToId=x._id
  }

  updateData() {
    this.modelService.frequencieUpdate(this.updateToId, this.updateToData).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Güncellendi...')
      }
    })
  }

  save(){
    this.saveService.frequencieSave(this.fileName).subscribe((Response) => {
      if (Response) {
        this.toastService.success(Response.message)
      }
    })
  }

}
