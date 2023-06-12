import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Area } from 'src/app/interface/area';
import { DataSendService } from 'src/app/service/data-send.service';
import { ModelService } from 'src/app/service/model.service';
import { SaveService } from 'src/app/service/save.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  private dataService=DataSendService.getInstance()
  fileName:any
  dataList: any = [];
  formValue!: FormGroup

  constructor(private saveService:SaveService, private modelService:ModelService, private formBuilder:FormBuilder,private toastService:ToastrService){
    this.fileName=this.dataService.fileName_data
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      area_id:'',
      area_name:'',
      session_id: this.fileName
    })


    this.modelService.areaSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }


  dataCreate(data: Area) {
    this.modelService.areaCreate(data).subscribe((Response) => {
      if(Response){
        this.toastService.success('Kayıt Başarılı...')
      }
    })
    this.modelService.areaSearch(this.fileName).subscribe((Response) => {
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
    this.modelService.areaDel(this.deleteToId).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Silindi...');
      }
    });

    //sayfayı yenilemek için tekrar çağırma
   await this.modelService.areaSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  updateToData = {
    area_id: '',
    area_name: '',
    session_id: ''
  }
  updateToId: any

  update(x: any) {
    this.updateToData = x
    this.updateToId=x._id
  }

  updateData() {
    this.modelService.areaUpdate(this.updateToId, this.updateToData).subscribe((Response) => {
      if (Response) {
        console.log(Response)
        this.toastService.success('Kayıt Güncellendi...')      }
    })
  }

  save(){
    this.saveService.areaSave(this.fileName).subscribe((Response) => {
      if (Response) {
        this.toastService.success(Response.message)
      }
    })
  }

}
