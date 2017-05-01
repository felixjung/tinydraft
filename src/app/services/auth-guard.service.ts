import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
 } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate  {

  constructor(
    private authService: AuthService,
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
          this.authService.authenticateForUrl(url);
        }
      });
  }
}
