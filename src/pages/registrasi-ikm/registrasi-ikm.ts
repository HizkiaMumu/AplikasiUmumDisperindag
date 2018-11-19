import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { HostProvider } from '../../providers/host/host';
import { DetailPasarPage } from '../detail-pasar/detail-pasar';

declare var L;

@IonicPage()
@Component({
  selector: 'page-registrasi-ikm',
  templateUrl: 'registrasi-ikm.html',
})
export class RegistrasiIkmPage {

  nama_sentra: any;
  jenis_produk: any;
  jumlah_unit_usaha: any;
  kontak_person: any;
  alamat: any;
  rt: any;
  rw: any;
  kelurahan: any;
  kecamatan: any;
  wilayah: any;
  tenaga_kerja: any;
  nilai_investasi: any;
  kapasitas_produksi: any;
  satuan: any;
  latitude: any = -0.432914;
  longitude: any = 116.989678;
  map: any;
  data: any;
  user_id: any;
  kategori_ikm_id: any;
  kategoriIkm: any;
  kategori: any;
  loading: any;
  endpoint: any;
  ikm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private host: HostProvider, private sanitization: DomSanitizer, private storage: Storage, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.storage.get('user').then((user) => {
      console.log(user);
      this.user_id = user.id;
    });
    this.ikm = this.navParams.get('ikm');
    if(this.ikm != null){
      this.setIkmValue();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrasiIkmPage');
  }

  ionViewDidEnter() {
    this.loadMap();
    this.getKategoriIkm();
  }

  setIkmValue(){
    this.nama_sentra = this.ikm.nama_sentra;
    this.jenis_produk = this.ikm.jenis_produk;
    this.jumlah_unit_usaha = this.ikm.jumlah_unit_usaha;
    this.kontak_person = this.ikm.kontak_person;
    this.alamat = this.ikm.alamat;
    this.rt = this.ikm.rt;
    this.rw = this.ikm.rw;
    this.kelurahan = this.ikm.kelurahan;
    this.kecamatan = this.ikm.kecamatan;
    this.wilayah = this.ikm.wilayah;
    this.tenaga_kerja = this.ikm.tenaga_kerja;
    this.nilai_investasi = this.ikm.nilai_investasi;
    this.kapasitas_produksi = this.ikm.kapasitas_produksi;
    this.satuan = this.ikm.satuan;
    this.latitude = this.ikm.latitude;
    this.longitude = this.ikm.longitude;
    this.user_id = this.ikm.user_id;
    this.kategori_ikm_id = this.ikm.kategori_ikm_id;
  }

  ionViewCanLeave(){
    document.getElementById("mapid").outerHTML = "";
  }

  getKategoriIkm(){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    headers.append("Accept","application/json");

    this.http.get(this.host.baseUrl + "/ikm/kategori", {headers: headers})
    .subscribe(
      data => {
        this.kategoriIkm = data;
        console.log(this.kategoriIkm);
      }, (err) => {
        console.log(err);
      });
  }

  loadMap(){
    this.map = L.map('mapid').setView([this.latitude, this.longitude], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'sk.eyJ1IjoiaGl6a2lhbXVtdTI0IiwiYSI6ImNqbnlnY2VrcDBoaGwzd3FsNzFtazEzZjUifQ.f1Z0P21FPTpgXAoyLX1Dzg'
    }).addTo(this.map);

    var marker = L.marker([this.latitude, this.longitude], { draggable: true }).addTo(this.map);

    marker.on('dragend', (e) => {
      this.latitude = marker.getLatLng().lat;
      this.longitude = marker.getLatLng().lng;
      console.log(this.latitude, this.longitude);
    });
  }

  submitIkm(){
    this.showLoading();
    const body = {
      nama_sentra: this.nama_sentra,
      jenis_produk: this.jenis_produk,
      jumlah_unit_usaha: this.jumlah_unit_usaha,
      kontak_person: this.kontak_person,
      alamat: this.alamat,
      rt: this.rt,
      rw: this.rw,
      kelurahan: this.kelurahan,
      kecamatan: this.kecamatan,
      wilayah: this.wilayah,
      tenaga_kerja: this.tenaga_kerja,
      nilai_investasi: this.nilai_investasi,
      kapasitas_produksi: this.kapasitas_produksi,
      satuan: this.satuan,
      latitude: this.latitude,
      longitude: this.longitude,
      user_id: this.user_id,
      kategori_ikm_id: this.kategori_ikm_id
    };

    if(this.ikm != null){
      this.endpoint = this.host.baseUrl + "/ikm/edit/" + this.ikm.id;
    } else {
      this.endpoint = this.host.baseUrl + "/ikm/store";
    }

    this.http.post(this.endpoint, body)
    .subscribe(
      data => {
        this.data = data;
        console.log(this.data);
        this.loading.dismiss();
        if(this.ikm != null){
          this.successAlert("Berhasil mengedit IKM");
        } else {
          this.successAlert("Berhasil mendaftarkan IKM");
        }
      }, (err) => {
        console.log(err);
        this.loading.dismiss();
        if(this.ikm != null){
          this.errAlert("Gagal mengedit IKM");
        } else {
          this.errAlert("Gagal mendaftarkan IKM");
        }
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
