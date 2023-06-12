import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Agency } from '../interface/agency';
import { Calendar } from '../interface/calendar';
import { Route } from '../interface/route';
import { Stop } from '../interface/stop';
import { StopTime } from '../interface/stop-time';
import { Trip } from '../interface/trip';
import { Attribution } from '../interface/attribution';
import { CalendarDate } from '../interface/calendar-date';
import { FareAttribute } from '../interface/fare-attribute';
import { FareRule } from '../interface/fare-rule';
import { FeedInfo } from '../interface/feed-info';
import { Frequencie } from '../interface/frequencie';
import { Level } from '../interface/level';
import { Pathway } from '../interface/pathway';
import { Shape } from '../interface/shape';
import { Transfer } from '../interface/transfer';
import { Translation } from '../interface/translation';
import { Area } from '../interface/area';
import { StopArea } from '../interface/stop-area';
import { FareTransferRule } from '../interface/fare-transfer-rule';
import { FareMedia } from '../interface/fare-media';
import { FareProduct } from '../interface/fare-product';
import { FareLegRule } from '../interface/fare-leg-rule';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  readonly ROOT_URL = 'http://localhost:5050/model/';
  constructor(private http: HttpClient) { }

  //dataUpdate modelUpdate için
  agencyUpdate(id:any,data:Agency){
    return this.http.put<Agency[]>(this.ROOT_URL+ `agency/update/${id}`, data)
  }
  calendarUpdate(id:any,data:Calendar){
    return this.http.put<Calendar[]>(this.ROOT_URL+ `calendar/update/${id}`, data)
  }
  routeUpdate(id:any,data:Route){
    return this.http.put<Route[]>(this.ROOT_URL+ `route/update/${id}`, data)
  }
  stopUpdate(id:any,data:Stop){
    return this.http.put<Stop[]>(this.ROOT_URL+ `stop/update/${id}`, data)
  }
  stopTimeUpdate(id:any,data:StopTime){
    return this.http.put<StopTime[]>(this.ROOT_URL+ `stoptime/update/${id}`, data)
  }
  tripUpdate(id:any,data:Trip){
    return this.http.put<Trip[]>(this.ROOT_URL+ `trip/update/${id}`, data)
  }
  attributionUpdate(id:any,data:Attribution){
    return this.http.put<Attribution[]>(this.ROOT_URL+ `attribution/update/${id}`, data)
  }
  calendarDateUpdate(id:any,data:CalendarDate){
    return this.http.put<CalendarDate[]>(this.ROOT_URL+ `calendardate/update/${id}`, data)
  }
  fareAttributeUpdate(id:any,data:FareAttribute){
    return this.http.put<FareAttribute[]>(this.ROOT_URL+ `fareattribute/update/${id}`, data)
  }
  fareRuleUpdate(id:any,data:FareRule){
    return this.http.put<FareRule[]>(this.ROOT_URL+ `farerule/update/${id}`, data)
  }
  feedInfoUpdate(id:any,data:FeedInfo){
    return this.http.put<FeedInfo[]>(this.ROOT_URL+ `feedinfo/update/${id}`, data)
  }
  frequencieUpdate(id:any,data:Frequencie){
    return this.http.put<Frequencie[]>(this.ROOT_URL+ `frequencie/update/${id}`, data)
  }
  levelUpdate(id:any,data:Level){
    return this.http.put<Level[]>(this.ROOT_URL+ `level/update/${id}`, data)
  }
  pathwayUpdate(id:any,data:Pathway){
    return this.http.put<Pathway[]>(this.ROOT_URL+ `pathway/update/${id}`, data)
  }
  shapeUpdate(id:any,data:Shape){
    return this.http.put<Shape[]>(this.ROOT_URL+ `shape/update/${id}`, data)
  }
  transferUpdate(id:any,data:Transfer){
    return this.http.put<Transfer[]>(this.ROOT_URL+ `transfer/update/${id}`, data)
  }
  translationUpdate(id:any,data:Translation){
    return this.http.put<Translation[]>(this.ROOT_URL+ `translation/update/${id}`, data)
  }
  areaUpdate(id:any,data:Area){
    return this.http.put<Area[]>(this.ROOT_URL+ `area/update/${id}`, data)
  }
  stopAreaUpdate(id:any,data:StopArea){
    return this.http.put<StopArea[]>(this.ROOT_URL+ `stoparea/update/${id}`, data)
  }
  fareTransferRuleUpdate(id:any,data:FareTransferRule){
    return this.http.put<FareTransferRule[]>(this.ROOT_URL+ `faretransferrule/update/${id}`, data)
  }
  fareMediaUpdate(id:any,data:FareMedia){
    return this.http.put<FareMedia[]>(this.ROOT_URL+ `faremedia/update/${id}`, data)
  }
  fareProductUpdate(id:any,data:FareProduct){
    return this.http.put<FareProduct[]>(this.ROOT_URL+ `fareproduct/update/${id}`, data)
  }
  fareLegRuleUpdate(id:any,data:FareLegRule){
    return this.http.put<FareLegRule[]>(this.ROOT_URL+ `farelegrule/update/${id}`, data)
  }


  //dataCreate modelCreate için
  agencyCreate(data: Agency) {
    return this.http.post<Agency[]>(this.ROOT_URL + `agency`, data)
  }
  calendarCreate(data: Calendar) {
    return this.http.post<Calendar[]>(this.ROOT_URL + `calendar`, data)
  }
  routeCreate(data: Route) {
    return this.http.post<Route[]>(this.ROOT_URL + `route`, data)
  }
  stopCreate(data: Stop) {
    return this.http.post<Stop[]>(this.ROOT_URL + `stop`, data)
  }
  stopTimeCreate(data: StopTime) {
    return this.http.post<StopTime[]>(this.ROOT_URL + `stoptime`, data)
  }
  tripCreate(data: Trip) {
    return this.http.post<Trip[]>(this.ROOT_URL + `trip`, data)
  }
  attributionCreate(data: Attribution) {
    return this.http.post<Attribution[]>(this.ROOT_URL + `attribution`, data)
  }
  calendarDateCreate(data: CalendarDate) {
    return this.http.post<CalendarDate[]>(this.ROOT_URL + `calendardate`, data)
  }
  fareAttributeCreate(data: FareAttribute) {
    return this.http.post<FareAttribute[]>(this.ROOT_URL + `fareattribute`, data)
  }
  fareRuleCreate(data: FareRule) {
    return this.http.post<FareRule[]>(this.ROOT_URL + `farerule`, data)
  }
  feedInfoCreate(data: FeedInfo) {
    return this.http.post<FeedInfo[]>(this.ROOT_URL + `feedinfo`, data)
  }
  frequencieCreate(data: Frequencie) {
    return this.http.post<Frequencie[]>(this.ROOT_URL + `frequencie`, data)
  }
  levelCreate(data: Level) {
    return this.http.post<Level[]>(this.ROOT_URL + `level`, data)
  }
  pathwayCreate(data: Pathway) {
    return this.http.post<Pathway[]>(this.ROOT_URL + `pathway`, data)
  }
  shapeCreate(data: Shape) {
    return this.http.post<Shape[]>(this.ROOT_URL + `shape`, data)
  }
  transferCreate(data: Transfer) {
    return this.http.post<Transfer[]>(this.ROOT_URL + `transfer`, data)
  }
  translationCreate(data: Translation) {
    return this.http.post<Translation[]>(this.ROOT_URL + `translation`, data)
  }
  areaCreate(data: Area) {
    return this.http.post<Area[]>(this.ROOT_URL + `area`, data)
  }
  stopAreaCreate(data: StopArea) {
    return this.http.post<StopArea[]>(this.ROOT_URL + `stoparea`, data)
  }
  fareTransferRuleCreate(data: FareTransferRule) {
    return this.http.post<FareTransferRule[]>(this.ROOT_URL + `faretransferrule`, data)
  }
  fareMediaCreate(data: FareMedia) {
    return this.http.post<FareMedia[]>(this.ROOT_URL + `faremedia`, data)
  }
  fareProductCreate(data: FareProduct) {
    return this.http.post<FareProduct[]>(this.ROOT_URL + `fareproduct`, data)
  }
  fareLegRuleCreate(data: FareLegRule) {
    return this.http.post<FareLegRule[]>(this.ROOT_URL + `farelegrule`, data)
  }


  //dataSearch modelSearch için
  agencySearch(fileName: string | undefined) {
    return this.http.post<Agency[]>(this.ROOT_URL + `agency/${fileName}`, { title: 'searchData' });
  }
  calendarSearch(fileName: string | undefined) {
    return this.http.post<Calendar[]>(this.ROOT_URL + `calendar/${fileName}`, { title: 'searchData' });
  }
  routeSearch(fileName: string | undefined) {
    return this.http.post<Route[]>(this.ROOT_URL + `route/${fileName}`, { title: 'searchData' });
  }
  stopSearch(fileName: string | undefined) {
    return this.http.post<Stop[]>(this.ROOT_URL + `stop/${fileName}`, { title: 'searchData' });
  }
  stopTimeSearch(fileName: string | undefined) {
    return this.http.post<StopTime[]>(this.ROOT_URL + `stoptime/${fileName}`, { title: 'searchData' });
  }
  tripSearch(fileName: string | undefined) {
    return this.http.post<Trip[]>(this.ROOT_URL + `trip/${fileName}`, { title: 'searchData' });
  }
  attributionSearch(fileName: string | undefined) {
    return this.http.post<Attribution[]>(this.ROOT_URL + `attribution/${fileName}`, { title: 'searchData' });
  }
  calendarDateSearch(fileName: string | undefined) {
    return this.http.post<CalendarDate[]>(this.ROOT_URL + `calendardate/${fileName}`, { title: 'searchData' });
  }
  fareAttributeSearch(fileName: string | undefined) {
    return this.http.post<FareAttribute[]>(this.ROOT_URL + `fareattribute/${fileName}`, { title: 'searchData' });
  }
  fareRuleSearch(fileName: string | undefined) {
    return this.http.post<FareRule[]>(this.ROOT_URL + `farerule/${fileName}`, { title: 'searchData' });
  }
  feedInfoSearch(fileName: string | undefined) {
    return this.http.post<FeedInfo[]>(this.ROOT_URL + `feedinfo/${fileName}`, { title: 'searchData' });
  }
  frequencieSearch(fileName: string | undefined) {
    return this.http.post<Frequencie[]>(this.ROOT_URL + `frequencie/${fileName}`, { title: 'searchData' });
  }
  levelSearch(fileName: string | undefined) {
    return this.http.post<Level[]>(this.ROOT_URL + `level/${fileName}`, { title: 'searchData' });
  }
  pathwaySearch(fileName: string | undefined) {
    return this.http.post<Pathway[]>(this.ROOT_URL + `pathway/${fileName}`, { title: 'searchData' });
  }
  shapeSearch(fileName: string | undefined) {
    return this.http.post<Shape[]>(this.ROOT_URL + `shape/${fileName}`, { title: 'searchData' });
  }
  transferSearch(fileName: string | undefined) {
    return this.http.post<Transfer[]>(this.ROOT_URL + `transfer/${fileName}`, { title: 'searchData' });
  }
  translationSearch(fileName: string | undefined) {
    return this.http.post<Translation[]>(this.ROOT_URL + `translation/${fileName}`, { title: 'searchData' });
  }
  areaSearch(fileName: string | undefined) {
    return this.http.post<Area[]>(this.ROOT_URL + `area/${fileName}`, { title: 'searchData' });
  }
  stopAreaSearch(fileName: string | undefined) {
    return this.http.post<StopArea[]>(this.ROOT_URL + `stoparea/${fileName}`, { title: 'searchData' });
  }
  fareTransferRuleSearch(fileName: string | undefined) {
    return this.http.post<FareTransferRule[]>(this.ROOT_URL + `faretransferrule/${fileName}`, { title: 'searchData' });
  }
  fareMediaSearch(fileName: string | undefined) {
    return this.http.post<FareMedia[]>(this.ROOT_URL + `faremedia/${fileName}`, { title: 'searchData' });
  }
  fareProductSearch(fileName: string | undefined) {
    return this.http.post<FareProduct[]>(this.ROOT_URL + `fareproduct/${fileName}`, { title: 'searchData' });
  }
  fareLegRuleSearch(fileName: string | undefined) {
    return this.http.post<FareLegRule[]>(this.ROOT_URL + `farelegrule/${fileName}`, { title: 'searchData' });
  }


  //dataDelete modelDelete için
  agencyDel(id: any) {
    return this.http.delete(this.ROOT_URL + `agency/delete/${id}`)
  }
  calendarDel(id: any) {
    return this.http.delete(this.ROOT_URL + `calendar/delete/${id}`)
  }
  routeDel(id: any) {
    return this.http.delete(this.ROOT_URL + `route/delete/${id}`)
  }
  stopDel(id: any) {
    return this.http.delete(this.ROOT_URL + `stop/delete/${id}`)
  }
  stopTimeDel(id: any) {
    return this.http.delete(this.ROOT_URL + `stoptime/delete/${id}`)
  }
  tripDel(id: any) {
    return this.http.delete(this.ROOT_URL + `trip/delete/${id}`)
  }
  attributionDel(id: any) {
    return this.http.delete(this.ROOT_URL + `attribution/delete/${id}`)
  }
  calendarDateDel(id: any) {
    return this.http.delete(this.ROOT_URL + `calendardate/delete/${id}`)
  }
  fareAttributeDel(id: any) {
    return this.http.delete(this.ROOT_URL + `fareattribute/delete/${id}`)
  }
  fareRuleDel(id: any) {
    return this.http.delete(this.ROOT_URL + `farerule/delete/${id}`)
  }
  feedInfoDel(id: any) {
    return this.http.delete(this.ROOT_URL + `feedinfo/delete/${id}`)
  }
  frequencieDel(id: any) {
    return this.http.delete(this.ROOT_URL + `frequencie/delete/${id}`)
  }
  levelDel(id: any) {
    return this.http.delete(this.ROOT_URL + `level/delete/${id}`)
  }
  pathwayDel(id: any) {
    return this.http.delete(this.ROOT_URL + `pathway/delete/${id}`)
  }
  shapeDel(id: any) {
    return this.http.delete(this.ROOT_URL + `shape/delete/${id}`)
  }
  transferDel(id: any) {
    return this.http.delete(this.ROOT_URL + `transfer/delete/${id}`)
  }
  translationDel(id: any) {
    return this.http.delete(this.ROOT_URL + `translation/delete/${id}`)
  }
  areaDel(id: any) {
    return this.http.delete(this.ROOT_URL + `area/delete/${id}`)
  }
  stopAreaDel(id: any) {
    return this.http.delete(this.ROOT_URL + `stoparea/delete/${id}`)
  }
  fareTransferRuleDel(id: any) {
    return this.http.delete(this.ROOT_URL + `faretransferrule/delete/${id}`)
  }
  fareMediaDel(id: any) {
    return this.http.delete(this.ROOT_URL + `faremedia/delete/${id}`)
  }
  fareProductDel(id: any) {
    return this.http.delete(this.ROOT_URL + `fareproduct/delete/${id}`)
  }
  fareLegRuleDel(id: any) {
    return this.http.delete(this.ROOT_URL + `farelegrule/delete/${id}`)
  }
}
