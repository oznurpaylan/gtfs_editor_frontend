import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZipComponent } from './components/zip/zip.component';
import { ModelComponent } from './components/model/model.component';
import { AddComponent } from './components/add/add.component';
import { UploadComponent } from './components/zip/upload/upload.component';
import { DecompressComponent } from './components/zip/decompress/decompress.component';
import { ListComponent } from './components/zip/list/list.component';
import { SaveComponent } from './components/save/save.component';
import { AgencyComponent } from './components/model/agency/agency.component';
import { CalendarComponent } from './components/model/calendar/calendar.component';
import { RouteComponent } from './components/model/route/route.component';
import { StopComponent } from './components/model/stop/stop.component';
import { StopTimeComponent } from './components/model/stop-time/stop-time.component';
import { TripComponent } from './components/model/trip/trip.component';
import { AttributionComponent } from './components/model/attribution/attribution.component';
import { CalendarDateComponent } from './components/model/calendar-date/calendar-date.component';
import { FareAttributeComponent } from './components/model/fare-attribute/fare-attribute.component';
import { FareRuleComponent } from './components/model/fare-rule/fare-rule.component';
import { FeedInfoComponent } from './components/model/feed-info/feed-info.component';
import { FrequencieComponent } from './components/model/frequencie/frequencie.component';
import { LevelComponent } from './components/model/level/level.component';
import { PathwayComponent } from './components/model/pathway/pathway.component';
import { ShapeComponent } from './components/model/shape/shape.component';
import { TransferComponent } from './components/model/transfer/transfer.component';
import { TranslationComponent } from './components/model/translation/translation.component';
import { AreaComponent } from './components/model/area/area.component';
import { StopAreaComponent } from './components/model/stop-area/stop-area.component';
import { FareTransferRuleComponent } from './components/model/fare-transfer-rule/fare-transfer-rule.component';
import { FareMediaComponent } from './components/model/fare-media/fare-media.component';
import { FareProductComponent } from './components/model/fare-product/fare-product.component';
import { FareLegRuleComponent } from './components/model/fare-leg-rule/fare-leg-rule.component';
import { MapComponent } from './components/map/map.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '', component: ZipComponent,children:[
    {path:'upload',component:UploadComponent,},
    {path:'filedecompress',component:DecompressComponent},
    {path:'filelist',component:ListComponent}
  ]},
  { path: 'add', component: AddComponent},
  { path: 'model', component: ModelComponent,children:[
    {path: 'agency',component:AgencyComponent},
    {path: 'calendar',component:CalendarComponent},
    {path: 'route',component:RouteComponent},
    {path: 'stop',component:StopComponent},
    {path: 'stoptime',component:StopTimeComponent},
    {path: 'trip',component:TripComponent},
    {path: 'attribution',component:AttributionComponent},
    {path: 'calendardate',component:CalendarDateComponent},
    {path: 'fareattribute',component:FareAttributeComponent},
    {path: 'farerule',component:FareRuleComponent},
    {path: 'feedinfo',component:FeedInfoComponent},
    {path: 'frequencie',component:FrequencieComponent},
    {path: 'level',component:LevelComponent},
    {path: 'pathway',component:PathwayComponent},
    {path: 'shape',component:ShapeComponent},
    {path: 'transfer',component:TransferComponent},
    {path: 'translation',component:TranslationComponent},
    {path: 'area',component:AreaComponent},
    {path: 'stoparea',component:StopAreaComponent},
    {path: 'faretransferrule',component:FareTransferRuleComponent},
    {path: 'faremedia',component:FareMediaComponent},
    {path: 'fareproduct',component:FareProductComponent},
    {path: 'farelegrule',component:FareLegRuleComponent},
  ]},
  { path: 'save', component: SaveComponent },
  { path: 'map', component: MapComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
