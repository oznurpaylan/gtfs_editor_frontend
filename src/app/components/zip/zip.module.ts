import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecompressComponent } from './decompress/decompress.component';
import { ListComponent } from './list/list.component';
import { UploadComponent } from './upload/upload.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UploadComponent,
    DecompressComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ZipModule { }
