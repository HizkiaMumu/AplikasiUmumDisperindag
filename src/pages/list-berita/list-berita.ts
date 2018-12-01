import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { HostProvider } from '../../providers/host/host';
import { DetailBeritaPage } from '../detail-berita/detail-berita';

/**
 * Generated class for the ListBeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-berita',
  templateUrl: 'list-berita.html',
})
export class ListBeritaPage {

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private host: HostProvider, public sanitization: DomSanitizer) {
    this.getBerita();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListBeritaPage');
  }

  getBerita(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/berita/recent", {headers: headers})
    .subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      }, (err) => {
        console.log(err);
      });
  }

  pushDetailBeritaPage(idBerita){
    this.navCtrl.push(DetailBeritaPage, {
      id: idBerita
    });
  }

}
