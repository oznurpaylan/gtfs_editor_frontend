import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Shape } from 'src/app/interface/shape';
import { DataSendService } from 'src/app/service/data-send.service';
import { ModelService } from 'src/app/service/model.service';
import { SaveService } from 'src/app/service/save.service';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent  implements OnInit {
  private dataService=DataSendService.getInstance()
  fileName:any
  dataList: any = [];
  formValue!: FormGroup

  constructor(private saveService:SaveService, private modelService:ModelService, private formBuilder:FormBuilder,private toastService:ToastrService){
    this.fileName=this.dataService.fileName_data
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      shape_id: '',
      shape_pt_lat: '',
      shape_pt_lon: '',
      shape_dist_traveled: '',
      session_id: this.fileName
    })

    this.modelService.shapeSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  dataCreate(data: Shape) {
    this.modelService.shapeCreate(data).subscribe((Response) => {
      if(Response){
        this.toastService.success('Kayıt Oluşturuldu...')
      }
    })
    this.modelService.shapeSearch(this.fileName).subscribe((Response) => {
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
    this.modelService.shapeDel(this.deleteToId).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Silindi...');
      }
    })
   await this.modelService.shapeSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  updateToData = {
    shape_id: '',
    shape_pt_lat: '',
    shape_pt_lon: '',
    shape_dist_traveled: '',
    session_id: ''
  }
  updateToId: any

  update(x: any) {
    this.updateToData = x
    this.updateToId=x._id
  }

  updateData() {
    this.modelService.shapeUpdate(this.updateToId, this.updateToData).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Güncellendi...')
      }
    })
  }

  save(){
    this.saveService.shapeSave(this.fileName).subscribe((Response) => {
      if (Response) {
        this.toastService.success(Response.message)
      }
    })
  }

}
