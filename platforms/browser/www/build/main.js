webpackJsonp([24],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HostProvider = (function () {
    function HostProvider(http) {
        this.http = http;
        this.baseUrl = 'http://disperindag.101creative.id/api';
        console.log('Hello HostProvider Provider');
    }
    HostProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HostProvider);
    return HostProvider;
}());

//# sourceMappingURL=host.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailAgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_host_host__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailAgendaPage = (function () {
    function DetailAgendaPage(navCtrl, navParams, http, host) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.host = host;
        this.agendaId = this.navParams.get('id');
        this.getAgendaDetail();
    }
    DetailAgendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailAgendaPage');
    };
    DetailAgendaPage.prototype.getAgendaDetail = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/agenda/" + this.agendaId, { headers: headers })
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        }, function (err) {
            console.log(err);
        });
    };
    DetailAgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-detail-agenda',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\detail-agenda\detail-agenda.html"*/'<ion-header>\n  <ion-navbar class="send-to-front">\n\n    <ion-title center>\n      <span>{{ this.data?.agenda.judul }}</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h5 style="color: #424242;"><b>{{ this.data?.agenda.judul }}</b></h5>\n  <p style="color: #424242;">\n    <ion-icon ios="ios-calendar-outline" md="ios-calendar-outline" style="margin-right: 5px;"></ion-icon>\n    <b>{{ this.data?.agenda.tanggal }} | {{ this.data?.agenda.waktu }} WITA</b>\n  </p>\n  <p style="color: #424242; font-family: \'Open Sans\', sans-serif; font-weight: 600; text-align: justify;">{{ this.data?.agenda.topik }}</p>\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\detail-agenda\detail-agenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_host_host__["a" /* HostProvider */]])
    ], DetailAgendaPage);
    return DetailAgendaPage;
}());

//# sourceMappingURL=detail-agenda.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailAlbumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_host_host__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_image_detail_image__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailAlbumPage = (function () {
    function DetailAlbumPage(navCtrl, navParams, host, http, sanitization) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.host = host;
        this.http = http;
        this.sanitization = sanitization;
        this.albumId = this.navParams.get('id');
        this.getDetailAlbum();
    }
    DetailAlbumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailAlbumPage');
    };
    DetailAlbumPage.prototype.getDetailAlbum = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/galeri-foto/" + this.albumId, { headers: headers })
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        }, function (err) {
            console.log(err);
        });
    };
    DetailAlbumPage.prototype.pushDetailImagePage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detail_image_detail_image__["a" /* DetailImagePage */], {
            image: data
        });
    };
    DetailAlbumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-detail-album',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\detail-album\detail-album.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span>{{ this.data?.album_foto.nama }}</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let image of this.data?.album_foto.fotos" col-4 (click)="this.pushDetailImagePage(image)">\n        <img src="{{ image.foto }}" width="100%" height="auto">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\detail-album\detail-album.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], DetailAlbumPage);
    return DetailAlbumPage;
}());

//# sourceMappingURL=detail-album.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_file_transfer__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetailImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailImagePage = (function () {
    function DetailImagePage(navCtrl, navParams, transfer, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.file = file;
        this.data = this.navParams.get('image');
    }
    DetailImagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailImagePage');
    };
    DetailImagePage.prototype.downloadImage = function () {
        var fileTransfer = this.transfer.create();
        var fileName = this.data.foto.substring(this.data.foto.lastIndexOf('/') + 1);
        var url = this.data.foto;
        fileTransfer.download(url, this.file.dataDirectory + fileName).then(function (entry) {
            console.log('download complete: ' + entry.toURL());
        }, function (error) {
            console.log(error);
        });
    };
    DetailImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-detail-image',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\detail-image\detail-image.html"*/'<ion-header no-border>\n\n  <ion-navbar class="send-to-front">\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span style="color: #fff !important;">Detail Image</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img src="{{ this.data?.foto }}" width="100%" height="auto" class="tengah">\n\n  <ion-icon ios="ios-download-outline" md="ios-download-outline" class="icon-download" (click)="this.downloadImage()"></ion-icon>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\detail-image\detail-image.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]])
    ], DetailImagePage);
    return DetailImagePage;
}());

//# sourceMappingURL=detail-image.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailBeritaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_host_host__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetailBeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailBeritaPage = (function () {
    function DetailBeritaPage(navCtrl, navParams, http, host) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.host = host;
        this.idBerita = this.navParams.get('id');
        this.getBeritaDetail();
    }
    DetailBeritaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailBeritaPage');
    };
    DetailBeritaPage.prototype.getBeritaDetail = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/berita/" + this.idBerita, { headers: headers })
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        }, function (err) {
            console.log(err);
        });
    };
    DetailBeritaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-detail-berita',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\detail-berita\detail-berita.html"*/'<ion-header no-border>\n\n  <ion-navbar class="send-to-front">\n\n    <ion-title center>\n      <span style="color: #fff !important;">{{ this.data?.berita.judul }}</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img src="{{ this.data?.berita.thumbnail }}" width="100%" height="auto">\n\n  <div padding>\n    <h2 class="judul-berita">{{ this.data?.berita.judul }}</h2>\n    <p class="deskripsi"><span class="biru capital">{{ this.data?.berita.kategori }}</span> | {{ this.data?.berita.created_at }}</p>\n    <div class="deskripsi" [innerHTML]="this.data?.berita.isi"></div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\detail-berita\detail-berita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_host_host__["a" /* HostProvider */]])
    ], DetailBeritaPage);
    return DetailBeritaPage;
}());

//# sourceMappingURL=detail-berita.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPasarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_host_host__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profil_pasar_profil_pasar__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DetailPasarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPasarPage = (function () {
    function DetailPasarPage(navCtrl, navParams, http, host) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.host = host;
        this.komoditi = [];
        this.itemHeader = '';
        this.newItemHeader = '';
        this.pasarId = navParams.get('id');
        this.getDetailPasar();
    }
    DetailPasarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPasarPage');
    };
    DetailPasarPage.prototype.getDetailPasar = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/pasar/" + this.pasarId, { headers: headers })
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
            _this.sortDataByName();
        }, function (err) {
            console.log(err);
        });
    };
    DetailPasarPage.prototype.sortDataByName = function () {
        for (var i = 0; i < this.data.pasar.harga_komoditis.length; i++) {
            var kategori = this.data.pasar.harga_komoditis[i].komoditi.nama.split(' ');
            var komoditi = {
                harga: this.data.pasar.harga_komoditis[i].harga,
                nama: this.data.pasar.harga_komoditis[i].komoditi.nama,
                thumbnail: this.data.pasar.harga_komoditis[i].komoditi.thumbnail,
                satuan: this.data.pasar.harga_komoditis[i].satuan,
                kategori: kategori[0]
            };
            this.komoditi.push(komoditi);
            this.komoditi.sort(function (a, b) {
                var nameA = a.nama.toUpperCase(); // ignore upper and lowercase
                var nameB = b.nama.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
            console.log(this.komoditi);
        }
    };
    DetailPasarPage.prototype.setItemHeader = function (data) {
    };
    DetailPasarPage.prototype.pushProfilPasarPage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profil_pasar_profil_pasar__["a" /* ProfilPasarPage */], {
            profilPasar: data
        });
    };
    DetailPasarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-detail-pasar',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\detail-pasar\detail-pasar.html"*/'<ion-header no-border>\n\n  <ion-navbar class="send-to-front">\n\n    <ion-title center>\n      <span style="color: #fff !important;">Profil Pasar</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img src="{{ this.data?.pasar.thumbnail }}" width="100%" height="auto">\n\n  <div class="detail-pasar" (click)="this.pushProfilPasarPage(this.data?.pasar)">\n    <h6 class="nama-pasar"><span class="bg-hitam">{{ this.data?.pasar.nama }}</span></h6>\n    <p class="alamat-pasar"><span class="bg-hitam">{{ this.data?.pasar.alamat }}</span></p>\n  </div>\n\n  <div *ngFor="let item of this.komoditi; let i=index;">\n    <ion-item-group>\n      <ion-item-divider *ngIf="this.komoditi[i]?.kategori != this.komoditi[i-1]?.kategori" color="light"><b>{{ item.nama }}</b></ion-item-divider>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{ item.thumbnail }}">\n        </ion-avatar>\n        <h2 style="color: #444;"><b>{{ item.nama }}</b></h2>\n        <p>{{ item.harga | currency:\'RP.\' }} / {{ item.satuan }}</p>\n      </ion-item>\n    </ion-item-group>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\detail-pasar\detail-pasar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_host_host__["a" /* HostProvider */]])
    ], DetailPasarPage);
    return DetailPasarPage;
}());

