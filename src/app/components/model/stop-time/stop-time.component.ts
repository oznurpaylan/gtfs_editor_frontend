import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StopTime } from 'src/app/interface/stop-time';
import { DataSendService } from 'src/app/service/data-send.service';
import { ModelService } from 'src/app/service/model.service';
import { SaveService } from 'src/app/service/save.service';

@Component({
  selector: 'app-stop-time',
  templateUrl: './stop-time.component.html',
  styleUrls: ['./stop-time.component.css']
})
export class StopTimeComponent  implements OnInit {
  private dataService=DataSendService.getInstance()
  fileName:any
  dataList: any = [];
  formValue!: FormGroup

  constructor(private saveService:SaveService, private modelService:ModelService, private formBuilder:FormBuilder,private toastService:ToastrService){
    this.fileName=this.dataService.fileName_data
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      trip_id: '',
      stop_id: '',
      stop_sequence: '',
      arrival_time: '',
      departure_time: '',
      stop_headsign: '',
      pickup_type: '',
      drop_off_type: '',
      continuous_pickup: '',
      continuous_drop_off: '',
      shape_dist_traveled: '',
      timepoint: '',
      session_id: this.fileName
    })


    this.modelService.stopTimeSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }


  dataCreate(data: StopTime) {
    this.modelService.stopTimeCreate(data).subscribe((Response) => {
      if(Response){
        this.toastService.success('Kayıt Oluşturuldu...')
      }
    })
    this.modelService.stopTimeSearch(this.fileName).subscribe((Response) => {
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
    this.modelService.stopTimeDel(this.deleteToId).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Silindi...');
      }
    });

    //sayfayı yenilemek için tekrar çağırma
   await this.modelService.stopTimeSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  updateToData = {
    trip_id: '',
    stop_id: '',
    stop_sequence: '',
    arrival_time: '',
    departure_time: '',
    stop_headsign: '',
    pickup_type: '',
    drop_off_type: '',
    continuous_pickup: '',
    continuous_drop_off: '',
    shape_dist_traveled: '',
    timepoint: '',
    session_id: ''
  }
  updateToId: any

  update(x: any) {
    this.updateToData = x
    this.updateToId=x._id
  }

  updateData() {
    this.modelService.stopTimeUpdate(this.updateToId, this.updateToData).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Güncellendi...')
      }
    })
  }

  save(){
    this.saveService.stopTimeSave(this.fileName).subscribe((Response) => {
      if (Response) {
        this.toastService.success(Response.message)
      }
    })
  }

}
