import { IonicPage, NavController, NavParams, AlertController, LoadingController, ActionSheetController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { HostProvider } from '../../providers/host/host';
import { UserIkmDetailPage } from '../user-ikm-detail/user-ikm-detail';
import { IkmDetailPage } from '../ikm-detail/ikm-detail';
import { RegistrasiIkmPage } from '../registrasi-ikm/registrasi-ikm';

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  user: any;
  ikm: any;
  ikmUser: any;
  ikmSaya: boolean;
  semuaIkm: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private http: HttpClient, private host: HostProvider, private sanitization: DomSanitizer, public actionSheetCtrl: ActionSheetController) {
    this.ikmSaya = true;
    this.semuaIkm = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

  ionViewDidEnter() {
    this.getSemuaIkm();
    this.storage.get('user').then((user) => {
      console.log(user);
      this.user = user;
      this.getUserIkm();
    });
  }

  getSemuaIkm(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/ikm", {headers: headers})
    .subscribe(
      data => {
        this.ikm = data;
        console.log(this.ikm);
      }, (err) => {
        console.log(err);
      });
  }

  getUserIkm(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/ikm/user/" + this.user.id, {headers: headers})
    .subscribe(
      data => {
        this.ikmUser = data;
        console.log(this.ikmUser);
      }, (err) => {
        console.log(err);
      });
  }

  pushUserIkmDetailPage(data){
    this.navCtrl.push(UserIkmDetailPage, {
      ikm: data
    });
  }

  pushIkmDetailPage(data){
    this.navCtrl.push(IkmDetailPage, {
      ikm: data
    })
  }

  pushRegistrasiIkm(){
    this.navCtrl.push(RegistrasiIkmPage);
  }

  showIkmSaya(){
    this.ikmSaya = true;
    this.semuaIkm = false;
  }

  showSemuaIkm(){
    this.ikmSaya = false;
    this.semuaIkm = true;
  }

  editIkm(data){
    this.navCtrl.push(RegistrasiIkmPage, {
      ikm: data
    });
  }

  deleteIkm(ikm){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");
    this.http.get(this.host.baseUrl + "/ikm/delete/" + ikm.id, {headers: headers})
    .subscribe(
      data => {
        console.log("Berhasil menghapus IKM");
        this.getUserIkm();
        this.getSemuaIkm();
      }, (err) => {
        console.log(err);
      });
  }

  presentActionSheet(data) {
    let actionSheet = this.actionSheetCtrl.create({
     title: data.nama_sentra,
     buttons: [
       {
         text: 'Edit',
         role: 'edit',
         handler: () => {
           console.log('Edit clicked');
           this.editIkm(data);
         }
       },
       {
         text: 'Delete',
         handler: () => {
           console.log('Delete clicked');
           this.deleteIkm(data);
         }
       }
     ]
    });

    actionSheet.present();
  }

}