//# sourceMappingURL=detail-pasar.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPasarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_host_host__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilPasarPage = (function () {
    function ProfilPasarPage(navCtrl, navParams, http, host) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.host = host;
        this.profilPasar = this.navParams.get('profilPasar');
    }
    ProfilPasarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPasarPage');
    };
    ProfilPasarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-profil-pasar',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\profil-pasar\profil-pasar.html"*/'<ion-header no-border>\n\n  <ion-navbar class="send-to-front">\n\n    <ion-title center>\n      <span style="color: #fff !important;">{{ this.profilPasar?.nama }}</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img src="{{ this.profilPasar?.thumbnail }}" width="100%" height="auto">\n\n  <div padding>\n    <h2 class="nama-pasar"><b>{{ this.profilPasar?.nama }}</b></h2>\n    <p class="deskripsi biru"><ion-icon ios="ios-map" md="md-map"></ion-icon> {{ this.profilPasar?.alamat }}</p>\n    <p class="deskripsi justify-align">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\profil-pasar\profil-pasar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_host_host__["a" /* HostProvider */]])
    ], ProfilPasarPage);
    return ProfilPasarPage;
}());

//# sourceMappingURL=profil-pasar.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPengumumanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_host_host__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailPengumumanPage = (function () {
    function DetailPengumumanPage(navCtrl, navParams, host, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.host = host;
        this.http = http;
        this.pengumumanId = this.navParams.get('id');
        this.getPengumumanDetail();
    }
    DetailPengumumanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPengumumanPage');
    };
    DetailPengumumanPage.prototype.getPengumumanDetail = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/pengumuman/" + this.pengumumanId, { headers: headers })
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        }, function (err) {
            console.log(err);
        });
    };
    DetailPengumumanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-detail-pengumuman',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\detail-pengumuman\detail-pengumuman.html"*/'<ion-header>\n  <ion-navbar class="send-to-front">\n\n    <ion-title center>\n      <span>{{ this.data?.pengumuman.judul }}</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h5 style="color: #424242;"><b>{{ this.data?.pengumuman.judul }}</b></h5>\n  <p style="color: #424242;">\n    <ion-icon ios="ios-calendar-outline" md="ios-calendar-outline" style="margin-right: 5px;"></ion-icon>\n    <b>{{ this.data?.pengumuman.tanggal }} | {{ this.data?.pengumuman.waktu }} WITA</b>\n  </p>\n  <div [innerHTML]="this.data?.pengumuman.isi" class="isi-pengumuman"></div>\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\detail-pengumuman\detail-pengumuman.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DetailPengumumanPage);
    return DetailPengumumanPage;
}());

//# sourceMappingURL=detail-pengumuman.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_host_host__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ForgetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetPasswordPage = (function () {
    function ForgetPasswordPage(navCtrl, navParams, alertCtrl, loadingCtrl, http, host) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.host = host;
    }
    ForgetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPasswordPage');
    };
    ForgetPasswordPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.validEmail = re.test(String(email).toLowerCase());
    };
    ForgetPasswordPage.prototype.forgetPasswordValidation = function () {
        this.showLoading();
        if (this.email != null) {
            this.validateEmail(this.email);
            if (this.validEmail) {
                this.doForgetPassword();
            }
            else {
                this.errMessage = 'Email yang anda masukan tidak valid';
                this.errAlert(this.errMessage);
                this.loading.dismiss();
            }
        }
        else {
            this.errMessage = 'Mohon masukan email anda';
            this.errAlert(this.errMessage);
            this.loading.dismiss();
        }
    };
    ForgetPasswordPage.prototype.doForgetPassword = function () {
        var _this = this;
        var body = {
            email: this.email
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.post(this.host.baseUrl + "/forget-password", body, { headers: headers })
            .subscribe(function (data) {
            _this.data = data;
            _this.successAlert('Kami telah mengirimkan link untuk mengganti password ke email anda.');
            _this.loading.dismiss();
        }, function (err) {
            _this.errAlert('Email yang anda masukan tidak terdaftar.');
            _this.loading.dismiss();
        });
    };
    ForgetPasswordPage.prototype.popPage = function () {
        this.navCtrl.pop();
    };
    ForgetPasswordPage.prototype.errAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Gagal',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    ForgetPasswordPage.prototype.successAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Berhasil',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    ForgetPasswordPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Mohon tunggu...'
        });
        this.loading.present();
    };
    ForgetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-forget-password',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\forget-password\forget-password.html"*/'<ion-content>\n\n  <div class="login-area">\n\n    <img src="assets/imgs/logo-kukar.png" height="50px" width="auto" class="animated fadeIn">\n\n    <h1 class="bold animated fadeInUp delay-1s">Lupa Password?</h1>\n    <h5 class="animated fadeInUp delay-1s">Silahkan masukan email anda dibawah</h5>\n\n    <div class="input-area animated fadeIn delay-2s">\n      <ion-item>\n        <ion-label class="bold" stacked>Email</ion-label>\n        <ion-input type="email" placeholder="john@mail.com" [(ngModel)]="this.email"></ion-input>\n      </ion-item>\n    </div>\n\n    <button ion-button block round color="pink" class="no-shadow padding-20 capital bold animated fadeIn delay-2s" (click)="this.forgetPasswordValidation()">\n      Submit\n    </button>\n    <button ion-button block round outline color="pink" class="no-shadow padding-20 capital animated fadeIn delay-2s" (click)="this.popPage()">\n      Kembali ke halaman login\n    </button>\n\n  </div>\n\n  <p class="copyright-area animated fadeIn delay-3s">Developed by <b>101creative</b></p>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\forget-password\forget-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_host_host__["a" /* HostProvider */]])
    ], ForgetPasswordPage);
    return ForgetPasswordPage;
}());

//# sourceMappingURL=forget-password.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriVideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_host_host__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__play_video_play_video__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GaleriVideoPage = (function () {
    function GaleriVideoPage(navCtrl, navParams, http, host, sanitization) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.host = host;
        this.sanitization = sanitization;
        this.getVideos();
    }
    GaleriVideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GaleriVideoPage');
    };
    GaleriVideoPage.prototype.getVideos = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/galeri-video", { headers: headers })
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        }, function (err) {
            console.log(err);
        });
    };
    GaleriVideoPage.prototype.pushPlayVideoPage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__play_video_play_video__["a" /* PlayVideoPage */], {
            video: data
        });
    };
    GaleriVideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-galeri-video',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\galeri-video\galeri-video.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span>Galeri Video</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card *ngFor="let video of this.data?.videos" (click)="this.pushPlayVideoPage(video)">\n    <img src=\'https://i.ytimg.com/vi/{{ video.youtube_video_id }}/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCQOIGque3So2vswb8u3D6p5xo2-A\'/>\n    <ion-card-content>\n      <ion-card-title class="video-title">\n        {{ video.judul }}\n      </ion-card-title>\n      <span class="posted-date">{{ video.created_at }}</span>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\galeri-video\galeri-video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], GaleriVideoPage);
    return GaleriVideoPage;
}());

//# sourceMappingURL=galeri-video.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayVideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PlayVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayVideoPage = (function () {
    function PlayVideoPage(navCtrl, navParams, sanitization) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitization = sanitization;
        this.data = this.navParams.get('video');
        this.setEmbed();
    }
    PlayVideoPage.prototype.setEmbed = function () {
        var url = "https://www.youtube.com/embed/" + this.data.youtube_video_id;
        this.embed = '<iframe width="100%" height="300" class="tengah" src="' + url + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    };
    PlayVideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayVideoPage');
    };
    PlayVideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-play-video',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\play-video\play-video.html"*/'<ion-header no-border>\n\n  <ion-navbar class="send-to-front">\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span style="color: #fff !important;">Play Video</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div [innerHtml]=\'this.sanitization.bypassSecurityTrustHtml(this.embed)\'></div>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\play-video\play-video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], PlayVideoPage);
    return PlayVideoPage;
}());

