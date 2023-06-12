import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  readonly ROOT_URL = 'http://localhost:5050/add';
  constructor(private http:HttpClient) { }

//add contollerına giderek ilgili dosyaya filename göndererek db kayıt işlemi yapar
  addAgency(name:string){
    return this.http.post(this.ROOT_URL+`/agency/${name}`,{ title: 'add' })
  }
  addCalendar(name:string){
    return this.http.post(this.ROOT_URL+`/calendar/${name}`,{ title: 'add' })
  }
  addRoute(name:string){
    return this.http.post(this.ROOT_URL+`/route/${name}`,{ title: 'add' })
  }
  addStop(name:string){
    return this.http.post(this.ROOT_URL+`/stop/${name}`,{ title: 'add' })
  }
  addStopTime(name:string){
    return this.http.post(this.ROOT_URL+`/stoptime/${name}`,{ title: 'add' })
  }
  addTrip(name:string){
    return this.http.post(this.ROOT_URL+`/trip/${name}`,{ title: 'add' })
  }
  addAttribution(name:string){
    return this.http.post(this.ROOT_URL+`/attribution/${name}`,{ title: 'add' })
  }
  addCalendarDate(name:string){
    return this.http.post(this.ROOT_URL+`/calendardate/${name}`,{ title: 'add' })
  }
  addFareRule(name:string){
    return this.http.post(this.ROOT_URL+`/farerule/${name}`,{ title: 'add' })
  }
  addFareAttributes(name:string){
    return this.http.post(this.ROOT_URL+`/fareattributes/${name}`,{ title: 'add' })
  }
  addFeedInfo(name:string){
    return this.http.post(this.ROOT_URL+`/feedinfo/${name}`,{ title: 'add' })
  }
  addFrequencie(name:string){
    return this.http.post(this.ROOT_URL+`/frequencie/${name}`,{ title: 'add' })
  }
  addLevel(name:string){
    return this.http.post(this.ROOT_URL+`/level/${name}`,{ title: 'add' })
  }
  addPathway(name:string){
    return this.http.post(this.ROOT_URL+`/pathway/${name}`,{ title: 'add' })
  }
  addShape(name:string){
    return this.http.post(this.ROOT_URL+`/shape/${name}`,{ title: 'add' })
  }
  addTransfer(name:string){
    return this.http.post(this.ROOT_URL+`/transfer/${name}`,{ title: 'add' })
  }
  addTranslations(name:string){
    return this.http.post(this.ROOT_URL+`/translations/${name}`,{ title: 'add' })
  }
  addArea(name:string){
    return this.http.post(this.ROOT_URL+`/area/${name}`,{ title: 'add' })
  }
  addStopArea(name:string){
    return this.http.post(this.ROOT_URL+`/stoparea/${name}`,{ title: 'add' })
  }
  addFareTransferRules(name:string){
    return this.http.post(this.ROOT_URL+`/faretransferrules/${name}`,{ title: 'add' })
  }
  addFareMedia(name:string){
    return this.http.post(this.ROOT_URL+`/faremedia/${name}`,{ title: 'add' })
  }
  addFareProduct(name:string){
    return this.http.post(this.ROOT_URL+`/fareproduct/${name}`,{ title: 'add' })
  }
  addFareLegRules(name:string){
    return this.http.post(this.ROOT_URL+`/farelegrules/${name}`,{ title: 'add' })
  }
}
