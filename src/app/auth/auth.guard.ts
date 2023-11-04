import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, User } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';
    const userRole = localStorage.getItem('userRole');

    if (isUserLoggedIn) {
      if (route.data['roles'] && route.data['roles'].indexOf(userRole) === -1) {
        // User does not have the required role to access the route
        this.router.navigate(['/unauthorized']);
        return false;
      }
      // User is logged in and has the required role
      return true;
    }

    // User is not logged in, redirect to the login page
    this.router.navigate(['/login']);
    return false;
  }

}

/*
    // Get the expected role from route data
    const expectedRole = route.data['expectedRole'];

    // Get current user from AuthService
    const currentUser = this.auth.getCurrentUser();

    // Check if user is authenticated
    if (!this.auth.isAuthenticate()) {
      this.router.navigate(['login']);
      return false;
    }

    // Check if route has role requirement
    if (expectedRole) {

      // User's role should match route's expected role
      if (currentUser) {
        if (currentUser.role === expectedRole) {
          return true;

          // User's role doesn't match, redirect to unauthorized
        } else {
          this.router.navigate(['unauthorized']);
          return false;
        }
      }
      else {
        return true;
      }



      // Route has no role requirement, allow access
    }
    else {
      return true;
    }

    */
