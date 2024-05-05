import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  private authTokenKey = 'authToken';

  constructor() { }

  setAuthToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  clearAuthToken(): void {
    localStorage.removeItem(this.authTokenKey);
  }
}
