import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams,
  HttpInterceptorFn,
} from '@angular/common/http';
import { exhaustMap, take, tap } from 'rxjs/operators';
import { Auth2Service } from './auth2.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(Auth2Service);
  return authService.user.pipe(
    take(1),
    exhaustMap((user) => {
      if (!user) {
        return next(req);
      }
      const modifiedReq = req.clone({
        params: user.token
          ? new HttpParams().set('auth', user.token)
          : req.params,
      });

      return next(modifiedReq);
    })
  );
};
