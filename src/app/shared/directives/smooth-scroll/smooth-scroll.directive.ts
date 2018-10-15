import { isPlatformBrowser } from '@angular/common';
import { Directive, HostListener, Inject, Input, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
  @Input() appSmoothScroll: string;
  @Input() appSmoothScrollOffset = 55;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    if (isPlatformBrowser(this.platformId)) {
      event.preventDefault();

      if (this.appSmoothScroll !== '#') {
        const element = document.querySelector(this.appSmoothScroll) as HTMLElement;
        const top = element.offsetTop;

        this.scroll(top - this.appSmoothScrollOffset);
      } else {
        this.scroll(0);
      }

      if (window.history.pushState) {
        window.history.pushState(null, null, this.appSmoothScroll);
      } else {
        window.location.hash = this.appSmoothScroll;
      }
    }
  }

  private scroll(value: number) {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({
        top: value,
        behavior: 'smooth'
      });
    }
  }
}
