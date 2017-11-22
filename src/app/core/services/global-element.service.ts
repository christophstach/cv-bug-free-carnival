import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class GlobalElementService {
  private elements: ElementRef[] = [];

  constructor() {
  }

  setElement(key: string, element: ElementRef) {
    this.elements[key] = element;
  }

  getElement(key: string): ElementRef {
    return this.elements[key];
  }

  isInViewport(key: string, offset = 0): boolean {
    if (!this.elements[key]) {
      return false;
    } else {
      const rect = this.elements[key].nativeElement.getBoundingClientRect();
      const html = document.documentElement;
      const viewport = {
        top: -offset,
        left: -offset,
        right: html.clientWidth + offset,
        bottom: html.clientHeight + offset
      };

      return (
        rect.right >= viewport.left &&
        rect.left <= viewport.right &&
        rect.bottom >= viewport.top &&
        rect.top <= viewport.bottom
      );
    }

  }

}
