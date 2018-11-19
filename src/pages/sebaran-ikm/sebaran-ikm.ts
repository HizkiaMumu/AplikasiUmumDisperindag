import { IonicPage, NavController, NavParams, AlertController, LoadingController, ActionSheetController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { HostProvider } from '../../providers/host/host';
import { IkmDetailPage } from '../ikm-detail/ikm-detail';

declare var L;

@IonicPage()
@Component({
  selector: 'page-sebaran-ikm',
  templateUrl: 'sebaran-ikm.html',
})
export class SebaranIkmPage {

  map: any;
  ikm: any;
  mapIkm: boolean;
  listIkm: boolean;
  latitude: any = -0.432914;
  longitude: any = 116.989678;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private host: HostProvider, private storage: Storage, private sanitization: DomSanitizer) {
    this.mapIkm = true;
    this.getIkm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SebaranIkmPage');
    this.loadMap();
  }

  getIkm(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/ikm", {headers: headers})
    .subscribe(
      data => {
        this.ikm = data;
        console.log(this.ikm);
        this.setMarkers();
      }, (err) => {
        console.log(err);
      });
  }

  loadMap(){
    setTimeout(() => {
      this.map = L.map('myMap', { zoomControl:false }).setView([this.latitude, this.longitude], 13);
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: 'sk.eyJ1IjoiaGl6a2lhbXVtdTI0IiwiYSI6ImNqbnlnY2VrcDBoaGwzd3FsNzFtazEzZjUifQ.f1Z0P21FPTpgXAoyLX1Dzg'
      }).addTo(this.map);
      // var marker = L.marker([this.latitude, this.longitude], { draggable: true }).addTo(this.map);
      //
      // marker.on('dragend', (e) => {
      //   this.latitude = marker.getLatLng().lat;
      //   this.longitude = marker.getLatLng().lng;
      //   console.log(this.latitude, this.longitude);
      // });
    }, 300);
  }

  setMarkers(){
    setTimeout(() => {
      console.log(this.ikm);
      for(let i = 0; i < this.ikm.ikm.length; i++){
        var marker = L.marker([this.ikm.ikm[i].latitude, this.ikm.ikm[i].longitude]).addTo(this.map);

        marker.on('click', (e) => {
          this.pushIkmDetailPage(this.ikm.ikm[i]);
        });
      }
    }, 3000)
  }

  pushIkmDetailPage(data){
    this.navCtrl.push(IkmDetailPage, {
      ikm: data
    });
  }

  showMapIkm(){
    if(!this.mapIkm){
      this.mapIkm = true;
      this.listIkm = false;
      this.loadMap();
      this.setMarkers();
    }
  }

  showListIkm(){
    this.mapIkm = false;
    this.listIkm = true;
  }

}
