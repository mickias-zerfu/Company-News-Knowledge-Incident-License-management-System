import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, ReplaySubject, map, of } from 'rxjs';
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
  private currentUserSource = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.baseUrl;
    this.isAdminSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  }
  loadCurrentUser(token: string | null) {
    if (token == null) {
      this.currentUserSource.next(null);
      return of(null);
    }
    //let headers = new HttpHeaders();
    //headers = headers.set('Authorization', `Bearer ${token}`);, { headers }
    return this.http.get<User>(this.apiUrl + 'admin/getSingleSubAdmin').pipe(
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
            localStorage.setItem('isUserLoggedIn', 'true');
            localStorage.setItem('token', user.token);
            localStorage.setItem('displayName', user.displayName);
            localStorage.setItem('status', user.status);
            localStorage.setItem('roleId', user.roleId);
            localStorage.setItem('access', user.access);
            this.currentUserSource.next(user);
            this.isAdminSubject.next(true);
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
          localStorage.setItem('isUserLoggedIn', 'true');
          localStorage.setItem('token', user.token);
          localStorage.setItem('displayName', user.displayName);
          localStorage.setItem('status', user.status);
          localStorage.setItem('roleId', user.roleId);
          this.currentUserSource.next(user);
        }));
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
    return !!localStorage.getItem('token');
  }
}
