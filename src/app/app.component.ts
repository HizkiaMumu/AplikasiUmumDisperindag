import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { ListBeritaPage } from '../pages/list-berita/list-berita';
import { ListAgendaPage } from '../pages/list-agenda/list-agenda';
import { ListPasarPage } from '../pages/list-pasar/list-pasar';
import { ListPengumumanPage } from '../pages/list-pengumuman/list-pengumuman';
import { GaleriFotoPage } from '../pages/galeri-foto/galeri-foto';
import { GaleriVideoPage } from '../pages/galeri-video/galeri-video';
import { RegistrasiIkmPage } from '../pages/registrasi-ikm/registrasi-ikm';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { SebaranIkmPage } from '../pages/sebaran-ikm/sebaran-ikm';
import { ListIkmPage } from '../pages/list-ikm/list-ikm';
import { ProfilDisperindagPage } from '../pages/profil-disperindag/profil-disperindag';
import { KontakPage } from '../pages/kontak/kontak';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  isLogin: any;
  isLogout: any;

  pages: Array<{title: string, component: any}>;
  loggedInPages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Berita', component: ListBeritaPage },
      { title: 'Agenda', component: ListAgendaPage },
      { title: 'Harga Komoditi', component: ListPasarPage },
      { title: 'Pengumuman', component: ListPengumumanPage },
      { title: 'Galeri Foto', component: GaleriFotoPage },
      { title: 'Galeri Video', component: GaleriVideoPage },
      { title: 'Sebaran IKM', component: SebaranIkmPage },
      { title: 'List IKM', component: ListIkmPage },
      { title: 'Profil Disperindag', component: ProfilDisperindagPage },
      { title: 'Kontak', component: KontakPage }
    ];

    this.loggedInPages = [
      { title: 'Profile', component: UserProfilePage },
      { title: 'Registrasi IKM', component: RegistrasiIkmPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      this.checkIfLoggedIn();

      this.splashScreen.hide();
    });
  }

  checkIfLoggedIn(){
    console.log("checking...");
    this.storage.get('isLogin').then((loggedIn) => {
      if (loggedIn) {
        this.isLogin = true;
        this.isLogout = false;
        console.log("logged in");
        this.rootPage = UserProfilePage;
      } else {
        this.isLogin = false;
        this.isLogout = true;
        console.log("logout");
        this.rootPage = HomePage;
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  pushLoginPage(){
    this.nav.setRoot(LoginPage);
  }

  logout(){
    this.storage.remove('token');
    this.storage.set('isLogin', false);
    this.storage.set('isLogout', true);
    this.nav.setRoot(LoginPage);
    this.isLogin = false;
    this.isLogout = true;
  }

}
