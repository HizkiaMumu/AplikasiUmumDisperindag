import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { HostProvider } from '../../providers/host/host';
import { PlayVideoPage } from '../play-video/play-video';

@IonicPage()
@Component({
  selector: 'page-galeri-video',
  templateUrl: 'galeri-video.html',
})
export class GaleriVideoPage {

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private host: HostProvider, private sanitization: DomSanitizer) {
    this.getVideos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaleriVideoPage');
  }

  getVideos(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/galeri-video", {headers: headers})
    .subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      }, (err) => {
        console.log(err);
      });
  }

  pushPlayVideoPage(data){
    this.navCtrl.push(PlayVideoPage, {
      video: data
    })
  }

}
