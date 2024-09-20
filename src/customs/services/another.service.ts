import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnotherService {
  constructor() {}
  anotherFunction() {
    alert('another service');
  }
}
