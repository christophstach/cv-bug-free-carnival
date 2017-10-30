import { Injectable } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ScrollSpyService {
  private windowScroll$: Observable<Event>;

  constructor() {
    this.windowScroll$ = Observable.fromEvent(window, 'scroll');
    this.windowScroll$.subscribe((data) => {
      console.log(data);
    });
  }

  getObservable(): Observable<Event> {
    return this.windowScroll$;
  }

}
