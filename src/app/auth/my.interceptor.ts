import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('token'); 

        if (token != null) {
          //const headers = new HttpHeaders().set("authentication", "Bearer" + " " + token);
          const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
            const AuthRequest = request.clone({ headers: headers });

            return next.handle(AuthRequest).pipe(
                catchError((err: HttpErrorResponse) => {
                    if (err.status == 401) {
                        localStorage.clear();
                        this.router.navigate(['/home']);
                    }
                    return throwError(err);
                }),
              tap(event => {
                if (event instanceof HttpResponse) {
                  if (event.headers.get('token')) {
                    localStorage.setItem('token', event.headers.get('token') as string);
                  }
                  if (event['status'] == 401) {
                    localStorage.clear();
                    this.router.navigate(['/home']);
                  }
                }
                return event;
              })            );
        } else {
            return next.handle(request);
        }
    }
}
