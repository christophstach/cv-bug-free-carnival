import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/empty';

@Injectable()
export class ScrollSpyService {
  private windowScroll$: Observable<Event>;

  constructor() {
    if (typeof window !== 'undefined') {
      this.windowScroll$ = Observable.fromEvent(window, 'scroll');

      setTimeout(() => {
        window.scroll(0, 1);
        window.scroll(0, 0);
      });
    } else {
      this.windowScroll$ = Observable.empty();
    }
  }

  getObservable(): Observable<Event> {
    return this.windowScroll$;
  }

}