//# sourceMappingURL=play-video.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_host_host__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forget_password_forget_password__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, menuCtrl, navParams, storage, http, host, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.host = host;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl.close();
        this.menuCtrl.swipeEnable(false);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginValidation = function () {
        this.showLoading();
        if (this.email != null) {
            if (this.password != null) {
                this.doLogin();
            }
            else {
                this.errMessage = 'Mohon masukan password anda';
                this.errAlert(this.errMessage);
            }
        }
        else {
            this.errMessage = 'Mohon masukan email anda';
            this.errAlert(this.errMessage);
        }
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var body = {
            email: this.email,
            password: this.password
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.post(this.host.baseUrl + "/sign-in", body, { headers: headers })
            .subscribe(function (data) {
            _this.data = data;
            if (_this.data.token) {
                _this.storage.set('token', _this.data.token);
                _this.storage.set('user', _this.data.user);
                _this.storage.set('isLogin', true);
                _this.storage.set('isLogout', false);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile__["a" /* UserProfilePage */]);
            }
            else {
                _this.errAlert('Terjadi kesalahan yang tidak diketahui');
            }
            _this.loading.dismiss();
        }, function (err) {
            console.log(err);
            _this.errAlert('Username atau password yang anda masukan salah.');
            _this.loading.dismiss();
        });
    };
    LoginPage.prototype.pushForgetPasswordPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__forget_password_forget_password__["a" /* ForgetPasswordPage */]);
    };
    LoginPage.prototype.popToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.errAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Gagal',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Mohon tunggu...'
        });
        this.loading.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\login\login.html"*/'<ion-content>\n\n\n\n  <div class="login-area">\n\n\n\n    <img src="assets/imgs/logo-kukar.png" height="50px" width="auto" class="animated fadeIn">\n\n\n\n    <h1 class="bold animated fadeInUp delay-1s">Selamat Datang,</h1>\n\n    <h5 class="animated fadeInUp delay-1s">Silahkan login dibawah</h5>\n\n\n\n    <div class="input-area animated fadeIn delay-2s">\n\n      <ion-item>\n\n        <ion-label class="bold" stacked>Email</ion-label>\n\n        <ion-input type="email" placeholder="john@mail.com" [(ngModel)]="this.email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label class="bold" stacked>Password</ion-label>\n\n        <ion-input type="password" placeholder="********" [(ngModel)]="this.password"></ion-input>\n\n      </ion-item>\n\n\n\n      <p class="float-r opacity" (click)="this.pushForgetPasswordPage()">Forgot password?</p>\n\n    </div>\n\n\n\n    <button ion-button block round color="pink" class="no-shadow padding-20 capital bold animated fadeIn delay-2s" (click)="this.loginValidation()">\n\n      Login\n\n    </button>\n\n    <button ion-button block round outline color="pink" class="no-shadow padding-20 capital animated fadeIn delay-2s" (click)="this.popToHome()">\n\n      Kembali ke halaman utama\n\n    </button>\n\n\n\n  </div>\n\n\n\n  <p class="copyright-area animated fadeIn delay-3s">Developed by <b>101creative</b></p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserIkmDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_host_host__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__produk_form_produk_form__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserIkmDetailPage = (function () {
    function UserIkmDetailPage(navCtrl, navParams, http, host, storage, sanitization) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.host = host;
        this.storage = storage;
        this.sanitization = sanitization;
        this.produkIkm = true;
        this.ikm = this.navParams.get('ikm');
        console.log(this.ikm);
        this.storage.get('user').then(function (user) {
            console.log(user);
            _this.user = user;
        });
        this.getProduks();
    }
    UserIkmDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserIkmDetailPage');
    };
    UserIkmDetailPage.prototype.getProduks = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/ikm/produk/" + this.ikm.id, { headers: headers })
            .subscribe(function (data) {
            _this.produks = data;
            console.log(_this.produks);
        }, function (err) {
            console.log(err);
        });
    };
    UserIkmDetailPage.prototype.showProdukIkm = function () {
        this.produkIkm = true;
        this.detailIkm = false;
    };
    UserIkmDetailPage.prototype.showDetailIkm = function () {
        this.produkIkm = false;
        this.detailIkm = true;
    };
    UserIkmDetailPage.prototype.pushProdukForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__produk_form_produk_form__["a" /* ProdukFormPage */], {
            ikm: this.ikm
        });
    };
    UserIkmDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-user-ikm-detail',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\user-ikm-detail\user-ikm-detail.html"*/'<ion-header no-border>\n\n  <ion-navbar class="send-to-front">\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span style="color: #fff !important;">{{ this.ikm.nama_sentra }}</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="profile-area">\n    <div class="dark-overlay"></div>\n    <div class="profile-content">\n      <img src="http://newsoft.ps/wp-content/uploads/2016/06/John_Doe.jpg" height="90px" width="auto" style="border-radius: 100%;">\n      <h3 class="user-name">{{ this.user?.name }}</h3>\n      <h5 class="user-email">{{ this.user?.email }}</h5>\n    </div>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button block [outline]="!produkIkm" color="dark" (click)="this.showProdukIkm()">Produk IKM</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block [outline]="!detailIkm" color="dark" (click)="this.showDetailIkm()">Detail IKM</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf="produkIkm">\n    <div style="text-align: center !important;" *ngIf="this.produks?.produk_ikm.length <= 0">\n      Produk tidak ditemukan\n    </div>\n\n    <div style="margin-top: -15px;" padding>\n      <div *ngFor="let produk of this.produks?.produk_ikm" [style.background-image]="this.sanitization.bypassSecurityTrustStyle(\'url(\' + produk.thumbnail + \')\')" class="card-produk">\n        <div class="dark-overlay-card"></div>\n        <div class="produk-info">\n          <h3 class="title"><span class="background-black-overlay">{{ produk.nama }}</span></h3>\n          <p class="deskripsi"><span class="background-black-overlay">{{ produk.harga | currency:\'RP.\' }}</span></p>\n        </div>\n      </div>\n    </div>\n\n    <ion-fab right bottom>\n      <button ion-fab color="light" (click)="this.pushProdukForm()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n  </div>\n\n  <ion-card style="margin-top: -1px;" class="animated fadeIn" *ngIf="detailIkm">\n    <ion-card-content>\n      <ion-list>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Nama Sentra</b></h2>\n            <p>{{ this.ikm.nama_sentra }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Jenis Produk</b></h2>\n            <p>{{ this.ikm.jenis_produk }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Jumlah Unit Usaha</b></h2>\n            <p>{{ this.ikm.jumlah_unit_usaha }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Kontak Person</b></h2>\n            <p>{{ this.ikm.kontak_person }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Alamat</b></h2>\n            <p>{{ this.ikm.alamat }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>RT</b></h2>\n            <p>{{ this.ikm.rt }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>RW</b></h2>\n            <p>{{ this.ikm.rw }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Kelurahan</b></h2>\n            <p>{{ this.ikm.kelurahan }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Kecamatan</b></h2>\n            <p>{{ this.ikm.kecamatan }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Wilayah</b></h2>\n            <p>{{ this.ikm.wilayah }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Tenaga Kerja</b></h2>\n            <p>{{ this.ikm.tenaga_kerja }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Nilai Investasi</b></h2>\n            <p>{{ this.ikm.nilai_investasi }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Kapasitas Produksi</b></h2>\n            <p>{{ this.ikm.kapasitas_produksi }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Satuan Berat</b></h2>\n            <p>{{ this.ikm.satuan }}</p>\n          </div>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\user-ikm-detail\user-ikm-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], UserIkmDetailPage);
    return UserIkmDetailPage;
}());

