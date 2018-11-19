import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { HostProvider } from '../../providers/host/host';

@IonicPage()
@Component({
  selector: 'page-profil-disperindag',
  templateUrl: 'profil-disperindag.html',
})
export class ProfilDisperindagPage {

  profil: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private sanitization: DomSanitizer, private storage: Storage, private host: HostProvider) {
    this.getProfile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilDisperindagPage');
  }

  getProfile(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");

    this.http.get(this.host.baseUrl + "/profil-disperindag", {headers: headers})
    .subscribe(
      data => {
        this.profil = data;
        console.log(this.profil);
      }, (err) => {
        console.log(err);
      });
  }

}
