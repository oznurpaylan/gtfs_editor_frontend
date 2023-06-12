import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZipService {

  readonly ROOT_URL = 'http://localhost:5050';
  constructor(private http: HttpClient) {}

  postUpload(formData:any) { //gelen dosyayı backende atarak dosya yükleme işlemi
    return this.http.post<any[]>(this.ROOT_URL + '/upload',formData);
  }

  postDecompressFile(fileName: string) {
    //zip dosya ayıklama
    return this.http.post<any[]>(
      this.ROOT_URL + `/filedecompress/${fileName}`,
      { title: 'Decompress' }
    );
  }

  getFileList() {
    //zip uploads içindeki dosya listeleme
    return this.http.get<any[]>(this.ROOT_URL + '/filelist');
  }

  deleteDeleteFile(fileName: string) {
    //zip dosya silme
    return this.http.delete(this.ROOT_URL + `/filedelete/${fileName}`);
  }
}
