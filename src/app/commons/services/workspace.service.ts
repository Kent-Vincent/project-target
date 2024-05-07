import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';
import { API_WORKSPACE_CREATE, API_WORKSPACE_ID } from '../constants/api.constant';
import { Workspace } from '../models/workspace.model';
import { CurrentUserService } from './current-user.service';

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

  createWorkspace(data:Workspace|FormData) {
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.authToken}`
    })
    return this.http.post<any>(API_WORKSPACE_CREATE, data, {headers: headers});
  }

  // getAllUsers(workspaceId: number): Observable<any> {
  //   const usersUrl = `${this.baseUrl}api/workspace/${workspaceId}/users/`;
  //   const headers = new HttpHeaders({
  //     'Authorization': `Token ${this.authToken}`
  //   });
  //   return this.http.get<any>(usersUrl, { headers });
  // }
  
}
