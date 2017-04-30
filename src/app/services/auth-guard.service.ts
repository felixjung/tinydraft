import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
 } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate  {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const { url } = state;
    return this.checkLogin(url);
  }

  checkLogin(url: string): Observable<boolean> {
    console.log('Checking auth...');
    return this.authService.isLoggedIn()
      .do(authenticated => {
        if (!authenticated) {
          console.log('User not logged in.');
          this.authService.redirectUrl = url;
          this.router.navigate(['']);
        }
      })
  }
}
