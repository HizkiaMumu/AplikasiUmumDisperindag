import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

import { HostProvider } from '../../providers/host/host';

@IonicPage()
@Component({
  selector: 'page-detail-pengumuman',
  templateUrl: 'detail-pengumuman.html',
})
export class DetailPengumumanPage {

  data: any;
  pengumumanId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private host: HostProvider, private http: HttpClient) {
    this.pengumumanId = this.navParams.get('id');
    this.getPengumumanDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPengumumanPage');
  }

  getPengumumanDetail(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/pengumuman/" + this.pengumumanId, {headers: headers})
    .subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      }, (err) => {
        console.log(err);
      });
  }

}
