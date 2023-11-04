import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) { }

  /*
  login(username: string, password: string) {
    return this.http.post('/login', { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        // && user.token
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.user = user;
        }
        return user;
      }));
  }
  */
  /*
    login(userName: string, password: string): Observable<any> {
      this.isUserLoggedIn = userName == 'admin' && password == 'admin';
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
      localStorage.setItem('userRole', 'admin');

      return of(this.isUserLoggedIn).pipe(
        delay(1000),
        tap(val => {
          console.log("Is User Authentication is successful: " + val);
        })
      );
    }
    */
  // Modified method
  public login(userName: string, password: string): Observable<any> {
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

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
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
