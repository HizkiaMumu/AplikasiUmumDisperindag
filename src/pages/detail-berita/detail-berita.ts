import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

import { HostProvider } from '../../providers/host/host';

/**
 * Generated class for the DetailBeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-berita',
  templateUrl: 'detail-berita.html',
})
export class DetailBeritaPage {

  idBerita: any;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private host: HostProvider) {
    this.idBerita = this.navParams.get('id');
    this.getBeritaDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailBeritaPage');
  }

  getBeritaDetail(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/berita/" + this.idBerita, {headers: headers})
    .subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      }, (err) => {
        console.log(err);
      });
  }

}
