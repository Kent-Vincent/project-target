import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://127.0.0.1:8000/';
  private authToken: string = ''; 

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}api/users/login/`, { email, password });
  }

  setAuthToken(token: string): void {
    this.authToken = token;
    localStorage.setItem('token', token);
  }

  getAuthToken(): string {
    if (!this.authToken) {
      this.authToken = localStorage.getItem('token') || '';
    }
    return this.authToken;
  }

  clearAuthToken(): void {
    this.authToken = '';
    localStorage.removeItem('token');
  }

  logout(): void {
    this.clearAuthToken(); // Clear authentication token
    // Optionally, you can perform additional logout-related tasks here
  }
}
