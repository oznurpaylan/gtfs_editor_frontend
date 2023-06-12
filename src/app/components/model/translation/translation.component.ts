import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Translation } from 'src/app/interface/translation';
import { DataSendService } from 'src/app/service/data-send.service';
import { ModelService } from 'src/app/service/model.service';
import { SaveService } from 'src/app/service/save.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent  implements OnInit {
  private dataService=DataSendService.getInstance()
  fileName:any
  dataList: any = [];
  formValue!: FormGroup

  constructor(private saveService:SaveService, private modelService:ModelService, private formBuilder:FormBuilder,private toastService:ToastrService){
    this.fileName=this.dataService.fileName_data
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      table_name: '',
      field_name: '',
      language: '',
      translation: '',
      record_id: '',
      record_sub_id: '',
      field_value: '',
      session_id: this.fileName
    })


    this.modelService.translationSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  dataCreate(data: Translation) {
    this.modelService.translationCreate(data).subscribe((Response) => {
      if(Response){
        this.toastService.success('Kayıt Oluşturuldu...')
      }
    })
    this.modelService.translationSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  deleteToId: any;
  deleteTo(x: any) {
    console.log(x._id);
    this.deleteToId = x._id;
  }
  async deleteData() {
    this.modelService.translationDel(this.deleteToId).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Silindi...');
      }
    })
   await this.modelService.translationSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }


  updateToData = {
    table_name: '',
    field_name: '',
    language: '',
    translation: '',
    record_id: '',
    record_sub_id: '',
    field_value: '',
    session_id: ''
  }
  updateToId: any

  update(x: any) {
    this.updateToData = x
    this.updateToId=x._id
  }

  updateData() {
    this.modelService.translationUpdate(this.updateToId, this.updateToData).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Güncellendi...')
      }
    })
  }

  save(){
    this.saveService.translationSave(this.fileName).subscribe((Response) => {
      if (Response) {
        this.toastService.success(Response.message)
      }
    })
  }

}
