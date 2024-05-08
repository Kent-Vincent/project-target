import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';
import { API_WORKSPACE_CREATE, API_WORKSPACE_ID, API_WORKSPACE_SPECIFIC_ID } from '../constants/api.constant';
import { Workspace } from '../models/workspace.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  constructor(private http: HttpClient, private authTokenService: AuthTokenService) { }

  authToken = this.authTokenService.getAuthToken();

  getWorkspaces(): Observable<{ name: string, ID: number }[]> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.authToken}`
    });
    return this.http.get<any[]>(API_WORKSPACE_ID, { headers: headers }).pipe(
      map(workspaces => workspaces.map(workspace => ({
        name: workspace.workspace_name,
        ID: workspace.workspace_ID
      }))),
      catchError(error => {
        console.error('Error fetching workspaces:', error);
        throw error;
      })
    );
  }

  getWorkspaceByID(workspaceID: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.authToken}`
    });
    return this.http.get<any>(`${API_WORKSPACE_SPECIFIC_ID}${workspaceID}`, { headers: headers });
  }

  createWorkspace(data:Workspace|FormData) {
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.authToken}`
    })
    return this.http.post<any>(API_WORKSPACE_CREATE, data, {headers: headers});
  }
}