//# sourceMappingURL=user-ikm-detail.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdukFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_file_transfer__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_host_host__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProdukFormPage = (function () {
    function ProdukFormPage(navCtrl, navParams, host, fileChooser, imagePicker, transfer, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.host = host;
        this.fileChooser = fileChooser;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.file = file;
        this.imageURI = '';
        this.ikm = this.navParams.get('ikm');
        console.log(this.ikm);
    }
    ProdukFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProdukFormPage');
    };
    ProdukFormPage.prototype.selectFile = function () {
        var _this = this;
        var options = { maximumImagesCount: 1 };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                _this.imageURI = results[i];
            }
        }, function (err) { console.log(err); });
    };
    ProdukFormPage.prototype.submitData = function () {
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'thumbnail',
            params: {
                nama: this.nama_produk,
                harga: this.harga,
                deskripsi: this.deskripsi,
                ikm_id: this.ikm.id
            }
        };
        fileTransfer.upload(this.imageURI, this.host.baseUrl + '/ikm/produk/store', options)
            .then(function (data) {
            console.log(data);
            alert("success");
        }, function (err) {
            console.log(err);
            alert("failed");
        });
    };
    ProdukFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-produk-form',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\produk-form\produk-form.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span>Tambah Produk</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card class="animated fadeIn">\n    <ion-card-content>\n      <ion-item>\n        <ion-label color="dark" stacked><b>Nama Produk</b></ion-label>\n        <ion-input type="text" [(ngModel)]="this.nama_produk"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="dark" stacked><b>Harga</b></ion-label>\n        <ion-input type="number" [(ngModel)]="this.harga"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="dark" stacked><b>Deskripsi</b></ion-label>\n        <ion-textarea [(ngModel)]="this.deskripsi"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button outline color="primary" (click)="this.selectFile()">Pilih Gambar</button>\n      </ion-item>\n\n      <button ion-button block round color="primary" (click)="this.submitData()">Submit</button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\produk-form\produk-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */]])
    ], ProdukFormPage);
    return ProdukFormPage;
}());

//# sourceMappingURL=produk-form.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrasiIkmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_host_host__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrasiIkmPage = (function () {
    function RegistrasiIkmPage(navCtrl, navParams, http, host, sanitization, storage, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.host = host;
        this.sanitization = sanitization;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.latitude = -0.432914;
        this.longitude = 116.989678;
        this.storage.get('user').then(function (user) {
            console.log(user);
            _this.user_id = user.id;
        });
    }
    RegistrasiIkmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrasiIkmPage');
    };
    RegistrasiIkmPage.prototype.ionViewDidEnter = function () {
        this.loadMap();
        this.getKategoriIkm();
    };
    RegistrasiIkmPage.prototype.ionViewCanLeave = function () {
        document.getElementById("mapid").outerHTML = "";
    };
    RegistrasiIkmPage.prototype.getKategoriIkm = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/ikm/kategori", { headers: headers })
            .subscribe(function (data) {
            _this.kategoriIkm = data;
            console.log(_this.kategoriIkm);
        }, function (err) {
            console.log(err);
        });
    };
    RegistrasiIkmPage.prototype.loadMap = function () {
        var _this = this;
        this.map = L.map('mapid').setView([this.latitude, this.longitude], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'sk.eyJ1IjoiaGl6a2lhbXVtdTI0IiwiYSI6ImNqbnlnY2VrcDBoaGwzd3FsNzFtazEzZjUifQ.f1Z0P21FPTpgXAoyLX1Dzg'
        }).addTo(this.map);
        var marker = L.marker([this.latitude, this.longitude], { draggable: true }).addTo(this.map);
        marker.on('dragend', function (e) {
            _this.latitude = marker.getLatLng().lat;
            _this.longitude = marker.getLatLng().lng;
            console.log(_this.latitude, _this.longitude);
        });
    };
    RegistrasiIkmPage.prototype.submitIkm = function () {
        var _this = this;
        this.showLoading();
        var body = {
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
        this.http.post(this.host.baseUrl + "/ikm/store", body)
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
            _this.loading.dismiss();
            _this.successAlert("Berhasil mendaftarkan IKM");
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
            _this.errAlert("Gagal mendaftarkan IKM");
        });
    };
    RegistrasiIkmPage.prototype.successAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Berhasil',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    RegistrasiIkmPage.prototype.errAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Gagal',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    RegistrasiIkmPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Mohon tunggu...'
        });
        this.loading.present();
    };
    RegistrasiIkmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-registrasi-ikm',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\registrasi-ikm\registrasi-ikm.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span>Registrasi IKM</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div class="header-form">\n    <img src="assets/imgs/logo-kukar.png" height="77px" width="auto">\n    <h4><b>Formulir Registrasi IKM</b></h4>\n  </div>\n\n  <ion-item>\n    <ion-label color="dark" floating>Nama Sentra</ion-label>\n    <ion-input type="text" [(ngModel)]="this.nama_sentra"></ion-input>\n  </ion-item>\n\n  <ion-item style="margin-top: 15px;">\n    <ion-label color="dark">Kategori</ion-label>\n    <ion-select [(ngModel)]="this.kategori_ikm_id">\n      <ion-option *ngFor="let kategori of this.kategoriIkm?.kategori" value="{{ kategori.id }}">{{ kategori.nama }}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark" floating>Jenis Produk</ion-label>\n    <ion-input type="text" [(ngModel)]="this.jenis_produk"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark" floating>Jumlah Unti Usaha</ion-label>\n    <ion-input type="number" [(ngModel)]="this.jumlah_unit_usaha"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark" floating>Kontak Person</ion-label>\n    <ion-input type="text" [(ngModel)]="this.kontak_person"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark" floating>Alamat</ion-label>\n    <ion-textarea [(ngModel)]="this.alamat"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark" floating>RT</ion-label>\n    <ion-input type="text" [(ngModel)]="this.rt"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark" floating>RW</ion-label>\n    <ion-input type="text" [(ngModel)]="this.rw"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark" floating>Kelurahan</ion-label>\n    <ion-input type="text" [(ngModel)]="this.kelurahan"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark" floating>Kecamatan</ion-label>\n    <ion-input type="text" [(ngModel)]="this.kecamatan"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark" floating>Wilayah</ion-label>\n    <ion-input type="text" [(ngModel)]="this.wilayah"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark" floating>Tenaga Kerja</ion-label>\n    <ion-input type="number" [(ngModel)]="this.tenaga_kerja"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark" floating>Nilai Investasi</ion-label>\n    <ion-input type="number" [(ngModel)]="this.nilai_investasi"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark" floating>Kapasitas Produksi</ion-label>\n    <ion-input type="number" [(ngModel)]="this.kapasitas_produksi"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="dark" floating>Satuan Berat</ion-label>\n    <ion-input type="text" [(ngModel)]="this.satuan"></ion-input>\n  </ion-item>\n\n  <ion-item style="margin-top: 10px;">\n    <ion-label color="dark">Pilih Lokasi</ion-label>\n  </ion-item>\n\n  <div id="mapid"></div>\n\n  <div style="padding: 10px 5px;">\n    <button ion-button block round color="dark" (click)="this.submitIkm()"><b>Submit</b></button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\registrasi-ikm\registrasi-ikm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */]])
    ], RegistrasiIkmPage);
    return RegistrasiIkmPage;
}());

