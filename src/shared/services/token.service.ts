import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private KEY = 'token';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  saveTokenInLocalStorage(token: string) {
    window.localStorage.setItem(this.KEY, token);
  }

  getTokenFromLocalStorage() {
    return window.localStorage.getItem(this.KEY);
  }

  removeTokenFromLocalStorage() {
    window.localStorage.removeItem(this.KEY);
  }
}
