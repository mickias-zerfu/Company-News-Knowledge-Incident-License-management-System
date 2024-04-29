import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token') != null) {
            const token = localStorage.getItem('token');
            // if the token is  stored in localstorage add it to http header
            const headers = new HttpHeaders().set("authentication", `Bearer ${token}`);
            //clone http to the custom AuthRequest and send it to the server
            const AuthRequest = request.clone({ headers: headers });
            return next.handle(AuthRequest).pipe(
                // catchError((err: HttpErrorResponse) => {
                //     if (err.status == 401) {
                //         localStorage.clear()
                //         this.router.navigate(['/login']);
                //     } else {
                //         return throwError(err);
                //     }
                // }),
                tap(event => {
                    if (event instanceof HttpResponse) {
                        // console.log(event.headers.get('token'))
                        if (event.headers.get('token')) {
                            // localStorage.setItem('token', event.headers.get('token'))
                        }
                        if (event['status'] == 401) {
                            localStorage.clear()
                            this.router.navigate(['/login']);
                        }
                    }
                    return event;
                }))
        } else {
            return next.handle(request);
        }
    }
}


