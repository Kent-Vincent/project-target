import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/commons/services/users/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private $auth: AuthService
  ) { }

  private isUnAuthorized(error: HttpErrorResponse): boolean {
    return !!error.status && error.status === 401
  }

  intercept(r: HttpRequest<any>, n: HttpHandler): Observable <HttpEvent <any>> {
    const token = this.$auth.token;

    const req = r.clone({
      headers: r.headers.set('Authorization', token ? `Token ${token}`: "")
    });
    return n.handle(req).pipe(
      catchError((error, caught) => {
        return throwError(()=> error);
      }),
      tap(resp=>resp),
    );
  }
}
