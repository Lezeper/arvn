import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {
  constructor() {}

  getToken(): string {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: string) {
    window.localStorage['jwtToken'] = token;
  }

  removeToken() {
    window.localStorage.removeItem('jwtToken');
  }
}