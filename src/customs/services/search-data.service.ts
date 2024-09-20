import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  constructor() {}
  // make component interaction between two non-related component simpler and straight forward
  OnSearchClicked: EventEmitter<string> = new EventEmitter<string>();
  //this will emit data and can be comsume in which component subscribe it
  OnItemSearch(searchText: string) {
    this.OnSearchClicked.emit(searchText);
  }

  OnSearchClicked2 = new Subject<string>();
  OnSearchClicked3 = new BehaviorSubject<string>('hello');
  //BehaviorSubject, it take initial value
  //A replay subject can emit old values to all the new subscribers OnSearchClicked2 = new ReplaySubject<string>();
  //AsyncSubject() it only return last value when completer method() called
  //A Subject is also an observable but a subject can emit the same value to multiple subscribers
  //subject broadcast the value and observable unicast the value
  OnItemSearch2(searchText: string) {
    this.OnSearchClicked.next(searchText);
  }
}
