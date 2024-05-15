import { Injectable } from '@angular/core';
import { AuthTokenService } from './auth-token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CREATE_STAGE, API_STAGE_SPECIFIC_ID } from '../constants/api.constant';


@Injectable({
  providedIn: 'root'
})
export class StageService {
  constructor(private http: HttpClient, private authTokenService: AuthTokenService) { }

  authToken = this.authTokenService.getAuthToken();

  getStagesByWorkspace(workspaceID: number): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.authToken}`
    });
    return this.http.get<any[]>(`${API_STAGE_SPECIFIC_ID}${workspaceID}`, { headers: headers });
  }
}
