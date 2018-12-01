import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicImageLoader } from 'ionic-image-loader';
import { Keyboard } from '@ionic-native/keyboard';
import { Component } from '@angular/core';

import { HostProvider } from '../../providers/host/host';

import { ListBeritaPage } from '../list-berita/list-berita';
import { ListAgendaPage } from '../list-agenda/list-agenda';
import { ListPasarPage } from '../list-pasar/list-pasar';
import { ListPengumumanPage } from '../list-pengumuman/list-pengumuman';
import { GaleriFotoPage } from '../galeri-foto/galeri-foto';
import { SebaranIkmPage } from '../sebaran-ikm/sebaran-ikm';
import { ListIkmPage } from '../list-ikm/list-ikm';
import { LiveChatPage } from '../live-chat/live-chat';
import { DetailBeritaPage } from '../detail-berita/detail-berita';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any;
  news: any;
  banner: any;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams, private host: HostProvider, private http: HttpClient, public sanitization: DomSanitizer, private keyboard: Keyboard) {
    this.menuCtrl.swipeEnable(true);
    this.getNews();
    this.getBanners();
  }

  getBanners(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/banner", {headers: headers})
    .subscribe(
      data => {
        this.banner = data;
        console.log(this.banner);
      }, (err) => {
        console.log(err);
      });
  }

  pushListPasarPage(){
    this.navCtrl.push(ListPasarPage);
  }

  pushListBeritaPage(){
    this.navCtrl.push(ListBeritaPage);
  }

  pushListAgendaPage(){
    this.navCtrl.push(ListAgendaPage);
  }

  pushListPengumumanPage(){
    this.navCtrl.push(ListPengumumanPage);
  }

  pushGaleriFotoPage(){
    this.navCtrl.push(GaleriFotoPage);
  }

  pushSebaranIkmPage(){
    this.navCtrl.push(SebaranIkmPage);
  }

  pushListIkmPage(){
    this.navCtrl.push(ListIkmPage);
  }

  pushLiveChatPage(){
    this.navCtrl.push(LiveChatPage);
  }

  pushDetailBeritaPage(idBerita){
    this.navCtrl.push(DetailBeritaPage, {
      id: idBerita
    });
  }

  setRootHome(){
    this.navCtrl.setRoot(HomePage);
  }

  getItems(ev: any) {
    const val = ev.target.value;
    this.keyboard.hide();

    if (val && val.trim() != '') {
      let headers = new HttpHeaders();
      headers.append("Content-Type","application/json");
      headers.append("Accept","application/json");
      this.http.get(this.host.baseUrl + "/komoditi/search?keyword=" + val, {headers: headers})
      .subscribe(
        data => {
          this.data = data;
          console.log(this.data);
        }, (err) => {
          console.log(err);
        });
    } else {

    }
  }

  getNews(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/berita", {headers: headers})
    .subscribe(
      data => {
        this.news = data;
        console.log(this.news);
      }, (err) => {
        console.log(err);
      });
  }

}
