import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://127.0.0.1:8000/api/tickets/';

  constructor(private http: HttpClient) { }
  // if there is no cover photo set a default image for cover photo.
  // please do change the string for some images.
  tickets(ticket_name: string, description: string, attachments: string, time_elapsed: string,
          avatar_icon: string, assignee: string, due_date: string, priority: string, filed_by_avatar_icon: string,
          filed_by: string, cover_photo: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = { ticket_name, description, attachments, time_elapsed,
                   avatar_icon, assignee, due_date, priority, filed_by_avatar_icon,
                   filed_by, cover_photo
     };
    return this.http.post<any>(`${this.apiUrl}create/`, body, { headers });
  }
}
