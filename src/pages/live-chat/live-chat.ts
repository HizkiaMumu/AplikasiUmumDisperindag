import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LiveChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-live-chat',
  templateUrl: 'live-chat.html',
})
export class LiveChatPage {

  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.showLoading();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiveChatPage');
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Mohon tunggu...'
    });

    this.loading.present();
  }

  dismissLoading(){
    setTimeout(() => {
      this.loading.dismiss()
    }, 2000);
  }

}
