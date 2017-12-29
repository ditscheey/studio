import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'HGwLhE5dyISzZb2sa7IDBYd0DZH88f6e',
    domain: 'ditscheey.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://ditscheey.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });

  constructor() { }

  public login(): void{
    this.auth0.authorize();
  }
}
