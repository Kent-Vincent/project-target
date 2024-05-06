import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';
import { API_LOGIN } from '../constants/api.constant';
import { Auth, Login } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://10.0.254.20:8000/';

  constructor(private http: HttpClient, private authTokenService: AuthTokenService) { }

  login(data:Login|FormData) {
    return this.http.post<Auth>(API_LOGIN, data);
  }

  logout(): void {
    this.authTokenService.clearAuthToken();
  }

  getCurrentUser(): Observable<any> {
    const authToken = this.authTokenService.getAuthToken();
    const headers = new HttpHeaders({
      'Authorization': `Token ${authToken}`
    });
    return this.http.get<any>(`${this.apiUrl}api/users/currentUser/`, { headers });
  }
}
