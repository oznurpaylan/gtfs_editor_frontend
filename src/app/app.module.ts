import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZipComponent } from './components/zip/zip.component';
import { AddComponent } from './components/add/add.component';
import { ModelComponent } from './components/model/model.component';
import { SaveComponent } from './components/save/save.component';
import { ZipModule } from './components/zip/zip.module';
import { ModelModule } from './components/model/model.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    ZipComponent,
    AddComponent,
    ModelComponent,
    SaveComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ZipModule,
    ModelModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 5000, // 10 saniye
      progressBar: true,
    }),
    AgmCoreModule.forRoot({
      apiKey:"", //YOUR_API_KEY
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
