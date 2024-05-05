import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  private baseUrl = 'http://127.0.0.1:8000/'
  
  private workspacesUrl = this.baseUrl + 'api/workspace/current/';
  private stagesUrl = this.baseUrl + 'api/workspace/stages/current';
  constructor(private http: HttpClient, private authTokenService: AuthTokenService) { }

  authToken = this.authTokenService.getAuthToken();

  getWorkspaceName(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.authToken}`
    });
    return this.http.get<any>(this.workspacesUrl, { headers });
  }

  getStages(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.authToken}`
    });
    return this.http.get<any>(this.stagesUrl, { headers });
  }

  getAllUsers(workspaceId: number): Observable<any> {
    const usersUrl = `${this.baseUrl}api/workspace/${workspaceId}/users/`;
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.authToken}`
    });
    return this.http.get<any>(usersUrl, { headers });
  }
  
}
