import { Injectable } from '@angular/core';
import { AnotherService } from './another.service';
/* an instance of a service class inside a component is not a good practice 
because it makes component class tightly coupled with service class. 
Instead, we can ask angular to inject an instance of the service class 
which we want to use in our component class. This can be achieved using dependency injection*/
@Injectable({
  providedIn: 'root',
})
export class OnsubscribeService {
  constructor(private anotherService: AnotherService) {}
  OnSubscribeClicked(arg: string) {
    alert('thanks for subscription');
    this.anotherService.anotherFunction();
  }
}
