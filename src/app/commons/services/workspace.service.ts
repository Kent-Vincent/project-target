import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  private apiUrl = 'http://127.0.0.1:8000/api/workspace/current/';

  constructor(private http: HttpClient, private authTokenService: AuthTokenService) { }

  getWorkspaceName(): Observable<any> {
    const authToken = this.authTokenService.getAuthToken();
    const headers = new HttpHeaders({
      'Authorization': `Token ${authToken}`
    });
    return this.http.get<any>(`${this.apiUrl}workspace/current/`, { headers });
  }

  getStages(): Observable<any> {
    const authToken = this.authTokenService.getAuthToken();
    const headers = new HttpHeaders({
      'Authorization': `Token ${authToken}`
    });
    return this.http.get<any>(`${this.apiUrl}stages/`, { headers });
  }
}
