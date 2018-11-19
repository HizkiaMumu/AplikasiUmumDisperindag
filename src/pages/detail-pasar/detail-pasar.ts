import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

import { HostProvider } from '../../providers/host/host';
import { ProfilPasarPage } from '../profil-pasar/profil-pasar';

/**
 * Generated class for the DetailPasarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-pasar',
  templateUrl: 'detail-pasar.html',
})
export class DetailPasarPage {

  pasarId: any;
  data: any;
  komoditi: any = [];
  itemHeader: any = '';
  newItemHeader: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private host: HostProvider) {
    this.pasarId = navParams.get('id');
    this.getDetailPasar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPasarPage');
  }

  getDetailPasar(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/pasar/" + this.pasarId, {headers: headers})
    .subscribe(
      data => {
        this.data = data;
        console.log(this.data);
        this.sortDataByName();
      }, (err) => {
        console.log(err);
      });
  }

  sortDataByName(){
    this.komoditi = [];
    for(let i = 0; i < this.data.pasar.harga_komoditis.length; i++){
      if(this.data.pasar.harga_komoditis[i].status == "aktif"){
        const kategori = this.data.pasar.harga_komoditis[i].komoditi.nama.split(' ');
        let komoditi = {
          harga: this.data.pasar.harga_komoditis[i].harga,
          nama: this.data.pasar.harga_komoditis[i].komoditi.nama,
          thumbnail: this.data.pasar.harga_komoditis[i].komoditi.thumbnail,
          satuan: this.data.pasar.harga_komoditis[i].satuan,
          kategori: kategori[0]
        };
        this.komoditi.push(komoditi);
        this.komoditi.sort(function(a, b){
          var nameA = a.nama.toUpperCase(); // ignore upper and lowercase
          var nameB = b.nama.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        console.log(this.komoditi);
      }
    }
  }

  setItemHeader(data){
  }

  pushProfilPasarPage(data){
    this.navCtrl.push(ProfilPasarPage, {
      profilPasar: data
    });
  }

}
