import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';

/**
 * Generated class for the PlayVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play-video',
  templateUrl: 'play-video.html',
})
export class PlayVideoPage {

  data: any;
  videoUrl: any;
  embed: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitization: DomSanitizer) {
    this.data = this.navParams.get('video');
    this.setEmbed();
  }

  setEmbed(){
    const url = "https://www.youtube.com/embed/" + this.data.youtube_video_id;
    this.embed = '<iframe width="100%" height="300" class="tengah" src="' + url + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayVideoPage');
  }

}
