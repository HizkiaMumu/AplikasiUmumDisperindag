import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

import { HostProvider } from '../../providers/host/host';

/**
 * Generated class for the ForgetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {

  email: any;
  errMessage: any;
  loading: any;
  validEmail: any;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private http: HttpClient, private host: HostProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPasswordPage');
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.validEmail = re.test(String(email).toLowerCase());
  }

  forgetPasswordValidation(){
    this.showLoading();
    if(this.email != null){
      this.validateEmail(this.email);
      if(this.validEmail){
        this.doForgetPassword();
      } else {
        this.errMessage = 'Email yang anda masukan tidak valid';
        this.errAlert(this.errMessage);
        this.loading.dismiss();
      }
    } else {
      this.errMessage = 'Mohon masukan email anda';
      this.errAlert(this.errMessage);
      this.loading.dismiss();
    }
  }

  doForgetPassword(){
    const body = {
      email: this.email
    };

    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");

    this.http.post(this.host.baseUrl + "/forget-password", body, {headers: headers})
    .subscribe(
      data => {
        this.data = data;
        this.successAlert('Kami telah mengirimkan link untuk mengganti password ke email anda.');
        this.loading.dismiss();
      }, (err) => {
        this.errAlert('Email yang anda masukan tidak terdaftar.');
        this.loading.dismiss();
      });
  }

  popPage(){
    this.navCtrl.pop();
  }

  errAlert(message){
    let alert = this.alertCtrl.create({
      title: 'Gagal',
      subTitle: message,
      buttons: ['Ok']
    });
    alert.present();
  }

  successAlert(message){
    let alert = this.alertCtrl.create({
      title: 'Berhasil',
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
