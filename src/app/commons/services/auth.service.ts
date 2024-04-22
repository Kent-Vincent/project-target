import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url: string = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(this.api_url + `api/users/login`, { email, password }, httpOptions)
      .pipe(
        map(response  => {
          if (response && response.token) {
            localStorage.setItem("currentUser", JSON.stringify(response));
          }
          return response;
        }),
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}