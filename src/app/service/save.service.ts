import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  readonly ROOT_URL = 'http://localhost:5050/save/';
  constructor(private http:HttpClient) { }

//saveModule ile kaydedilecek dosyaları işlemler yaptıktan sonra tekrar dosya üzerine yazma
  agencySave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`agency/${fileName}`,{title:'saveData'});
  }
  calendarSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`calendar/${fileName}`,{title:'saveData'});
  }
  routeSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`route/${fileName}`,{title:'saveData'});
  }
  stopSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`stop/${fileName}`,{title:'saveData'});
  }
  stopTimeSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`stoptime/${fileName}`,{title:'saveData'});
  }
  tripSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`trip/${fileName}`,{title:'saveData'});
  }
  attributionSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`attribution/${fileName}`,{title:'saveData'});
  }
  calendarDateSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`calendardate/${fileName}`,{title:'saveData'});
  }
  fareAttributesSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`fareattributes/${fileName}`,{title:'saveData'});
  }
  fareRuleSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`farerule/${fileName}`,{title:'saveData'});
  }
  feedInfoSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`feedinfo/${fileName}`,{title:'saveData'});
  }
  frequencieSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`frequencie/${fileName}`,{title:'saveData'});
  }
  levelSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`level/${fileName}`,{title:'saveData'});
  }
  pathwaySave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`shapeSave/${fileName}`,{title:'saveData'});
  }
  shapeSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`shape/${fileName}`,{title:'saveData'});
  }
  transferSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`transfer/${fileName}`,{title:'saveData'});
  }
  translationSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`translation/${fileName}`,{title:'saveData'});
  }
  areaSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`area/${fileName}`,{title:'saveData'});
  }
  stopAreaSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`stoparea/${fileName}`,{title:'saveData'});
  }
  fareTransferRulesSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`faretransferrules/${fileName}`,{title:'saveData'});
  }
  fareMediaSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`faremedia/${fileName}`,{title:'saveData'});
  }
  fareProductsSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`fareproduct/${fileName}`,{title:'saveData'});
  }
  fareLegRulesSave(fileName:string|undefined){
    return this.http.post<any>(this.ROOT_URL+`farelegrules/${fileName}`,{title:'saveData'});
  }

//zip dosyası oluşturup indirme linki görüntüleme
  saveZip(txtInput:string|undefined,fileName:string|undefined): Observable<any>{
    return this.http.post<any[]>(this.ROOT_URL+`zip/${txtInput}.zip`,{name: fileName})
  }

}
