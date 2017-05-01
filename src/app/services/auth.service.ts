import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  private user: firebase.User;
  private redirectUrl = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  login(): firebase.Promise<any> {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider).then(
      (user: firebase.User) => {
        this.user = user;
        this.router.navigate(['drafts']);
      },
      err => {
        console.log('An error occurred logging in.', err);
      }
    );
  }

  logout(): void {
    this.redirectUrl = '';
    this.afAuth.auth.signOut()
      .catch(err => {
        console.log('An error occured');
      })
  }

  authenticateForUrl(url) {
    this.redirectUrl = url;
    this.router.navigate(['']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.afAuth.authState
      .take(1)
      .map((user: firebase.User) => Boolean(user));
  }
}
