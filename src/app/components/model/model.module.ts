import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgencyComponent } from './agency/agency.component';
import { AttributionComponent } from './attribution/attribution.component';
import { CalendarDateComponent } from './calendar-date/calendar-date.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FareAttributeComponent } from './fare-attribute/fare-attribute.component';
import { FareLegRuleComponent } from './fare-leg-rule/fare-leg-rule.component';
import { FareMediaComponent } from './fare-media/fare-media.component';
import { FareProductComponent } from './fare-product/fare-product.component';
import { FareRuleComponent } from './fare-rule/fare-rule.component';
import { FareTransferRuleComponent } from './fare-transfer-rule/fare-transfer-rule.component';
import { FeedInfoComponent } from './feed-info/feed-info.component';
import { FrequencieComponent } from './frequencie/frequencie.component';
import { LevelComponent } from './level/level.component';
import { PathwayComponent } from './pathway/pathway.component';
import { RouteComponent } from './route/route.component';
import { ShapeComponent } from './shape/shape.component';
import { StopAreaComponent } from './stop-area/stop-area.component';
import { StopTimeComponent } from './stop-time/stop-time.component';
import { StopComponent } from './stop/stop.component';
import { TransferComponent } from './transfer/transfer.component';
import { TranslationComponent } from './translation/translation.component';
import { TripComponent } from './trip/trip.component';
import { AreaComponent } from './area/area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AgencyComponent,
    AttributionComponent,
    CalendarDateComponent,
    CalendarComponent,
    FareAttributeComponent,
    FareLegRuleComponent,
    FareMediaComponent,
    FareProductComponent,
    FareRuleComponent,
    FareTransferRuleComponent,
    FeedInfoComponent,
    FrequencieComponent,
    LevelComponent,
    PathwayComponent,
    RouteComponent,
    ShapeComponent,
    StopAreaComponent,
    StopTimeComponent,
    StopComponent,
    TransferComponent,
    TranslationComponent,
    TripComponent,
    AreaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 5000, // 5 saniye
      progressBar: true,
    }),
    ]
})
export class ModelModule { }
