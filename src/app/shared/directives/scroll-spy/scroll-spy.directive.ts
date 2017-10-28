import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }


  ngOnInit() {
  }

}
