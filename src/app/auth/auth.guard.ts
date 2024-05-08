import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private auth: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var userInfo: any =  localStorage.getItem('access');
      var userRole: any =  localStorage.getItem('roleId');
    var token = localStorage.getItem('token')
    //console.log(userInfo)
    //debugger
    //if (!userInfo || !token) {
    //  this.router.navigate(['/login']);
    //  return false;
    //}

    if (userRole == 1 || userRole == 2) {
      if (userRole == 2) {
        return true;
      }
      else if (userRole == 1) {
        const accessCheck = (access: number) => {
          const data = userInfo.find((element: any) => Number(element) == access);
          if (data) {
            return true;
          } else {
            this.accessDenied();
            return false;
          }
        };

        if (state.url.search('resources/status') !== -1 || state.url.search('dashboard') !== -1) {
          return true;
        }
        if (state.url.search('news') !== -1 || state.url.search('managenews') !== -1) {
          return accessCheck(1);
        } else if (state.url.search('knowledges') !== -1 || state.url.search('knowledge') !== -1) {
          return accessCheck(2);
        } else if (state.url.search('incidents') !== -1 || state.url.search('incident') !== -1) {
          return accessCheck(3);
        } else if (state.url.search('files') !== -1 || state.url.search('managefiles') !== -1) {
          return accessCheck(4);
        } else if (state.url.search('knowledges') !== -1 || state.url.search('knowledge') !== -1) {
          return accessCheck(4);
        } else if (state.url.search('licenses') !== -1) {
          return accessCheck(5);
        } else if (state.url.search('downtime') !== -1) {
          return accessCheck(6);
        } else if (state.url.search('checklist') !== -1) {
          return accessCheck(7);
        } else if (state.url.search('users') !== -1) {
          return accessCheck(8);
        } else {
          return false;
        }
      }
    }
    else if (userRole == 0) {

      if (state.url.search('news') !== -1) {
        return true;
      }
      else if (state.url.search('files') !== -1) {
        return true;
      }
    }
    else {
      return false;
    }
    return false;
  }

  accessDenied() {
    this.router.navigate(['/access-denied']);
    return false;
  }
}
