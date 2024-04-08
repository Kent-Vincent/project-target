import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { UseMutation } from '@ngneat/query';

import { AUTH_KEY } from 'src/app/commons/constants/config.constant';
import { Auth, Login } from 'src/app/commons/models/users.model';
import { API_LOGIN } from 'src/app/commons/constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  useMutate = inject(UseMutation)

  constructor(
    private $http: HttpClient,
    private router: Router,
  ) { }

  set token(key: any) {
    (window as Window).localStorage[AUTH_KEY] = JSON.stringify(key);
  }

  get token() {
    const d = (window as Window).localStorage[AUTH_KEY];
    return !d ? null: JSON.parse(d);
  }

  get authenticated(): boolean {
    return Boolean(this.token);
  }

  login(data: Login | FormData) {
    return this.$http.post<Auth>(API_LOGIN, data);
  }

  logout(){
    localStorage.removeItem(AUTH_KEY);
    window.location.href = '/'
  }
}
