import { IonicPage, NavController, NavParams, AlertController, LoadingController, MenuController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { HostProvider } from '../../providers/host/host';
import { DetailPasarPage } from '../detail-pasar/detail-pasar';

/**
 * Generated class for the ListPasarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-pasar',
  templateUrl: 'list-pasar.html',
})
export class ListPasarPage {

  data: any;
  loading: any;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams, public loadingCtrl: LoadingController, private http: HttpClient, private host: HostProvider, private storage: Storage, public sanitization: DomSanitizer) {
    this.getPasar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPasarPage');
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Mohon tunggu...'
    });

    this.loading.present();
  }

  getPasar(){
    this.showLoading();
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/pasar", {headers: headers})
    .subscribe(
      data => {
        this.data = data;
        console.log(this.data);
        this.loading.dismiss();
      }, (err) => {
        console.log(err);
        this.loading.dismiss();
      });
  }

  pushDetailPasarPage(pasarId){
    this.navCtrl.push(DetailPasarPage, {
      id: pasarId
    });
  }

}
