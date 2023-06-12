import { Component, OnInit } from '@angular/core';
import { DataSendService } from 'src/app/service/data-send.service';
import { MapService } from 'src/app/service/map.service';
import { ModelService } from 'src/app/service/model.service';

// haritada belirtilecek özellikler için interface
interface Marker {
  lat: number;
  lng: number;
  label: string;
  draggable: boolean;
  //  content:string;
}

interface Point {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private dataService = DataSendService.getInstance();
  fileName: any;
  routeList: any = [];

  //harita başlangıç  konumu
  lat: number = 40.9935007;
  lng: number =37.8237751;

  constructor(private modelService: ModelService,private mapService: MapService) {
    this.fileName = this.dataService.fileName_data;
  }
  ngOnInit(): void {
    //kullanıcıya routr_short_name göstermek için router modelinde arama yapıllılr
    this.modelService.routeSearch(this.fileName).subscribe((Response) => {
      if (Response) {
        this.routeList = Response;
      }
    });
  }

  routeId: any;
  tripList: any = []; //tıklandığında hangi yöne gideceğini göstermek
  routeDirection(id: any) {
    this.routeId = id; //tıklanan router_short_namein id si
    this.mapService.tripMapSearch(this.routeId).subscribe((Response) => {
      //ilgili router id ye ait tripler için db arama
      if (Response) {
        this.tripList = Response
      }
    });
  }
  tripId: any
  stopTimesList: any = []
  tripDirection(id: any) {
    this.tripId = id; //gelen trip_id
    this.mapService.stoptimesMapSearch(this.tripId).subscribe((Response) => {
      //trip_id ye göre db stop_times de arama
      this.stopTimesList = Response;
      this.addMarker()
    });
  }

  markers: Marker[] = [
    // {
    //   lat: 40.96398403289484,
    //   lng: 37.98577544371733,
    //   label: 'B',
    //   draggable: true,
    // },
  ]
  points:Point[] = []
  stopId: any = []
  stopList: any = []
  stopSequence:any=[]
  addMarker() { //haritaya merker ekleme
    console.log(this.stopTimesList)
    for (let i = 0; i <= this.stopTimesList[length].stop_sequence; i++) { //sequencie sırayla gelir
      this.stopId = this.stopTimesList[i].stop_id;

      this.mapService.stopMapSearch(this.stopId).subscribe((Response) => {//stopid ye göre ilgili stop tablosundaki verileri alma
        this.stopList = Response

        this.markers.push({  //stopListe ki verileri haritada işaretlemek için
          lat: this.stopList[0].stop_lat,
          lng: this.stopList[0].stop_lon,
          label: this.stopList[0].stop_name,
          draggable: false,
          //content:"bilgi mesajı"
        })

        this.points.push({ //işaretlenen yerler arasında çizgi çicerek birleştirmek
          lat: parseFloat(this.stopList[0].stop_lat),
          lng: parseFloat(this.stopList[0].stop_lon),
        })
      })
    }
  }

  clickedMarker(lat: number,lng:number) {
    console.log(`marker: lat- ${lat}, lng- ${lng}`);
  }
}
