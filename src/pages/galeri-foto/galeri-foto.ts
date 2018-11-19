import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { HostProvider } from '../../providers/host/host';
import { DetailAlbumPage } from '../detail-album/detail-album';

@IonicPage()
@Component({
  selector: 'page-galeri-foto',
  templateUrl: 'galeri-foto.html',
})
export class GaleriFotoPage {

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private host: HostProvider, private http: HttpClient, public sanitization: DomSanitizer) {
    this.getAlbums();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaleriFotoPage');
  }

  getAlbums(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/galeri-foto", {headers: headers})
    .subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      }, (err) => {
        console.log(err);
      });
  }

  pushDetailAlbum(id){
    this.navCtrl.push(DetailAlbumPage, {
      id: id
    });
  }

}
