import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Stop } from 'src/app/interface/stop';
import { DataSendService } from 'src/app/service/data-send.service';
import { ModelService } from 'src/app/service/model.service';
import { SaveService } from 'src/app/service/save.service';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent  implements OnInit {
  private dataService=DataSendService.getInstance()
  fileName:any
  dataList: any = [];
  formValue!: FormGroup

  constructor(private saveService:SaveService, private modelService:ModelService, private formBuilder:FormBuilder,private toastService:ToastrService){
    this.fileName=this.dataService.fileName_data
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      stop_id: '',
      stop_name: '',
      stop_lat: '',
      stop_lon: '',
      stop_code: '',
      stop_desc: '',
      zone_id: '',
      stop_url: '',
      location_type: '',
      parent_station: '',
      stop_timezone: '',
      wheelchair_boarding: '',
      level_id: '',
      platform_code: '',
      session_id: this.fileName
    })


    this.modelService.stopSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  dataCreate(data: Stop) {
    this.modelService.stopCreate(data).subscribe((Response) => {
      if(Response){
        this.toastService.success('Kayıt Oluşturuldu...')
      }
    })
    this.modelService.stopSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  deleteToId: any
  deleteTo(x: any) {
    console.log(x._id);
    this.deleteToId = x._id;
  }
  async deleteData() {
    this.modelService.stopDel(this.deleteToId).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Silindi...');
      }
    })
   await this.modelService.stopSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  updateToData = {
    stop_id: '',
    stop_name: '',
    stop_lat: '',
    stop_lon: '',
    stop_code: '',
    stop_desc: '',
    zone_id: '',
    stop_url: '',
    location_type: '',
    parent_station: '',
    stop_timezone: '',
    wheelchair_boarding: '',
    level_id: '',
    platform_code: '',
    session_id: ''
  }
  updateToId: any

  update(x: any) {
    this.updateToData = x
    this.updateToId=x._id
  }

  updateData() {
    this.modelService.stopUpdate(this.updateToId, this.updateToData).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Güncellendi...')
      }
    })
  }

  save(){
    this.saveService.stopSave(this.fileName).subscribe((Response) => {
      if (Response) {
        this.toastService.success(Response.message)
      }
    })
  }

}
