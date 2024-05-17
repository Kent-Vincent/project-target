import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tickets } from '../models/tickets.model';
import { API_CREATE_STAGE, API_CREATE_TICKET } from '../constants/api.constant';
import { AuthTokenService } from './auth-token.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient, private authTokenService: AuthTokenService) { }

  authToken = this.authTokenService.getAuthToken();

  createTicket(data: Tickets | FormData){
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.authToken}`
    });
    console.log(data);
    return this.http.post<any>(API_CREATE_TICKET, data, { headers: headers });
  }
}
