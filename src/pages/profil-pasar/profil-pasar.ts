import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

import { HostProvider } from '../../providers/host/host';

@IonicPage()
@Component({
  selector: 'page-profil-pasar',
  templateUrl: 'profil-pasar.html',
})
export class ProfilPasarPage {

  profilPasar: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private host: HostProvider) {
    this.profilPasar = this.navParams.get('profilPasar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPasarPage');
  }

}
