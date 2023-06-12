import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FareLegRule } from 'src/app/interface/fare-leg-rule';
import { DataSendService } from 'src/app/service/data-send.service';
import { ModelService } from 'src/app/service/model.service';
import { SaveService } from 'src/app/service/save.service';

@Component({
  selector: 'app-fare-leg-rule',
  templateUrl: './fare-leg-rule.component.html',
  styleUrls: ['./fare-leg-rule.component.css']
})
export class FareLegRuleComponent implements OnInit {
  private dataService = DataSendService.getInstance()
  fileName: any
  dataList: any = [];
  formValue!: FormGroup

  constructor(private saveService: SaveService, private modelService: ModelService, private formBuilder: FormBuilder, private toastService:ToastrService    ) {
    this.fileName = this.dataService.fileName_data
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      fare_product_id: '',
      leg_group_id: '',
      network_id: '',
      from_area_id: '',
      to_area_id: '',
      session_id: this.fileName
    })


    this.modelService.fareLegRuleSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }


  dataCreate(data: FareLegRule) {
    this.modelService.fareLegRuleCreate(data).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Oluşturuldu...')
      }
    })
    this.modelService.fareLegRuleSearch(this.fileName).subscribe((Response) => {
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
    this.modelService.fareLegRuleDel(this.deleteToId).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Silindi...');
      }
    });
   await this.modelService.fareLegRuleSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  updateToData = {
    fare_product_id: '',
    leg_group_id: '',
    network_id: '',
    from_area_id: '',
    to_area_id: '',
    session_id: ''
  }
  updateToId: any

  update(x: any) {
    this.updateToData = x
    this.updateToId = x._id
  }

  updateData() {
    this.modelService.fareLegRuleUpdate(this.updateToId, this.updateToData).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Güncellendi...')
      }
    })
  }


  save() {
    this.saveService.fareLegRulesSave(this.fileName).subscribe((Response) => {
      if (Response) {
        this.toastService.success(Response.message)
      }
    })
  }

}
