import { IonicPage, NavController, NavParams, AlertController, LoadingController, ActionSheetController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { HostProvider } from '../../providers/host/host';
import { IkmDetailPage } from '../ikm-detail/ikm-detail';

@IonicPage()
@Component({
  selector: 'page-list-ikm',
  templateUrl: 'list-ikm.html',
})
export class ListIkmPage {

  ikm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private host: HostProvider, private storage: Storage, private sanitization: DomSanitizer) {
    this.getIkm();
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
      }, (err) => {
        console.log(err);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListIkmPage');
  }

  pushDetailIkmPage(data){
    this.navCtrl.push(IkmDetailPage, {
      ikm: data
    });
  }

}
