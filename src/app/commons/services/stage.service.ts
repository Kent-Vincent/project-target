import { Injectable } from '@angular/core';
import { AuthTokenService } from './auth-token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StageService {
  private baseUrl = 'http://127.0.0.1:8000/'
  private stagesUrl = this.baseUrl + 'api/workspace/current/stage';

  constructor(private http: HttpClient, private authTokenService: AuthTokenService) { }

  authToken = this.authTokenService.getAuthToken();

  getStages(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.authToken}`
    });
    return this.http.get<any>(this.stagesUrl, { headers });
  }
}
