import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FareTransferRule } from 'src/app/interface/fare-transfer-rule';
import { DataSendService } from 'src/app/service/data-send.service';
import { ModelService } from 'src/app/service/model.service';
import { SaveService } from 'src/app/service/save.service';

@Component({
  selector: 'app-fare-transfer-rule',
  templateUrl: './fare-transfer-rule.component.html',
  styleUrls: ['./fare-transfer-rule.component.css']
})
export class FareTransferRuleComponent  implements OnInit {
  private dataService=DataSendService.getInstance()
  fileName:any
  dataList: any = [];
  formValue!: FormGroup

  constructor(private saveService:SaveService, private modelService:ModelService, private formBuilder:FormBuilder,private toastService:ToastrService){
    this.fileName=this.dataService.fileName_data
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      from_leg_group_id: '',
      to_leg_group_id: '',
      transfer_count: '',
      duration_limit: '',
      duration_limit_type: '',
      fare_transfer_type: '',
      fare_product_id: '',
      session_id: this.fileName
    })


    this.modelService.fareTransferRuleSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }


  dataCreate(data: FareTransferRule) {
    this.modelService.fareTransferRuleCreate(data).subscribe((Response) => {
      if(Response){
        this.toastService.success('Kayıt Oluşturuldu...')
      }
    })
    this.modelService.fareTransferRuleSearch(this.fileName).subscribe((Response) => {
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
    this.modelService.fareTransferRuleDel(this.deleteToId).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Silindi...');
      }
    });
   await this.modelService.fareTransferRuleSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  updateToData = {
    from_leg_group_id: '',
    to_leg_group_id: '',
    transfer_count: '',
    duration_limit: '',
    duration_limit_type: '',
    fare_transfer_type: '',
    fare_product_id: '',
    session_id: ''
  }
  updateToId: any

  update(x: any) {
    this.updateToData = x
    this.updateToId=x._id
  }

  updateData() {
    this.modelService.fareTransferRuleUpdate(this.updateToId, this.updateToData).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Güncellendi...')
      }
    })
  }

  save(){
    this.saveService.fareTransferRulesSave(this.fileName).subscribe((Response) => {
      if (Response) {
        this.toastService.success(Response.message)
      }
    })
  }

}
