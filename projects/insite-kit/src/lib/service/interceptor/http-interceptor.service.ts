import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasicHttpInterceptorService implements HttpInterceptor {
  /**
   * Http interceptor for attaching user authentication token to the
   * request that are sent out. This will only be called on endpoints
   * that need authenticated.
   *
   * @param req The request that is meant to be sent to the api.
   * @param next The handler that will process the request.
   * @returns an Observable of the http event with the authorization token.
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer: ${localStorage.getItem('token')}`,
        },
      });
    }
    return next.handle(req);
  }
}
