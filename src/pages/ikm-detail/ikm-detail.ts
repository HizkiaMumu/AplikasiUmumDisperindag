import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the IkmDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ikm-detail',
  templateUrl: 'ikm-detail.html',
})
export class IkmDetailPage {

  ikm: any;
  listProduk: any = true;
  detailIkm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitization: DomSanitizer) {
    this.ikm = this.navParams.get('ikm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IkmDetailPage');
  }

}
