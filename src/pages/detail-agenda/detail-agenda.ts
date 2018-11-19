import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

import { HostProvider } from '../../providers/host/host';

@IonicPage()
@Component({
  selector: 'page-detail-agenda',
  templateUrl: 'detail-agenda.html',
})
export class DetailAgendaPage {

  agendaId: any;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private host: HostProvider) {
    this.agendaId = this.navParams.get('id');
    this.getAgendaDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailAgendaPage');
  }

  getAgendaDetail(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/agenda/" + this.agendaId, {headers: headers})
    .subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      }, (err) => {
        console.log(err);
      });
  }

}
