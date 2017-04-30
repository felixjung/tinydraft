import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  private user: firebase.User;
  // isLoggedIn = false;
  redirectUrl = '';

  constructor(
    private afAuth: AngularFireAuth
  ) {
    afAuth.authState.subscribe(user => {
      console.log('User: ', user);
      this.user = user;
    });
  }

  login(): firebase.Promise<any> {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider).then(
      user => {
        this.user = user;
        return true;
      },
      err => {
        console.log('An error occurred logging in.', err);
      }
    );
  }

  logout(): void {
    this.redirectUrl = '';
    debugger;
    this.afAuth.auth.signOut()
      .catch(err => {
        console.log('An error occured');
      })
  }

  isLoggedIn(): Observable<boolean> {
    return this.afAuth.authState
      .take(1)
      .map((user: firebase.User) => Boolean(user));
  }
}
