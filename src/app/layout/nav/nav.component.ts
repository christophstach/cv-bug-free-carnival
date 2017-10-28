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
    $('body').scrollspy({ offset: 57 });
  }
}