//# sourceMappingURL=registrasi-ikm.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail-agenda/detail-agenda.module": [
		310,
		23
	],
	"../pages/detail-album/detail-album.module": [
		311,
		22
	],
	"../pages/detail-berita/detail-berita.module": [
		312,
		21
	],
	"../pages/detail-image/detail-image.module": [
		313,
		20
	],
	"../pages/detail-pasar/detail-pasar.module": [
		314,
		19
	],
	"../pages/detail-pengumuman/detail-pengumuman.module": [
		315,
		18
	],
	"../pages/forget-password/forget-password.module": [
		316,
		17
	],
	"../pages/galeri-foto/galeri-foto.module": [
		317,
		16
	],
	"../pages/galeri-video/galeri-video.module": [
		320,
		15
	],
	"../pages/ikm-detail/ikm-detail.module": [
		318,
		14
	],
	"../pages/list-agenda/list-agenda.module": [
		319,
		13
	],
	"../pages/list-berita/list-berita.module": [
		321,
		12
	],
	"../pages/list-ikm/list-ikm.module": [
		322,
		11
	],
	"../pages/list-pasar/list-pasar.module": [
		323,
		10
	],
	"../pages/list-pengumuman/list-pengumuman.module": [
		324,
		9
	],
	"../pages/login/login.module": [
		325,
		8
	],
	"../pages/pasar/pasar.module": [
		326,
		0
	],
	"../pages/play-video/play-video.module": [
		327,
		7
	],
	"../pages/produk-form/produk-form.module": [
		328,
		6
	],
	"../pages/profil-pasar/profil-pasar.module": [
		329,
		5
	],
	"../pages/registrasi-ikm/registrasi-ikm.module": [
		331,
		4
	],
	"../pages/sebaran-ikm/sebaran-ikm.module": [
		330,
		3
	],
	"../pages/user-ikm-detail/user-ikm-detail.module": [
		332,
		2
	],
	"../pages/user-profile/user-profile.module": [
		333,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 183;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_pasar_list_pasar__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_forget_password_forget_password__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detail_pasar_detail_pasar__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_berita_list_berita__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detail_berita_detail_berita__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_agenda_list_agenda__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detail_agenda_detail_agenda__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_list_pengumuman_list_pengumuman__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_detail_pengumuman_detail_pengumuman__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_galeri_foto_galeri_foto__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_detail_album_detail_album__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_detail_image_detail_image__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_galeri_video_galeri_video__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_play_video_play_video__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_registrasi_ikm_registrasi_ikm__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_profil_pasar_profil_pasar__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_user_profile_user_profile__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_user_ikm_detail_user_ikm_detail__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_sebaran_ikm_sebaran_ikm__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_ikm_detail_ikm_detail__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_list_ikm_list_ikm__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_produk_form_produk_form__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_transfer__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_file__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_host_host__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_token_token__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_file_chooser__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_image_picker__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_forget_password_forget_password__["a" /* ForgetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_pasar_list_pasar__["a" /* ListPasarPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detail_pasar_detail_pasar__["a" /* DetailPasarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_berita_list_berita__["a" /* ListBeritaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detail_berita_detail_berita__["a" /* DetailBeritaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_agenda_list_agenda__["a" /* ListAgendaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_agenda_detail_agenda__["a" /* DetailAgendaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_pengumuman_list_pengumuman__["a" /* ListPengumumanPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detail_pengumuman_detail_pengumuman__["a" /* DetailPengumumanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_galeri_foto_galeri_foto__["a" /* GaleriFotoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_detail_album_detail_album__["a" /* DetailAlbumPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_detail_image_detail_image__["a" /* DetailImagePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_galeri_video_galeri_video__["a" /* GaleriVideoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_play_video_play_video__["a" /* PlayVideoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_registrasi_ikm_registrasi_ikm__["a" /* RegistrasiIkmPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_profil_pasar_profil_pasar__["a" /* ProfilPasarPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_user_profile_user_profile__["a" /* UserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_user_ikm_detail_user_ikm_detail__["a" /* UserIkmDetailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sebaran_ikm_sebaran_ikm__["a" /* SebaranIkmPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_ikm_detail_ikm_detail__["a" /* IkmDetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_list_ikm_list_ikm__["a" /* ListIkmPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_produk_form_produk_form__["a" /* ProdukFormPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail-agenda/detail-agenda.module#DetailAgendaPageModule', name: 'DetailAgendaPage', segment: 'detail-agenda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-album/detail-album.module#DetailAlbumPageModule', name: 'DetailAlbumPage', segment: 'detail-album', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-berita/detail-berita.module#DetailBeritaPageModule', name: 'DetailBeritaPage', segment: 'detail-berita', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-image/detail-image.module#DetailImagePageModule', name: 'DetailImagePage', segment: 'detail-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-pasar/detail-pasar.module#DetailPasarPageModule', name: 'DetailPasarPage', segment: 'detail-pasar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-pengumuman/detail-pengumuman.module#DetailPengumumanPageModule', name: 'DetailPengumumanPage', segment: 'detail-pengumuman', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget-password/forget-password.module#ForgetPasswordPageModule', name: 'ForgetPasswordPage', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/galeri-foto/galeri-foto.module#GaleriFotoPageModule', name: 'GaleriFotoPage', segment: 'galeri-foto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ikm-detail/ikm-detail.module#IkmDetailPageModule', name: 'IkmDetailPage', segment: 'ikm-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-agenda/list-agenda.module#ListAgendaPageModule', name: 'ListAgendaPage', segment: 'list-agenda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/galeri-video/galeri-video.module#GaleriVideoPageModule', name: 'GaleriVideoPage', segment: 'galeri-video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-berita/list-berita.module#ListBeritaPageModule', name: 'ListBeritaPage', segment: 'list-berita', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-ikm/list-ikm.module#ListIkmPageModule', name: 'ListIkmPage', segment: 'list-ikm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-pasar/list-pasar.module#ListPasarPageModule', name: 'ListPasarPage', segment: 'list-pasar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-pengumuman/list-pengumuman.module#ListPengumumanPageModule', name: 'ListPengumumanPage', segment: 'list-pengumuman', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pasar/pasar.module#PasarPageModule', name: 'PasarPage', segment: 'pasar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/play-video/play-video.module#PlayVideoPageModule', name: 'PlayVideoPage', segment: 'play-video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produk-form/produk-form.module#ProdukFormPageModule', name: 'ProdukFormPage', segment: 'produk-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profil-pasar/profil-pasar.module#ProfilPasarPageModule', name: 'ProfilPasarPage', segment: 'profil-pasar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sebaran-ikm/sebaran-ikm.module#SebaranIkmPageModule', name: 'SebaranIkmPage', segment: 'sebaran-ikm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrasi-ikm/registrasi-ikm.module#RegistrasiIkmPageModule', name: 'RegistrasiIkmPage', segment: 'registrasi-ikm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-ikm-detail/user-ikm-detail.module#UserIkmDetailPageModule', name: 'UserIkmDetailPage', segment: 'user-ikm-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_33__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_34__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_forget_password_forget_password__["a" /* ForgetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_pasar_list_pasar__["a" /* ListPasarPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detail_pasar_detail_pasar__["a" /* DetailPasarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_berita_list_berita__["a" /* ListBeritaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detail_berita_detail_berita__["a" /* DetailBeritaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_agenda_list_agenda__["a" /* ListAgendaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_agenda_detail_agenda__["a" /* DetailAgendaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_pengumuman_list_pengumuman__["a" /* ListPengumumanPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detail_pengumuman_detail_pengumuman__["a" /* DetailPengumumanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_galeri_foto_galeri_foto__["a" /* GaleriFotoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_detail_album_detail_album__["a" /* DetailAlbumPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_detail_image_detail_image__["a" /* DetailImagePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_galeri_video_galeri_video__["a" /* GaleriVideoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_play_video_play_video__["a" /* PlayVideoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_registrasi_ikm_registrasi_ikm__["a" /* RegistrasiIkmPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_profil_pasar_profil_pasar__["a" /* ProfilPasarPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_user_profile_user_profile__["a" /* UserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_user_ikm_detail_user_ikm_detail__["a" /* UserIkmDetailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sebaran_ikm_sebaran_ikm__["a" /* SebaranIkmPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_ikm_detail_ikm_detail__["a" /* IkmDetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_list_ikm_list_ikm__["a" /* ListIkmPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_produk_form_produk_form__["a" /* ProdukFormPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_32__providers_host_host__["a" /* HostProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_token_token__["a" /* TokenProvider */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_image_picker__["a" /* ImagePicker */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_berita_list_berita__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_agenda_list_agenda__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_pasar_list_pasar__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_pengumuman_list_pengumuman__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_galeri_foto_galeri_foto__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_galeri_video_galeri_video__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_registrasi_ikm_registrasi_ikm__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_profile_user_profile__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_sebaran_ikm_sebaran_ikm__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_list_ikm_list_ikm__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
            { title: 'Berita', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_berita_list_berita__["a" /* ListBeritaPage */] },
            { title: 'Agenda', component: __WEBPACK_IMPORTED_MODULE_8__pages_list_agenda_list_agenda__["a" /* ListAgendaPage */] },
            { title: 'Harga Komoditi', component: __WEBPACK_IMPORTED_MODULE_9__pages_list_pasar_list_pasar__["a" /* ListPasarPage */] },
            { title: 'Pengumuman', component: __WEBPACK_IMPORTED_MODULE_10__pages_list_pengumuman_list_pengumuman__["a" /* ListPengumumanPage */] },
            { title: 'Galeri Foto', component: __WEBPACK_IMPORTED_MODULE_11__pages_galeri_foto_galeri_foto__["a" /* GaleriFotoPage */] },
            { title: 'Galeri Video', component: __WEBPACK_IMPORTED_MODULE_12__pages_galeri_video_galeri_video__["a" /* GaleriVideoPage */] },
            { title: 'Sebaran IKM', component: __WEBPACK_IMPORTED_MODULE_15__pages_sebaran_ikm_sebaran_ikm__["a" /* SebaranIkmPage */] },
            { title: 'List IKM', component: __WEBPACK_IMPORTED_MODULE_16__pages_list_ikm_list_ikm__["a" /* ListIkmPage */] },
        ];
        this.loggedInPages = [
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_14__pages_user_profile_user_profile__["a" /* UserProfilePage */] },
            { title: 'Registrasi IKM', component: __WEBPACK_IMPORTED_MODULE_13__pages_registrasi_ikm_registrasi_ikm__["a" /* RegistrasiIkmPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.checkIfLoggedIn();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.checkIfLoggedIn = function () {
        var _this = this;
        console.log("checking...");
        this.storage.get('isLogin').then(function (loggedIn) {
            if (loggedIn) {
                _this.isLogin = true;
                _this.isLogout = false;
                console.log("logged in");
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_14__pages_user_profile_user_profile__["a" /* UserProfilePage */];
            }
            else {
                _this.isLogin = false;
                _this.isLogout = true;
                console.log("logout");
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.pushLoginPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.logout = function () {
        this.storage.remove('token');
        this.storage.set('isLogin', false);
        this.storage.set('isLogout', true);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
        this.isLogin = false;
        this.isLogout = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\app\app.html"*/'<ion-menu [content]="content" (ionOpen)="checkIfLoggedIn()">\n\n  <ion-content>\n\n    <div class="sidemenu-header">\n      <img src="assets/imgs/logo-kukar.png" height="55px" width="auto" class="header-logo animated fadeIn">\n      <h1 class="header-title animated fadeInUp"><span class="underline">DISPERINDAG</span></h1>\n      <h5 class="header-subtitle animated fadeInUp">KUTAI KARTANEGARA</h5>\n    </div>\n\n    <ion-list>\n      <div *ngIf="this.isLogout">\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n        <button ion-item (click)="this.pushLoginPage()">Login</button>\n      </div>\n      <div *ngIf="this.isLogin">\n        <button menuClose ion-item *ngFor="let loggedInPage of loggedInPages" (click)="openPage(loggedInPage)">\n          {{loggedInPage.title}}\n        </button>\n        <button ion-item (click)="logout()">Logout</button>\n      </div>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TokenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TokenProvider = (function () {
    function TokenProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello TokenProvider Provider');
    }
    TokenProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TokenProvider);
    return TokenProvider;
}());

