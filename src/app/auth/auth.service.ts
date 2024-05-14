import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, ReplaySubject, catchError, map, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';


export interface User1 {
  id: number;
  username: string;
  role: string; // 'admin', 'sub-admin or user' etc
  token: string; // jwt token
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;
  private apiUrl: string;
  public isAdminSubject = new BehaviorSubject<boolean>(false);
  public currentUserSource = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.baseUrl;
    this.isAdminSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  }
  loadDomainUser(token: string | null) {
    if (token == null) {
      this.currentUserSource.next(null);
      return of(null);
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get<User>(this.apiUrl + 'user/getDomainUser', { headers }).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
          return user;
        } else {
          return null;
        }
      })
    )
  }
  loadCurrentUser(token: string | null) {
    if (token == null) {
      this.currentUserSource.next(null);
      return of(null);
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(this.apiUrl + 'admin/getSingleSubAdmin', { headers }).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
          return user;
        } else {
          return null;
        }
      })
    )
  }
  public get isAdmin$(): Observable<boolean> {
    return this.isAdminSubject.asObservable();
  }
  public login(userName: string, password: string): Observable<any> {

    if (userName.includes('@')) {
      const admin = {
        Email: userName,
        Password: password
      };
      return this.http.post<any>(`${this.apiUrl}admin/login`, admin)
        .pipe(
          map(user => {
            return user;
            //localStorage.setItem('isUserLoggedIn', 'true');
            //localStorage.setItem('token', user.token);
            //localStorage.setItem('displayName', user.displayName);
            //localStorage.setItem('status', user.status);
            //localStorage.setItem('roleId', user.roleId);
            //localStorage.setItem('access', user.access);
            //this.currentUserSource.next(user);
            //this.isAdminSubject.next(true);
          }),
          catchError(error => {
            return throwError(error);
          })
        );
    }
    else {
      const user = {
        UserName: userName,
        Password: password
      };
      return this.http.post<any>(this.apiUrl + 'user/domainlogin', user).pipe(
        map(user => {
          return user;
          //if (user.token == null) {
          //  console.log("wrong credentials")
          //  this.currentUserSource.next(null);
          //} else {
          //this.currentUserSource.next(user);
          }),
          catchError(error => {
            return throwError(error);
          }) );
    }
  }
  public logout(): void {
    localStorage.clear();
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.isAdminSubject.next(false);
    this.router.navigateByUrl('/');
  }
  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    const role = localStorage.getItem('roleId');

    if (role === '1' || role === '2') {
      return true;
    }

    return false;

  }
}
