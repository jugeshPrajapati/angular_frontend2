import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../types/authResponse';
import { BehaviorSubject, Subject, catchError, throwError } from 'rxjs';
import { User } from '../types/user2';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth2Service {
  http: HttpClient = inject(HttpClient);
  user = new BehaviorSubject<User | null>(null);
  router: Router = inject(Router);
  private tokenExpiretimer: any;

  signup(email: string, password: string) {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEA2kXgc4OW5SeeQ7iH7gPcb2CEknxMp8',
        data
      )
      .pipe(
        catchError(this.handleError),
        tap((res) => {
          this.handleCreateUser(res);
        })
      );
  }

  login(email: string, password: string) {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDEA2kXgc4OW5SeeQ7iH7gPcb2CEknxMp8',
        data
      )
      .pipe(
        catchError(this.handleError),
        tap((res) => {
          this.handleCreateUser(res);
        })
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('user');

    if (this.tokenExpiretimer) {
      clearTimeout(this.tokenExpiretimer);
    }
    this.tokenExpiretimer = null;
  }

  autoLogin() {
    const userString = localStorage.getItem('user');

    const user = userString ? JSON.parse(userString) : null;

    if (!user) {
      return;
    }

    const loggedUser = new User(
      user.email,
      user.id,
      user._token,
      user._expiresIn
    );

    if (loggedUser.token) {
      this.user.next(loggedUser);
      const timerValue = user._expiresIn.getTime() - new Date().getTime();
      this.autoLogout(timerValue);
    }
  }

  autoLogout(expireTime: number) {
    this.tokenExpiretimer = setTimeout(() => {
      this.logout();
    }, expireTime);
  }

  private handleCreateUser(res: any) {
    const expiresInTs = new Date().getTime() + +res.expiresIn * 1000;
    const expiresIn = new Date(expiresInTs);
    const user = new User(res.email, res.localId, res.idToken, expiresIn);
    this.user.next(user);
    this.autoLogout(res.expiresIn * 1000);

    localStorage.setItem('user', JSON.stringify(user));
  }
  private handleError(err: any) {
    let errorMessage = 'An unknown error has occured';
    console.log(err);
    if (!err.error || !err.error.error) {
      return throwError(() => errorMessage);
    }
    switch (err.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists.';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'This operation is not allowed.';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'The email ID or Password is not correct.';
        break;
    }
    return throwError(() => errorMessage);
  }
}
