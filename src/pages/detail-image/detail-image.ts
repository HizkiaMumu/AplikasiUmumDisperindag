import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Component } from '@angular/core';

/**
 * Generated class for the DetailImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-image',
  templateUrl: 'detail-image.html',
})
export class DetailImagePage {

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private transfer: FileTransfer, private file: File) {
    this.data = this.navParams.get('image');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailImagePage');
  }

  downloadImage(){
    const fileTransfer: FileTransferObject = this.transfer.create();
    const fileName = this.data.foto.substring(this.data.foto.lastIndexOf('/') + 1);

    const url = this.data.foto;
    fileTransfer.download(url, this.file.dataDirectory + fileName).then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      console.log(error);
    });
  }

}
