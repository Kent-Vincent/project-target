import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://127.0.0.1:8000/api/users/';

  constructor(private http: HttpClient) { }

  register(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = { email, password };
    return this.http.post<any>(`${this.apiUrl}register/`, body, { headers });
  }
}