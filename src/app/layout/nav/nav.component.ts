import { Component, OnInit } from '@angular/core';
import 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  scrollSmooth(viewSelector: string) {
    /*
    $('html').animate({
      scrollTop: $(viewSelector).offset().top + 56
    });
    */

    $('html').animate({
      scrollTop: $(viewSelector).offset().top
    });

    window.location.hash = viewSelector;

    return false;
  }
}
