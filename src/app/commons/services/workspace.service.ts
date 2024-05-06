import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  private baseUrl = 'http://10.0.254.20:8000/'
  
  private workspacesUrl = this.baseUrl + 'api/workspace/current/workspace';
  constructor(private http: HttpClient, private authTokenService: AuthTokenService) { }

  authToken = this.authTokenService.getAuthToken();

  getWorkspaceName(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.authToken}`
    });
    return this.http.get<any>(this.workspacesUrl, { headers });
  }

  getAllUsers(workspaceId: number): Observable<any> {
    const usersUrl = `${this.baseUrl}api/workspace/${workspaceId}/users/`;
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.authToken}`
    });
    return this.http.get<any>(usersUrl, { headers });
  }
  
}
