import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../../pages/login/login';

/*
  Generated class for the TokenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TokenProvider {

  token: any;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello TokenProvider Provider');
  }

}
