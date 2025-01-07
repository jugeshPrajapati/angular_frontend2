import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Auth2Service } from '../services/auth2.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
export const authGuard: CanActivateFn = (
  route,
  state
):
  | boolean
  | UrlTree
  | Promise<boolean | UrlTree>
  | Observable<boolean | UrlTree> => {
  const authService = inject(Auth2Service);
  const routes = inject(Router);

  return authService.user.pipe(
    take(1),
    map((user) => {
      const loggedIn = user ? true : false;

      if (loggedIn) {
        return true;
      } else {
        return routes.createUrlTree(['/login']);
      }
    })
  );
};
