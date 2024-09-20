import { Injectable, inject } from '@angular/core';
import { UsersService } from './users.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  // isLogged: boolean = false;
  userService: UsersService = inject(UsersService);
  loggedIn = new BehaviorSubject<boolean>(false); // Initial value is false

  // This will allow other components to subscribe to changes in the login status
  // isAuthenticated$ = this.loggedIn.asObservable();
  login(email: string, password: string) {
    let user = this.userService.users.find((u) => {
      return u.email === email && u.password === password;
    });

    console.log(user, email, password, this.userService.users);
    if (user === undefined) {
      this.loggedIn.next(false);
    } else {
      this.loggedIn.next(true);
    }
    return user;
  }

  logout() {
    this.loggedIn.next(false);
  }

  // isAuthenticated() {
  //   return this.loggedIn.value; // Current value of login state
  // }
}
