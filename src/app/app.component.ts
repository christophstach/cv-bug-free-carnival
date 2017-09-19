/// <reference path="jquery/jquery.d.ts" />

import { AfterViewInit, Component } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    $('[data-spy="scroll"]').each(() => {
      // const $spy = $(this).scrollspy('refresh');
    });
  }
}
