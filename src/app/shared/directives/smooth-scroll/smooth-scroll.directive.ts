import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
  @Input('appSmoothScroll') scrollTo: string;
  @Input('appSmoothScrollOffset') offset = 56;

  @HostListener('click', ['$event'])
  click(event: MouseEvent) {
    if (window && document && document.querySelector && window.scroll) {
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
    }
  }
}
