import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('element') element: ElementRef;

  constructor() {
  }


  ngOnInit(): void {
    $('body').scrollspy({ offset: 56 });
  }

  scrollSmooth(viewSelector: string) {
    if (viewSelector === '#home') {
      $('html').animate({
        scrollTop: $(viewSelector).offset().top
      });
    } else {
      $('html').animate({
        scrollTop: $(viewSelector).offset().top - 56
      });
    }


    window.location.hash = viewSelector;

    return false;
  }
}
