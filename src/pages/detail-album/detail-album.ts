import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { HostProvider } from '../../providers/host/host';
import { DetailImagePage } from '../detail-image/detail-image';

@IonicPage()
@Component({
  selector: 'page-detail-album',
  templateUrl: 'detail-album.html',
})
export class DetailAlbumPage {

  albumId: any;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private host: HostProvider, private http: HttpClient, public sanitization: DomSanitizer) {
    this.albumId = this.navParams.get('id');
    this.getDetailAlbum();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailAlbumPage');
  }

  getDetailAlbum(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/galeri-foto/" + this.albumId, {headers: headers})
    .subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      }, (err) => {
        console.log(err);
      });
  }

  pushDetailImagePage(data){
    this.navCtrl.push(DetailImagePage, {
      image: data
    });
  }

}
