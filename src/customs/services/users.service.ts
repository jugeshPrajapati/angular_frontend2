import { Injectable } from '@angular/core';
import { User } from '../types/user';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  users: User[] = [
    { id: 1, name: 'jugesh', email: 'jugesh@gmial.com', password: 'jugesh' },
    { id: 2, name: 'jugesh2', email: 'jugesh2@gmial.com', password: 'jugesh2' },
  ];
}
