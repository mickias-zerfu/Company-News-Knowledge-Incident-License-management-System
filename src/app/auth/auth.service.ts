import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


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
  public isLoggedInSubject: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.baseUrl;
    this.isLoggedInSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  }
  public get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
  public login(userName: string, password: string): Observable<any> {
    const user = {
      UserName: userName,
      Password: password
    };
    if (userName.includes('@')) {
      return this.http.post(`${this.apiUrl}admin/login`, user);
    }
    else {
      return this.http.post<any>(this.apiUrl + 'user/login', user);
    }
  }
  public logout(): void {
    localStorage.clear();
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  } 
}
