import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FeedInfo } from 'src/app/interface/feed-info';
import { DataSendService } from 'src/app/service/data-send.service';
import { ModelService } from 'src/app/service/model.service';
import { SaveService } from 'src/app/service/save.service';

@Component({
  selector: 'app-feed-info',
  templateUrl: './feed-info.component.html',
  styleUrls: ['./feed-info.component.css']
})
export class FeedInfoComponent  implements OnInit {
  private dataService=DataSendService.getInstance()
  fileName:any
  dataList: any = [];
  formValue!: FormGroup

  constructor(private saveService:SaveService, private modelService:ModelService, private formBuilder:FormBuilder,private toastService:ToastrService){
    this.fileName=this.dataService.fileName_data
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      feed_publisher_name: '',
      feed_publisher_url: '',
      feed_lang: '',
      default_lang: '',
      feed_start_date: '',
      feed_end_date: '',
      feed_version: '',
      feed_contact_email: '',
      feed_contact_url: '',
      session_id: this.fileName
    })


    this.modelService.feedInfoSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }

  dataCreate(data: FeedInfo) {
    this.modelService.feedInfoCreate(data).subscribe((Response) => {
      if(Response){
        this.toastService.success('Kayıt Oluşturuldu...')
      }
    })
    this.modelService.feedInfoSearch(this.fileName).subscribe((Response) => {
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
    this.modelService.feedInfoDel(this.deleteToId).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Silindi...');
      }
    })
   await this.modelService.feedInfoSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.dataList = Response;
      }
    });
  }


  updateToData = {
    feed_publisher_name: '',
    feed_publisher_url: '',
    feed_lang: '',
    default_lang: '',
    feed_start_date: '',
    feed_end_date: '',
    feed_version: '',
    feed_contact_email: '',
    feed_contact_url: '',
    session_id: ''
  }
  updateToId: any

  update(x: any) {
    this.updateToData = x
    this.updateToId=x._id
  }

  updateData() {
    this.modelService.feedInfoUpdate(this.updateToId, this.updateToData).subscribe((Response) => {
      if (Response) {
        this.toastService.success('Kayıt Güncellendi...')
      }
    })
  }

  save(){
    this.saveService.feedInfoSave(this.fileName).subscribe((Response) => {
      if (Response) {
        this.toastService.success(Response.message)
      }
    })
  }

}
