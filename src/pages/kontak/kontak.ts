import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { HostProvider } from '../../providers/host/host';

@IonicPage()
@Component({
  selector: 'page-kontak',
  templateUrl: 'kontak.html',
})
export class KontakPage {

  kontak: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private sanitization: DomSanitizer, private storage: Storage, private host: HostProvider) {
    this.getKontak();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KontakPage');
  }

  getKontak(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");

    this.http.get(this.host.baseUrl + "/kontak", {headers: headers})
    .subscribe(
      data => {
        this.kontak = data;
        console.log(this.kontak);
      }, (err) => {
        console.log(err);
      });
  }

}