//# sourceMappingURL=token.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriFotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_host_host__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_album_detail_album__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GaleriFotoPage = (function () {
    function GaleriFotoPage(navCtrl, navParams, host, http, sanitization) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.host = host;
        this.http = http;
        this.sanitization = sanitization;
        this.getAlbums();
    }
    GaleriFotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GaleriFotoPage');
    };
    GaleriFotoPage.prototype.getAlbums = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/galeri-foto", { headers: headers })
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        }, function (err) {
            console.log(err);
        });
    };
    GaleriFotoPage.prototype.pushDetailAlbum = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detail_album_detail_album__["a" /* DetailAlbumPage */], {
            id: id
        });
    };
    GaleriFotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-galeri-foto',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\galeri-foto\galeri-foto.html"*/'<ion-header no-border>\n\n  <ion-navbar class="send-to-front">\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span style="color: #fff !important;">Galeri Foto</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-slides>\n    <ion-slide *ngFor="let album of this.data?.album_fotos" (click)="this.pushDetailAlbum(album.id)" [style.background-image]="this.sanitization.bypassSecurityTrustStyle(\'url(\' + album.thumbnail.foto + \')\')" style="background-repeat: no-repeat; background-size: cover;">\n      <div class="dark-overlay"></div>\n      <div class="info-album animated fadeIn delay-1s">\n        <h4 class="nama-album"><span class="background-hitam" style="padding: 5px 15px;">{{ album.nama }}</span></h4>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\galeri-foto\galeri-foto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], GaleriFotoPage);
    return GaleriFotoPage;
}());

//# sourceMappingURL=galeri-foto.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IkmDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IkmDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IkmDetailPage = (function () {
    function IkmDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ikm = this.navParams.get('ikm');
    }
    IkmDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IkmDetailPage');
    };
    IkmDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ikm-detail',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\ikm-detail\ikm-detail.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span>IKM Detail</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card class="animated fadeIn">\n    <ion-card-content>\n      <ion-list>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Nama Sentra</b></h2>\n            <p>{{ this.ikm.nama_sentra }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Jenis Produk</b></h2>\n            <p>{{ this.ikm.jenis_produk }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Jumlah Unit Usaha</b></h2>\n            <p>{{ this.ikm.jumlah_unit_usaha }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Kontak Person</b></h2>\n            <p>{{ this.ikm.kontak_person }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Alamat</b></h2>\n            <p>{{ this.ikm.alamat }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>RT</b></h2>\n            <p>{{ this.ikm.rt }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>RW</b></h2>\n            <p>{{ this.ikm.rw }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Kelurahan</b></h2>\n            <p>{{ this.ikm.kelurahan }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Kecamatan</b></h2>\n            <p>{{ this.ikm.kecamatan }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Wilayah</b></h2>\n            <p>{{ this.ikm.wilayah }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Tenaga Kerja</b></h2>\n            <p>{{ this.ikm.tenaga_kerja }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Nilai Investasi</b></h2>\n            <p>{{ this.ikm.nilai_investasi }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Kapasitas Produksi</b></h2>\n            <p>{{ this.ikm.kapasitas_produksi }}</p>\n          </div>\n        </ion-item>\n\n        <ion-item class="list-ikm">\n          <div class="ikm-description">\n            <h2 style="color: #444;"><b>Satuan Berat</b></h2>\n            <p>{{ this.ikm.satuan }}</p>\n          </div>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\ikm-detail\ikm-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], IkmDetailPage);
    return IkmDetailPage;
}());

//# sourceMappingURL=ikm-detail.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListAgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_host_host__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_agenda_detail_agenda__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListAgendaPage = (function () {
    function ListAgendaPage(navCtrl, navParams, host, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.host = host;
        this.http = http;
        this.getAgenda();
    }
    ListAgendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListAgendaPage');
    };
    ListAgendaPage.prototype.getAgenda = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/agenda", { headers: headers })
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        }, function (err) {
            console.log(err);
        });
    };
    ListAgendaPage.prototype.pushDetailAgendaPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_agenda_detail_agenda__["a" /* DetailAgendaPage */], {
            id: id
        });
    };
    ListAgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-list-agenda',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\list-agenda\list-agenda.html"*/'<ion-header no-border>\n  <ion-navbar>\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span>List Agenda</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <div style="padding: 0px 16px 10px 16px; background: rgb(255, 255, 255) !important;">\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </div>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of this.data?.agendas" (click)="this.pushDetailAgendaPage(item.id)">\n      <h2>{{ item.judul }}</h2>\n      <p>{{ item.topik }}</p>\n      <p><b>{{ item.tanggal }}</b></p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\list-agenda\list-agenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ListAgendaPage);
    return ListAgendaPage;
}());

//# sourceMappingURL=list-agenda.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListBeritaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_host_host__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_berita_detail_berita__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ListBeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListBeritaPage = (function () {
    function ListBeritaPage(navCtrl, navParams, http, host, sanitization) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.host = host;
        this.sanitization = sanitization;
        this.getBerita();
    }
    ListBeritaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListBeritaPage');
    };
    ListBeritaPage.prototype.getBerita = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/berita", { headers: headers })
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        }, function (err) {
            console.log(err);
        });
    };
    ListBeritaPage.prototype.pushDetailBeritaPage = function (idBerita) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detail_berita_detail_berita__["a" /* DetailBeritaPage */], {
            id: idBerita
        });
    };
    ListBeritaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-list-berita',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\list-berita\list-berita.html"*/'<ion-header no-border>\n\n  <ion-navbar class="send-to-front">\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span style="color: #fff !important;">List Berita</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div *ngFor="let berita of this.data?.beritas" [style.background-image]="this.sanitization.bypassSecurityTrustStyle(\'url(\' + berita.thumbnail + \')\')" class="card-berita" (click)="this.pushDetailBeritaPage(berita.id)">\n    <div class="dark-overlay"></div>\n    <div class="berita-info">\n      <h3 class="title">{{ berita.judul }}</h3>\n      <p class="deskripsi">{{ berita.created_at }}</p>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\list-berita\list-berita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ListBeritaPage);
    return ListBeritaPage;
}());

