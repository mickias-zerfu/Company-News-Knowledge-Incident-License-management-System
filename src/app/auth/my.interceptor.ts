import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastService } from "../services/toast.service";

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private router: Router,
    private toastrService: ToastService) { }

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
                      this.toastrService.showError("You are not authorized, please log in", 'close', 2000)
                        this.router.navigateByUrl('/user/login');
                    } else if (err.status === 403) {
                      // Redirect to access-denied route
                      this.toastrService.showInfo("You Do not have This level of Authorization", 'close', 4000)
                      this.router.navigate(['/access-denied']);
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
