import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
  @Input('appSmoothScroll') scrollTo: string;
  @Input('appSmoothScrollOffset') offset = 55;

  @HostListener('click', ['$event'])
  onClick(event) {
    if (typeof window !== 'undefined') {
      event.preventDefault();

      if (this.scrollTo !== '#') {
        const element = document.querySelector(this.scrollTo) as HTMLElement;
        const top = element.offsetTop;

        window.scroll({
          top: top - this.offset,
          behavior: 'smooth'
        });
      } else {
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
      }

      if (window.history.pushState) {
        window.history.pushState(null, null, this.scrollTo);
      } else {
        window.location.hash = this.scrollTo;
      }
    }
  }
}
