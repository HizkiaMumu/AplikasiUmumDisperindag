import { IonicPage, NavController, NavParams, AlertController, LoadingController, MenuController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { HostProvider } from '../../providers/host/host';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-registrasi',
  templateUrl: 'registrasi.html',
})
export class RegistrasiPage {

  name: any;
  email: any;
  password: any;

  errMessage: any;
  loading: any;

  data: any;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams, private storage: Storage, private http: HttpClient, private host: HostProvider, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrasiPage');
  }

  popToLoginPage(){
    this.navCtrl.pop();
  }

  registerValidation(){
    this.showLoading();
    if(this.name != null){
      if(this.email != null){
        if(this.password != null){
          this.doRegister();
        } else {
          this.errMessage = 'Mohon masukan password anda';
          this.errAlert(this.errMessage);
          this.loading.dismiss();
        }
      } else {
        this.errMessage = 'Mohon masukan email anda';
        this.errAlert(this.errMessage);
        this.loading.dismiss();
      }
    } else {
      this.errMessage = 'Mohon masukan nama anda';
      this.errAlert(this.errMessage);
      this.loading.dismiss();
    }
  }

  doRegister(){
    const body = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");

    this.http.post(this.host.baseUrl + "/sign-up", body, {headers: headers})
    .subscribe(
      data => {
        this.data = data;
        this.successAlert('Registrasi berhasil');
        this.loading.dismiss();
        this.navCtrl.pop();
      }, (err) => {
        this.errAlert(err.error.message);
        this.loading.dismiss();
      });
  }

  successAlert(message){
    let alert = this.alertCtrl.create({
      title: 'Berhasil',
      subTitle: message,
      buttons: ['Ok']
    });
    alert.present();
  }

  errAlert(message){
    let alert = this.alertCtrl.create({
      title: 'Gagal',
      subTitle: message,
      buttons: ['Ok']
    });
    alert.present();
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Mohon tunggu...'
    });

    this.loading.present();
  }

}
