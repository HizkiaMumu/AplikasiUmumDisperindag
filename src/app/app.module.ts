import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPasarPage } from '../pages/list-pasar/list-pasar';
import { ForgetPasswordPage } from '../pages/forget-password/forget-password';
import { DetailPasarPage } from '../pages/detail-pasar/detail-pasar';
import { ListBeritaPage } from '../pages/list-berita/list-berita';
import { DetailBeritaPage } from '../pages/detail-berita/detail-berita';
import { ListAgendaPage } from '../pages/list-agenda/list-agenda';
import { DetailAgendaPage } from '../pages/detail-agenda/detail-agenda';
import { ListPengumumanPage } from '../pages/list-pengumuman/list-pengumuman';
import { DetailPengumumanPage } from '../pages/detail-pengumuman/detail-pengumuman';
import { GaleriFotoPage } from '../pages/galeri-foto/galeri-foto';
import { DetailAlbumPage } from '../pages/detail-album/detail-album';
import { DetailImagePage } from '../pages/detail-image/detail-image';
import { GaleriVideoPage } from '../pages/galeri-video/galeri-video';
import { PlayVideoPage } from '../pages/play-video/play-video';
import { RegistrasiIkmPage } from '../pages/registrasi-ikm/registrasi-ikm';
import { ProfilPasarPage } from '../pages/profil-pasar/profil-pasar';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { UserIkmDetailPage } from '../pages/user-ikm-detail/user-ikm-detail';
import { SebaranIkmPage } from '../pages/sebaran-ikm/sebaran-ikm';
import { IkmDetailPage } from '../pages/ikm-detail/ikm-detail';
import { ListIkmPage } from '../pages/list-ikm/list-ikm';
import { ProdukFormPage } from '../pages/produk-form/produk-form';
import { LiveChatPage } from '../pages/live-chat/live-chat';
import { ProfilDisperindagPage } from '../pages/profil-disperindag/profil-disperindag';
import { KontakPage } from '../pages/kontak/kontak';
import { RegistrasiPage } from '../pages/registrasi/registrasi';

import { LoginPageModule } from '../pages/login/login.module';
import { ListPasarPageModule } from '../pages/list-pasar/list-pasar.module';
import { ForgetPasswordPageModule } from '../pages/forget-password/forget-password.module';
import { DetailPasarPageModule } from '../pages/detail-pasar/detail-pasar.module';
import { ListBeritaPageModule } from '../pages/list-berita/list-berita.module';
import { DetailBeritaPageModule } from '../pages/detail-berita/detail-berita.module';
import { ListAgendaPageModule } from '../pages/list-agenda/list-agenda.module';
import { DetailAgendaPageModule } from '../pages/detail-agenda/detail-agenda.module';
import { ListPengumumanPageModule } from '../pages/list-pengumuman/list-pengumuman.module';
import { DetailPengumumanPageModule } from '../pages/detail-pengumuman/detail-pengumuman.module';
import { GaleriFotoPageModule } from '../pages/galeri-foto/galeri-foto.module';
import { DetailAlbumPageModule } from '../pages/detail-album/detail-album.module';
import { DetailImagePageModule } from '../pages/detail-image/detail-image.module';
import { GaleriVideoPageModule } from '../pages/galeri-video/galeri-video.module';
import { PlayVideoPageModule } from '../pages/play-video/play-video.module';
import { RegistrasiIkmPageModule } from '../pages/registrasi-ikm/registrasi-ikm.module';
import { ProfilPasarPageModule } from '../pages/profil-pasar/profil-pasar.module';
import { UserProfilePageModule } from '../pages/user-profile/user-profile.module';
import { UserIkmDetailPageModule } from '../pages/user-ikm-detail/user-ikm-detail.module';
import { SebaranIkmPageModule } from '../pages/sebaran-ikm/sebaran-ikm.module';
import { IkmDetailPageModule } from '../pages/ikm-detail/ikm-detail.module';
import { ListIkmPageModule } from '../pages/list-ikm/list-ikm.module';
import { ProdukFormPageModule } from '../pages/produk-form/produk-form.module';
import { LiveChatPageModule } from '../pages/live-chat/live-chat.module';
import { ProfilDisperindagPageModule } from '../pages/profil-disperindag/profil-disperindag.module';
import { KontakPageModule } from '../pages/kontak/kontak.module';
import { RegistrasiPageModule } from '../pages/registrasi/registrasi.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { HostProvider } from '../providers/host/host';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { TokenProvider } from '../providers/token/token';
import { FileChooser } from '@ionic-native/file-chooser';
import { ImagePicker } from '@ionic-native/image-picker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ForgetPasswordPage,
    ListPasarPage,
    DetailPasarPage,
    ListBeritaPage,
    DetailBeritaPage,
    ListAgendaPage,
    DetailAgendaPage,
    ListPengumumanPage,
    DetailPengumumanPage,
    GaleriFotoPage,
    DetailAlbumPage,
    DetailImagePage,
    GaleriVideoPage,
    PlayVideoPage,
    RegistrasiIkmPage,
    ProfilPasarPage,
    UserProfilePage,
    UserIkmDetailPage,
    SebaranIkmPage,
    IkmDetailPage,
    ListIkmPage,
    ProdukFormPage,
    LiveChatPage,
    ProfilDisperindagPage,
    KontakPage,
    RegistrasiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    LoginPageModule,
    ForgetPasswordPageModule,
    ListPasarPageModule,
    DetailPasarPageModule,
    ListBeritaPageModule,
    DetailBeritaPageModule,
    ListAgendaPageModule,
    DetailAgendaPageModule,
    ListPengumumanPageModule,
    DetailPengumumanPageModule,
    GaleriFotoPageModule,
    DetailAlbumPageModule,
    DetailImagePageModule,
    GaleriVideoPageModule,
    PlayVideoPageModule,
    RegistrasiIkmPageModule,
    ProfilPasarPageModule,
    UserProfilePageModule,
    UserIkmDetailPageModule,
    SebaranIkmPageModule,
    IkmDetailPageModule,
    ListIkmPageModule,
    ProdukFormPageModule,
    LiveChatPageModule,
    ProfilDisperindagPageModule,
    KontakPageModule,
    RegistrasiPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ForgetPasswordPage,
    ListPasarPage,
    DetailPasarPage,
    ListBeritaPage,
    DetailBeritaPage,
    ListAgendaPage,
    DetailAgendaPage,
    ListPengumumanPage,
    DetailPengumumanPage,
    GaleriFotoPage,
    DetailAlbumPage,
    DetailImagePage,
    GaleriVideoPage,
    PlayVideoPage,
    RegistrasiIkmPage,
    ProfilPasarPage,
    UserProfilePage,
    UserIkmDetailPage,
    SebaranIkmPage,
    IkmDetailPage,
    ListIkmPage,
    ProdukFormPage,
    LiveChatPage,
    ProfilDisperindagPage,
    KontakPage,
    RegistrasiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HostProvider,
    TokenProvider,
    FileTransfer,
    File,
    FileChooser,
    ImagePicker
  ]
})
export class AppModule {}
