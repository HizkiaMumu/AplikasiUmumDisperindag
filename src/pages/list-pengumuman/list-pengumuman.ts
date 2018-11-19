import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

import { HostProvider } from '../../providers/host/host';
import { DetailPengumumanPage } from '../detail-pengumuman/detail-pengumuman';

@IonicPage()
@Component({
  selector: 'page-list-pengumuman',
  templateUrl: 'list-pengumuman.html',
})
export class ListPengumumanPage {

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private host: HostProvider, private http: HttpClient) {
    this.getPengumuman();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPengumumanPage');
  }

  getPengumuman(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/pengumuman", {headers: headers})
    .subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      }, (err) => {
        console.log(err);
      });
  }

  removehtmltags(val){
    var tmp = document.createElement("DIV");
    tmp.innerHTML = val;
    return tmp.textContent || tmp.innerText || "";
  }

  pushDetailPengumumanPage(id){
    this.navCtrl.push(DetailPengumumanPage, {
      id: id
    });
  }

  getItems(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() != '') {
      let headers = new HttpHeaders();
      headers.append("Content-Type","application/json");
      headers.append("Accept","application/json");
      this.http.get(this.host.baseUrl + "/pengumuman/search?keyword=" + val, {headers: headers})
      .subscribe(
        data => {
          this.data = data;
          console.log(this.data);
        }, (err) => {
          console.log(err);
        });
    } else {
      this.getPengumuman();
    }
  }

}
