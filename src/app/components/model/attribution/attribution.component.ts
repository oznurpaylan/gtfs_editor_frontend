import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Attribution } from 'src/app/interface/attribution';
import { DataSendService } from 'src/app/service/data-send.service';
import { ModelService } from 'src/app/service/model.service';
import { SaveService } from 'src/app/service/save.service';

@Component({
  selector: 'app-attribution',
  templateUrl: './attribution.component.html',
  styleUrls: ['./attribution.component.css']
})
export class AttributionComponent implements OnInit {
  private dataService=DataSendService.getInstance()
  fileName:any
  dataList: any = [];
  formValue!: FormGroup

  constructor(private saveService:SaveService, private modelService:ModelService, private formBuilder:FormBuilder, private toastService:ToastrService){
    this.fileName=this.dataService.fileName_data
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      attribution_id: '',
      agency_id: '',
      route_id: '',
      trip_id: '',
      organization_name: '',
      is_producer: '',
      is_operator: '',
      is_authority: '',
      attribution_url: '',
      attribution_email: '',
      attribution_phone: '',
      session_id: this.fileName
    })

    this.modelService.attributionSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  dataCreate(data: Attribution) {
    this.modelService.attributionCreate(data).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Oluşturuldu...')
      }
    })
    this.modelService.attributionSearch(this.fileName).subscribe((Response) => {
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
    this.modelService.attributionDel(this.deleteToId).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Silindi...');
      }
    });

   await this.modelService.attributionSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }


  updateToData = {
    attribution_id: '',
    agency_id: '',
    route_id: '',
    trip_id: '',
    organization_name: '',
    is_producer: '',
    is_operator: '',
    is_authority: '',
    attribution_url: '',
    attribution_email: '',
    attribution_phone: '',
    session_id: ''
  }
  updateToId: any

  update(x: any) {
    this.updateToData = x
    this.updateToId=x._id
  }

  updateData() {
    this.modelService.attributionUpdate(this.updateToId, this.updateToData).subscribe((Response) => {
      if (Response) {
        console.log(Response)
        this.toastService.success('Kayıt Güncellendi...')      }
    })
  }

  save() {
    this.saveService.attributionSave(this.fileName).subscribe((Response) => {
      if (Response) {
        this.toastService.success(Response.message)
      }
    })
  }

}
