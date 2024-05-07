import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  private USER_ID_KEY  = 'currentUserID';
  constructor() { }

  setCurrentUserID(userID: string): void {
    localStorage.setItem(this.USER_ID_KEY, userID);
  }

  getCurrentUserID(): string | null {
    return localStorage.getItem(this.USER_ID_KEY);
  }

  clearCurrentUserID(): void {
    localStorage.removeItem(this.USER_ID_KEY);
  }
}
