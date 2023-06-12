import { Component,OnInit } from '@angular/core';
import { DataSendService } from 'src/app/service/data-send.service';
import { ZipService } from 'src/app/service/zip.service';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css'],
})
export class ZipComponent implements OnInit {

  private dataService= DataSendService.getInstance()
  uploadFile: any;
  fileName: any
  decompressList: any = [];
  arrayList: any = [];

  constructor(private zipService: ZipService) {}
  ngOnInit(): void {}

  selectFile(event: any) { //inputdan seçilen dosya
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      //console.log(file)
      this.uploadFile = file;
      console.log(this.uploadFile);
    }
  }

  upload() { //seçilen dosyayı yükleme
    const formData = new FormData();
    formData.append('file', this.uploadFile);

    this.zipService.postUpload(formData).subscribe((Response: any) => {
      if (Response) {
        this.fileName = Response.message;
        this.dataService.fileName_data=this.fileName //filename dataservise atıldı comp kullanılmak için
      }
    })
  }

  // sendData() {
  //   this.dataService.zip_upload_data.emit(this.fileName)
  // }

  decompress() { //seçilen dosyanın dosya isimine göre decompress işlemi
    this.zipService.postDecompressFile(this.fileName).subscribe((Response) => {
      if (Response) {
        this.decompressList = Response;
        //console.log('liste ', this.decompressList.files);
        this.dataService.decompressList_data=this.decompressList //decompresslist dataservise atıldı comp kullanılmak için
      }
      if (this.decompressList.files == undefined) {
        window.alert('Dosya adına uygun listelenececk veri bulunamadı!');
      }
    });
  }

  list() {//dosyaları listeleme işlemi
    this.zipService.getFileList().subscribe((Response) => {
      if (Response) {
        //Response.map(data=>console.log(data.url+"---"+data.name))
        this.arrayList = Response;
        console.log('liste ', this.arrayList);

        this.dataService.arrayList_data=this.arrayList //arraylist dataservise atıldı comp kullanılmak için

      }
      if (Response.length == 0) {
        window.alert('Listelenecek veri buluhnamadı!');
      }
    });
  }

  deleteFile() { // seçilen dosya adına göre silme işlemi
    this.zipService.deleteDeleteFile(this.fileName).subscribe(
      (Response) => {
        if (Response) {
          console.log(Response);
          window.alert('Dosya Silindi...')
        }
      },
      (err) => {
        window.alert('Dosya Silme Hatası!'), console.log(err);
      }
    );
  }
}