//# sourceMappingURL=list-berita.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListIkmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ListIkmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListIkmPage = (function () {
    function ListIkmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListIkmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListIkmPage');
    };
    ListIkmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-ikm',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\list-ikm\list-ikm.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span>List IKM</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\list-ikm\list-ikm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListIkmPage);
    return ListIkmPage;
}());

//# sourceMappingURL=list-ikm.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPasarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_host_host__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_pasar_detail_pasar__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ListPasarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPasarPage = (function () {
    function ListPasarPage(navCtrl, navParams, http, host, storage, sanitization) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.host = host;
        this.storage = storage;
        this.sanitization = sanitization;
        this.getPasar();
    }
    ListPasarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPasarPage');
    };
    ListPasarPage.prototype.getPasar = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/pasar", { headers: headers })
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        }, function (err) {
            console.log(err);
        });
    };
    ListPasarPage.prototype.pushDetailPasarPage = function (pasarId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__detail_pasar_detail_pasar__["a" /* DetailPasarPage */], {
            id: pasarId
        });
    };
    ListPasarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-list-pasar',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\list-pasar\list-pasar.html"*/'<ion-header no-border>\n\n  <ion-navbar class="send-to-front">\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span style="color: #fff !important;">List Pasar</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-slides>\n    <ion-slide *ngFor="let pasar of this.data?.pasars" (click)="this.pushDetailPasarPage(pasar.id)" [style.background-image]="this.sanitization.bypassSecurityTrustStyle(\'url(\' + pasar.thumbnail + \')\')" style="background-repeat: no-repeat; background-size: cover;">\n      <div class="dark-overlay"></div>\n      <div class="info-pasar animated fadeIn delay-1s">\n        <h1 class="nama-pasar"><b>{{ pasar.nama }}</b></h1>\n        <p class="deskripsi-pasar">{{ pasar.deskripsi | slice:0:30 }} ...</p>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\list-pasar\list-pasar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ListPasarPage);
    return ListPasarPage;
}());

//# sourceMappingURL=list-pasar.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPengumumanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_host_host__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_pengumuman_detail_pengumuman__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPengumumanPage = (function () {
    function ListPengumumanPage(navCtrl, navParams, host, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.host = host;
        this.http = http;
        this.getPengumuman();
    }
    ListPengumumanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPengumumanPage');
    };
    ListPengumumanPage.prototype.getPengumuman = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/pengumuman", { headers: headers })
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        }, function (err) {
            console.log(err);
        });
    };
    ListPengumumanPage.prototype.removehtmltags = function (val) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = val;
        return tmp.textContent || tmp.innerText || "";
    };
    ListPengumumanPage.prototype.pushDetailPengumumanPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_pengumuman_detail_pengumuman__["a" /* DetailPengumumanPage */], {
            id: id
        });
    };
    ListPengumumanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-list-pengumuman',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\list-pengumuman\list-pengumuman.html"*/'<ion-header no-border>\n  <ion-navbar>\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span>Pengumuman</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <div style="padding: 0px 16px 10px 16px; background: rgb(255, 255, 255) !important;">\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </div>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of this.data?.pengumumans" (click)="this.pushDetailPengumumanPage(item.id)">\n      <h2>{{ item.judul }}</h2>\n      <p>{{ this.removehtmltags(item.isi) }}</p>\n      <p><b>{{ item.tanggal }}</b></p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\list-pengumuman\list-pengumuman.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ListPengumumanPage);
    return ListPengumumanPage;
}());

//# sourceMappingURL=list-pengumuman.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SebaranIkmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_host_host__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ikm_detail_ikm_detail__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SebaranIkmPage = (function () {
    function SebaranIkmPage(navCtrl, navParams, http, host, storage, sanitization) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.host = host;
        this.storage = storage;
        this.sanitization = sanitization;
        this.latitude = -0.432914;
        this.longitude = 116.989678;
        this.mapIkm = true;
        this.getIkm();
    }
    SebaranIkmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SebaranIkmPage');
        this.loadMap();
    };
    SebaranIkmPage.prototype.getIkm = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/ikm", { headers: headers })
            .subscribe(function (data) {
            _this.ikm = data;
            console.log(_this.ikm);
            _this.setMarkers();
        }, function (err) {
            console.log(err);
        });
    };
    SebaranIkmPage.prototype.loadMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = L.map('myMap', { zoomControl: false }).setView([_this.latitude, _this.longitude], 13);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'sk.eyJ1IjoiaGl6a2lhbXVtdTI0IiwiYSI6ImNqbnlnY2VrcDBoaGwzd3FsNzFtazEzZjUifQ.f1Z0P21FPTpgXAoyLX1Dzg'
            }).addTo(_this.map);
            // var marker = L.marker([this.latitude, this.longitude], { draggable: true }).addTo(this.map);
            //
            // marker.on('dragend', (e) => {
            //   this.latitude = marker.getLatLng().lat;
            //   this.longitude = marker.getLatLng().lng;
            //   console.log(this.latitude, this.longitude);
            // });
        }, 300);
    };
    SebaranIkmPage.prototype.setMarkers = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.ikm);
            var _loop_1 = function (i) {
                marker = L.marker([_this.ikm.ikm[i].latitude, _this.ikm.ikm[i].longitude]).addTo(_this.map);
                marker.on('click', function (e) {
                    _this.pushIkmDetailPage(_this.ikm.ikm[i]);
                });
            };
            var marker;
            for (var i = 0; i < _this.ikm.ikm.length; i++) {
                _loop_1(i);
            }
        }, 3000);
    };
    SebaranIkmPage.prototype.pushIkmDetailPage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__ikm_detail_ikm_detail__["a" /* IkmDetailPage */], {
            'ikm': data
        });
    };
    SebaranIkmPage.prototype.showMapIkm = function () {
        if (!this.mapIkm) {
            this.mapIkm = true;
            this.listIkm = false;
            this.loadMap();
            this.setMarkers();
        }
    };
    SebaranIkmPage.prototype.showListIkm = function () {
        this.mapIkm = false;
        this.listIkm = true;
    };
    SebaranIkmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-sebaran-ikm',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\sebaran-ikm\sebaran-ikm.html"*/'<ion-header no-border>\n\n  <ion-navbar class="send-to-front">\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span style="color: #fff !important;">Sebaran IKM</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="tab-button-area">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button block [outline]="!mapIkm" color="dark" (click)="this.showMapIkm()">Map IKM</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button block [outline]="!listIkm" color="dark" (click)="this.showListIkm()">List IKM</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div id="myMap" *ngIf="mapIkm">\n\n  </div>\n\n  <div *ngIf="listIkm">\n    <ion-card style="margin-top: -1px;" class="animated fadeIn">\n      <ion-card-content>\n        <ion-list>\n          <ion-item *ngFor="let ikm of this.ikm?.ikm" class="list-ikm">\n            <div class="ikm-description" (click)="this.pushIkmDetailPage(ikm)">\n              <h2 style="color: #444;"><b>{{ ikm.nama_sentra }}</b></h2>\n              <p>{{ ikm.alamat }}</p>\n            </div>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\sebaran-ikm\sebaran-ikm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SebaranIkmPage);
    return SebaranIkmPage;
}());

