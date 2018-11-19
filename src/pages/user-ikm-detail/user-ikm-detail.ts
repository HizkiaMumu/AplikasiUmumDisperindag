import { IonicPage, NavController, NavParams, AlertController, LoadingController, ActionSheetController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { HostProvider } from '../../providers/host/host';
import { ProdukFormPage } from '../produk-form/produk-form';

@IonicPage()
@Component({
  selector: 'page-user-ikm-detail',
  templateUrl: 'user-ikm-detail.html',
})
export class UserIkmDetailPage {

  ikm: any;
  produks: any;
  user: any;

  produkIkm: any;
  detailIkm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private host: HostProvider, private storage: Storage, private sanitization: DomSanitizer, public actionSheetCtrl: ActionSheetController) {
    this.produkIkm = true;
    this.ikm = this.navParams.get('ikm');
    console.log(this.ikm);
    this.storage.get('user').then((user) => {
      console.log(user);
      this.user = user;
    });
    this.getProduks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserIkmDetailPage');
  }

  getProduks(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/ikm/produk/" + this.ikm.id, {headers: headers})
    .subscribe(
      data => {
        this.produks = data;
        console.log(this.produks);
      }, (err) => {
        console.log(err);
      });
  }

  showProdukIkm(){
    this.produkIkm = true;
    this.detailIkm = false;
  }

  showDetailIkm(){
    this.produkIkm = false;
    this.detailIkm = true;
  }

  pushProdukForm(){
    this.navCtrl.push(ProdukFormPage, {
      ikm: this.ikm
    });
  }

  showOption(data){
    let actionSheet = this.actionSheetCtrl.create({
     title: data.nama,
     buttons: [
       {
         text: 'Edit',
         role: 'edit',
         handler: () => {
           console.log('Edit clicked');
           this.editProduk(data);
         }
       },
       {
         text: 'Delete',
         handler: () => {
           console.log('Delete clicked');
           this.deleteProduk(data);
         }
       }
     ]
    });

    actionSheet.present();
  }

  editProduk(produk){
    this.navCtrl.push(ProdukFormPage, {
      produk: produk
    });
  }

  deleteProduk(produk){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/ikm/produk/delete/" + produk.id, {headers: headers})
    .subscribe(
      data => {
        console.log("Berhasil menghapus Produk");
        this.getProduks();
      }, (err) => {
        console.log(err);
      });
  }

}
