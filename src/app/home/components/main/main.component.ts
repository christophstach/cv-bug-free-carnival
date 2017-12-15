import { AfterViewInit, Component } from '@angular/core';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  private offset = 55;

  constructor(private scrollSpyService: ScrollSpyService) {
  }

  ngAfterViewInit() {
    this.scrollSpyService.reset();

    if (window) {
      if (window.location.hash) {
        if (window.location.hash !== '#') {
          const element = document.querySelector(window.location.hash) as HTMLElement;
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
}