//# sourceMappingURL=sebaran-ikm.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_host_host__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_ikm_detail_user_ikm_detail__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ikm_detail_ikm_detail__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserProfilePage = (function () {
    function UserProfilePage(navCtrl, navParams, storage, http, host, sanitization, actionSheetCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.host = host;
        this.sanitization = sanitization;
        this.actionSheetCtrl = actionSheetCtrl;
        this.ikmSaya = true;
        this.semuaIkm = false;
        this.storage.get('user').then(function (user) {
            console.log(user);
            _this.user = user;
            _this.getUserIkm();
        });
        this.getSemuaIkm();
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserProfilePage');
    };
    UserProfilePage.prototype.getSemuaIkm = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/ikm", { headers: headers })
            .subscribe(function (data) {
            _this.ikm = data;
            console.log(_this.ikm);
        }, function (err) {
            console.log(err);
        });
    };
    UserProfilePage.prototype.getUserIkm = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/ikm/user/" + this.user.id, { headers: headers })
            .subscribe(function (data) {
            _this.ikmUser = data;
            console.log(_this.ikmUser);
        }, function (err) {
            console.log(err);
        });
    };
    UserProfilePage.prototype.pushUserIkmDetailPage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_ikm_detail_user_ikm_detail__["a" /* UserIkmDetailPage */], {
            ikm: data
        });
    };
    UserProfilePage.prototype.pushIkmDetailPage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__ikm_detail_ikm_detail__["a" /* IkmDetailPage */], {
            ikm: data
        });
    };
    UserProfilePage.prototype.showIkmSaya = function () {
        this.ikmSaya = true;
        this.semuaIkm = false;
    };
    UserProfilePage.prototype.showSemuaIkm = function () {
        this.ikmSaya = false;
        this.semuaIkm = true;
    };
    UserProfilePage.prototype.deleteIkm = function (ikm) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        this.http.get(this.host.baseUrl + "/ikm/delete/" + ikm.id, { headers: headers })
            .subscribe(function (data) {
            console.log("Berhasil menghapus IKM");
            _this.getUserIkm();
            _this.getSemuaIkm();
        }, function (err) {
            console.log(err);
        });
    };
    UserProfilePage.prototype.presentActionSheet = function (data) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: data.nama_sentra,
            buttons: [
                {
                    text: 'Edit',
                    role: 'edit',
                    handler: function () {
                        console.log('Edit clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        console.log('Delete clicked');
                        _this.deleteIkm(data);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-user-profile',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\user-profile\user-profile.html"*/'<ion-header no-border>\n\n  <ion-navbar class="send-to-front">\n\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <span style="color: #fff !important;">Profile</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <img src="assets/imgs/logo-kukar.png" height="27px" width="auto" style="margin-bottom: -3px !important;">\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="profile-area">\n    <div class="dark-overlay"></div>\n    <div class="profile-content">\n      <img src="http://newsoft.ps/wp-content/uploads/2016/06/John_Doe.jpg" height="90px" width="auto" style="border-radius: 100%;">\n      <h3 class="user-name">{{ this.user?.name }}</h3>\n      <h5 class="user-email">{{ this.user?.email }}</h5>\n    </div>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button block [outline]="!ikmSaya" color="dark" (click)="this.showIkmSaya()">IKM Saya</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block [outline]="!semuaIkm" color="dark" (click)="this.showSemuaIkm()">Semua IKM</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card style="margin-top: -1px;" *ngIf="ikmSaya" class="animated fadeIn">\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor="let ikmUser of this.ikmUser?.ikm" class="list-ikm">\n          <div class="ikm-description" (click)="this.pushUserIkmDetailPage(ikmUser)">\n            <h2 style="color: #444;"><b>{{ ikmUser.nama_sentra }}</b></h2>\n            <p>{{ ikmUser.alamat }}</p>\n          </div>\n          <div class="ikm-option">\n            <ion-icon ios="ios-more" md="md-more" (click)="this.presentActionSheet(ikmUser)"></ion-icon>\n          </div>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card style="margin-top: -1px;" *ngIf="semuaIkm" class="animated fadeIn">\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor="let ikm of this.ikm?.ikm" class="list-ikm">\n          <div class="ikm-description" (click)="this.pushIkmDetailPage(ikm)">\n            <h2 style="color: #444;"><b>{{ ikm.nama_sentra }}</b></h2>\n            <p>{{ ikm.alamat }}</p>\n          </div>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\user-profile\user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_berita_list_berita__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_agenda_list_agenda__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_pasar_list_pasar__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_pengumuman_list_pengumuman__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__galeri_foto_galeri_foto__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sebaran_ikm_sebaran_ikm__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_ikm_list_ikm__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.swipeEnable(true);
    }
    HomePage.prototype.pushListPasarPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_pasar_list_pasar__["a" /* ListPasarPage */]);
    };
    HomePage.prototype.pushListBeritaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_berita_list_berita__["a" /* ListBeritaPage */]);
    };
    HomePage.prototype.pushListAgendaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_agenda_list_agenda__["a" /* ListAgendaPage */]);
    };
    HomePage.prototype.pushListPengumumanPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__list_pengumuman_list_pengumuman__["a" /* ListPengumumanPage */]);
    };
    HomePage.prototype.pushGaleriFotoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__galeri_foto_galeri_foto__["a" /* GaleriFotoPage */]);
    };
    HomePage.prototype.pushSebaranIkmPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__sebaran_ikm_sebaran_ikm__["a" /* SebaranIkmPage */]);
    };
    HomePage.prototype.pushListIkmPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__list_ikm_list_ikm__["a" /* ListIkmPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\penting\project\xxDISPERINDAG\src\pages\home\home.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title center>\n      <img src="assets/imgs/logo-kukar.png" height="25px" width="auto" style="margin-bottom: -5px !important;">\n      <span>DISPERINDAG</span>\n    </ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only>\n        <ion-icon ios="md-chatboxes" md="md-chatboxes"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <div style="padding: 0px 16px 10px 16px; background: rgb(255, 255, 255) !important;">\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </div>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-slides pager>\n\n    <ion-slide>\n      <img src="https://source.unsplash.com/1600x900/?tomato" width="100%" height="auto">\n    </ion-slide>\n\n    <ion-slide>\n      <img src="https://source.unsplash.com/1600x900/?chili" width="100%" height="auto">\n    </ion-slide>\n\n    <ion-slide>\n      <img src="https://source.unsplash.com/1600x900/?rice" width="100%" height="auto">\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-card style="margin-bottom: 20px !important;">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col (click)="this.pushListPasarPage()">\n            <ion-icon ios="ios-pricetags-outline" md="ios-pricetags-outline" class="icon-button" style="color: rgb(87, 85, 85);"></ion-icon>\n            <h5><b>Harga Komoditi</b></h5>\n          </ion-col>\n          <!-- <ion-col (click)="this.pushListBeritaPage()">\n            <ion-icon ios="ios-paper-outline" md="ios-paper-outline" class="icon-button" style="color: rgb(87, 85, 85);"></ion-icon>\n            <h5><b>News</b></h5>\n          </ion-col> -->\n          <ion-col (click)="this.pushListAgendaPage()">\n            <ion-icon ios="ios-calendar-outline" md="ios-calendar-outline" class="icon-button" style="color: rgb(87, 85, 85);"></ion-icon>\n            <h5><b>Agenda</b></h5>\n          </ion-col>\n        </ion-row>\n\n        <!-- <ion-row>\n          <ion-col (click)="this.pushListPengumumanPage()">\n            <ion-icon ios="ios-alert-outline" md="ios-alert-outline" class="icon-button" style="color: rgb(87, 85, 85);"></ion-icon>\n            <h5><b>Pengumuman</b></h5>\n          </ion-col>\n          <ion-col>\n            <ion-icon ios="ios-videocam-outline" md="ios-videocam-outline" class="icon-button" style="color: rgb(87, 85, 85);"></ion-icon>\n            <h5><b>Galeri Video</b></h5>\n          </ion-col>\n          <ion-col (click)="this.pushGaleriFotoPage()">\n            <ion-icon ios="ios-image-outline" md="ios-image-outline" class="icon-button" style="color: rgb(87, 85, 85);"></ion-icon>\n            <h5><b>Galeri Foto</b></h5>\n          </ion-col>\n        </ion-row> -->\n\n        <ion-row>\n          <ion-col (click)="this.pushListIkmPage()">\n            <ion-icon ios="ios-list-box-outline" md="ios-list-box-outline" class="icon-button" style="color: rgb(87, 85, 85);"></ion-icon>\n            <h5><b>List IKM</b></h5>\n          </ion-col>\n          <!-- <ion-col>\n            <ion-icon ios="ios-create-outline" md="ios-create-outline" class="icon-button" style="color: rgb(87, 85, 85);"></ion-icon>\n            <h5><b>Registrasi IKM</b></h5>\n          </ion-col> -->\n          <ion-col (click)="this.pushSebaranIkmPage()">\n            <ion-icon ios="ios-map-outline" md="ios-map-outline" class="icon-button" style="color: rgb(87, 85, 85);"></ion-icon>\n            <h5><b>Sebaran IKM</b></h5>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\penting\project\xxDISPERINDAG\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map