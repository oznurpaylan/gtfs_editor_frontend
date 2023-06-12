import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trip } from '../interface/trip';
import { StopTime } from '../interface/stop-time';
import { Stop } from '../interface/stop';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  readonly ROOT_URL = 'http://localhost:5050/map/';
  constructor(private http: HttpClient) { }

  tripMapSearch(id: string | undefined) {
    return this.http.post<Trip[]>(this.ROOT_URL + `maptrips/${id}`, { title: 'mapSearch' });
  }
  stoptimesMapSearch(id: string | undefined) {
    return this.http.post<StopTime[]>(this.ROOT_URL + `mapstoptimes/${id}`, { title: 'mapSearch' });
  }
  stopMapSearch(id: string | undefined) {
    return this.http.post<Stop[]>(this.ROOT_URL + `mapstops/${id}`, { title: 'mapSearch' });
  }

}
