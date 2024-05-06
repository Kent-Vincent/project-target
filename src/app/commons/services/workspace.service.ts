import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';
import { API_WORKSPACE_ID } from '../constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  constructor(private http: HttpClient, private authTokenService: AuthTokenService) { }

  authToken = this.authTokenService.getAuthToken();

  getWorkspaceName(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.authToken}`
    });
    return this.http.get<any>(API_WORKSPACE_ID, { headers: headers});
  }

  // getAllUsers(workspaceId: number): Observable<any> {
  //   const usersUrl = `${this.baseUrl}api/workspace/${workspaceId}/users/`;
  //   const headers = new HttpHeaders({
  //     'Authorization': `Token ${this.authToken}`
  //   });
  //   return this.http.get<any>(usersUrl, { headers });
  // }
  
}
