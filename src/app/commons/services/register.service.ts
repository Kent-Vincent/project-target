import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/users.model';
import { API_CREATE } from '../constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  register(data:Register | FormData) {
    return this.http.post<any>(API_CREATE, data);
  }
}