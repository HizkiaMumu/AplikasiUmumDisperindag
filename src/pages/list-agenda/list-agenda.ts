import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

import { HostProvider } from '../../providers/host/host';
import { DetailAgendaPage } from '../detail-agenda/detail-agenda';

@IonicPage()
@Component({
  selector: 'page-list-agenda',
  templateUrl: 'list-agenda.html',
})
export class ListAgendaPage {

  data: any;
  listAgenda: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private host: HostProvider, private http: HttpClient) {
    this.getAgenda();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListAgendaPage');
  }

  getAgenda(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/agenda", {headers: headers})
    .subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      }, (err) => {
        console.log(err);
      });
  }

  pushDetailAgendaPage(id){
    this.navCtrl.push(DetailAgendaPage, {
      id: id
    });
  }

  getItems(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() != '') {
      let headers = new HttpHeaders();
      headers.append("Content-Type","application/json");
      headers.append("Accept","application/json");
      this.http.get(this.host.baseUrl + "/agenda/search?keyword=" + val, {headers: headers})
      .subscribe(
        data => {
          this.data = data;
          console.log(this.data);
        }, (err) => {
          console.log(err);
        });
    } else {
      this.getAgenda();
    }
  }

}
