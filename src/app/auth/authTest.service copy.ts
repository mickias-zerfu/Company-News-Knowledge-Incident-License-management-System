import { Injectable } from '@angular/core';

export enum UserRole {
  Admin = 'admin',
  SubAdmin = 'subadmin',
  User = 'user'
}

export interface User {
  id: string;
  username: string;
  role: UserRole;
}

export interface AuthState {
  user?: User;
  isAuthenticated: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {

  authState: AuthState = {
    isAuthenticated: false
  };

  constructor() {}

  login(credentials: {username: string, password: string}) {
    const user = this.validateCredentials(credentials);
    if (user) {
      this.authState = {
        user,
        isAuthenticated: true
      };
      this.saveToStorage(this.authState);
      return user;
    }
    return null;
  }

  private validateCredentials({username, password}:
  {username: string, password: string}): User | null {
    // validate logic
    return null;
  }

  logout() {
    this.authState = {
      isAuthenticated: false
    };
    this.saveToStorage(this.authState);
  }

  private saveToStorage(state: AuthState) {
    // save logic
  }

  private getFromStorage(): AuthState {
    // get logic
    return {} as AuthState;
  }

  isAuthenticated() {
    return this.authState.isAuthenticated;
  }

}
