import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient, private authTokenService: AuthTokenService) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}api/users/login/`, { email, password });
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
