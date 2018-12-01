import { IonicPage, NavController, NavParams, AlertController, LoadingController, MenuController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

import { HostProvider } from '../../providers/host/host';
import { ForgetPasswordPage } from '../forget-password/forget-password';

import { HomePage } from '../home/home';
import { UserProfilePage } from '../user-profile/user-profile';
import { RegistrasiPage } from '../registrasi/registrasi';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: any;
  password: any;
  validEmail: any;
  data: any;
  errMessage: any;
  loading: any;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams, private storage: Storage, private http: HttpClient, private host: HostProvider, private alertCtrl: AlertController, public loadingCtrl: LoadingController, public events: Events) {
    this.menuCtrl.close();
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.validEmail = re.test(String(email).toLowerCase());
  }

  loginValidation() {
    this.showLoading();
    if(this.email != null){
      this.validateEmail(this.email);
      if(this.validEmail){
        if(this.password != null){
          this.doLogin();
        } else {
          this.errMessage = 'Mohon masukan password anda';
          this.errAlert(this.errMessage);
          this.loading.dismiss();
        }
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

  doLogin() {
    const body = {
      email: this.email,
      password: this.password
    };

    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");

    this.http.post(this.host.baseUrl + "/sign-in", body, {headers: headers})
    .subscribe(
      data => {
        this.data = data;
        this.events.publish('user:login');
        if(this.data.token){
          this.storage.set('token', this.data.token);
          this.storage.set('user', this.data.user);
          this.storage.set('isLogin', true);
          this.storage.set('isLogout', false);
          this.navCtrl.setRoot(UserProfilePage);
        } else {
          this.errAlert('Terjadi kesalahan yang tidak diketahui');
        }

        this.loading.dismiss();
      }, (err) => {
        console.log(err);
        this.errAlert('Username atau password yang anda masukan salah.');
        this.loading.dismiss();
      });
  }

  pushForgetPasswordPage(){
    this.navCtrl.push(ForgetPasswordPage);
  }

  pushRegisterPage(){
    this.navCtrl.push(RegistrasiPage);
  }

  popToHome(){
    this.navCtrl.setRoot(HomePage);
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
