import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';


export interface User {
  id: number;
  username: string;
  role: string; // 'admin', 'sub-admin or user' etc
  token: string; // jwt token
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User | any;
  isUserLoggedIn: boolean = false;
  userRole: string = '';
  isAuthenticated: boolean = false;

  public loginStatusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  public login(userName: string, password: string): Observable<any> {

    debugger 
    if (userName === 'admin' && password === 'admin') {
      this.isUserLoggedIn = true;
      this.userRole = 'admin';
    } else if (userName === 'subadmin' && password === 'subadmin') {
      this.isUserLoggedIn = true;
      this.userRole = 'subadmin';
    } else {
      this.isUserLoggedIn = true;
      this.userRole = 'user';
    }
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? 'true' : 'false');
    localStorage.setItem('userRole', this.userRole);
    this.loginStatusChanged.emit(this.isUserLoggedIn);

    return of(this.isUserLoggedIn).pipe(
      delay(100),
      tap(val => { 
        console.log('Is User Authentication successful: ' + val);
      })
    );
  }
  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }


  // logout() {
  //   // remove user from local storage to log user out
  //   localStorage.removeItem('currentUser');
  //   this.user = null;
  // }

  getCurrentUser(): User | null {
    const userJson = localStorage.getItem('currentUser');

    if (userJson) {
      return JSON.parse(userJson);
    }

    return null;
  }

  isAuthenticate() {
    return !!this.getCurrentUser();
  }

}
