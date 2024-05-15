import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tickets } from '../models/tickets.model';
import { API_CREATE_STAGE } from '../constants/api.constant';
import { AuthTokenService } from './auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient, private authTokenService: AuthTokenService) { }

  authToken = this.authTokenService.getAuthToken();

  createTicket(workspaceID: number): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.authToken}`
    });
    return this.http.get<any[]>(`${API_CREATE_STAGE}${workspaceID}`, { headers: headers });
  }
}
