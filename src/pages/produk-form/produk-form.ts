import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileChooser } from '@ionic-native/file-chooser';
import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import { Component } from '@angular/core';

import { HostProvider } from '../../providers/host/host';

@IonicPage()
@Component({
  selector: 'page-produk-form',
  templateUrl: 'produk-form.html',
})
export class ProdukFormPage {

  asEditForm: any;
  produk: any;

  nama_produk: any;
  harga: any;
  deskripsi: any;
  thumbnail: any;
  imageURI: any;
  loading: any;
  endpoint: any;
  tmpImg: any;

  ikm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public loadingCtrl: LoadingController, private host: HostProvider, private fileChooser: FileChooser, private imagePicker: ImagePicker, private transfer: FileTransfer, private file: File, private http: HttpClient) {
    this.ikm = this.navParams.get('ikm');
    console.log(this.ikm);
    if(this.navParams.get('produk') != null){
      this.asEditForm = true;
      this.produk = this.navParams.get('produk');
      this.nama_produk = this.produk.nama;
      this.harga = this.produk.harga;
      this.deskripsi = this.produk.deskripsi;
      this.tmpImg = this.produk.thumbnail;
      console.log(this.produk);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdukFormPage');
  }

  selectFile(){
    const options = { maximumImagesCount: 1 };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          this.imageURI = results[i];
          this.tmpImg = results[i];
          if(this.asEditForm){
            this.produk.thumbnail = results[i];
          }
      }
    }, (err) => { console.log(err); });
  }

  submitData(){
    this.showLoading();
    const fileTransfer: FileTransferObject = this.transfer.create();

    if(this.asEditForm){
      const options: FileUploadOptions = {
         fileKey: 'thumbnail',
         headers: {},
         params: {
           nama: this.nama_produk,
           harga: this.harga,
           deskripsi: this.deskripsi,
         }
      }
      this.endpoint = this.host.baseUrl + '/ikm/produk/edit/' + this.produk.id;
      this.sendData(options, fileTransfer);
    } else {
      const options: FileUploadOptions = {
         fileKey: 'thumbnail',
         headers: {},
         params: {
           nama: this.nama_produk,
           harga: this.harga,
           deskripsi: this.deskripsi,
           ikm_id: this.ikm.id,
         }
      }
      this.endpoint = this.host.baseUrl + '/ikm/produk/store';
      this.sendData(options, fileTransfer);
    }

  }

  sendData(options, fileTransfer){
    if(this.imageURI != null){
      fileTransfer.upload(this.imageURI, this.endpoint, options)
       .then((data) => {
         this.loading.dismiss();
         console.log(data);
         if(this.asEditForm){
           this.successAlert("Berhasil mengedit produk.");
         } else {
           this.successAlert("Berhasil menambahkan produk.");
         }
         this.navCtrl.pop();
       }, (err) => {
         this.loading.dismiss();
         console.log(err.code);
         if(this.asEditForm){
           this.successAlert("Gagal mengedit produk.");
         } else {
           this.successAlert("Gagal menambahkan produk.");
         }
       })
    } else {
      if(this.asEditForm){
        const body = {
          nama: this.nama_produk,
          harga: this.harga,
          deskripsi: this.deskripsi
        };

        this.http.post(this.host.baseUrl + '/ikm/produk/edit/' + this.produk.id, body)
        .subscribe(
          data => {
            this.loading.dismiss();
            this.successAlert("Berhasil mengedit produk");
          }, (err) => {
            console.log(err);
            this.loading.dismiss();
            this.errAlert("Gagal mengedit produk");
          });
      }
    }
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
