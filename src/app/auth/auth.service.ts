import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


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


  private apiUrl: string; 

  constructor(private http: HttpClient) {
    this.apiUrl = environment.baseUrl + 'user/login';
  }

  public login(userName: string, password: string): Observable<any> {

    if (userName === 'admin' && password === 'admin') {
      this.setUserLoggedIn(true, 'admin');
      this.emitLoginStatus();
      return of(this.isUserLoggedIn).pipe(
        delay(100),
        tap(val => {
          console.log('Is User Authentication successful: ' + val);
        })
      );
    }
    else if (userName === 'subadmin' && password === 'subadmin') {
      this.setUserLoggedIn(true, 'subadmin');
      this.emitLoginStatus();
      return of(this.isUserLoggedIn).pipe(
        delay(100),
        tap(val => {
          console.log('Is User Authentication successful: ' + val);
        })
      );
    } else {
      const user = {
        UserName: userName,
        Password: password
      };
      return this.http.post<any>(this.apiUrl, user).pipe(
        map(result => {
          if (result) {
            this.setUserLoggedIn(true, 'user');
            this.emitLoginStatus();
            console.log('Is User Authentication successful: true');
          } else {
            this.setUserLoggedIn(false, '');
            console.log('Is User Authentication successful: false');
          }
          return this.isUserLoggedIn;
        }),
        delay(100)
      );
    } 
  }
  public logout(): void {
    this.setUserLoggedIn(false, '');
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('userRole');
  }

  getCurrentUser(): User | null {
    const userJson = localStorage.getItem('userRole');

    if (userJson) {
      return JSON.parse(userJson);
    }
    return null;
  }

  public isAuthenticate(): boolean {
    const storeData = localStorage.getItem('isUserLoggedIn');
    const roleData = localStorage.getItem('userRole');

    console.log('StoreData Auth isAuthenticate: ' + storeData);
    console.log('roleData: isAuthenticate: ' + roleData);

    if (storeData === 'true') {
      this.emitLoginStatus();
      return true;
    }

    return false;
  }

  private setUserLoggedIn(isLoggedIn: boolean, role: string): void {
    this.isUserLoggedIn = isLoggedIn;
    this.userRole = role;
    localStorage.setItem('isUserLoggedIn', isLoggedIn ? 'true' : 'false');
    localStorage.setItem('userRole', role);
  }

  private emitLoginStatus(): void {
    this.loginStatusChanged.emit(this.isUserLoggedIn);
  }

}
