import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGaurdService implements CanActivate {
  islogged!: boolean;
  constructor(private authService: AuthService) {
    // Subscribe to the observable to reactively update the variable
    this.authService.loggedIn.subscribe((isLoggedIn) => {
      this.islogged = isLoggedIn;
    });
  }
  // authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if (this.islogged) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
