import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { GlobalElementService } from '../../../core/services/global-element.service';

@Directive({
  selector: '[appGlobalElement]'
})
export class GlobalElementDirective implements OnInit, OnDestroy {
  @Input('appGlobalElement') elementId;

  constructor(private element: ElementRef, private globalElementService: GlobalElementService) {
  }


  ngOnInit() {
    this.globalElementService.setElement(this.elementId, this.element);
  }

  ngOnDestroy() {
  }
}
