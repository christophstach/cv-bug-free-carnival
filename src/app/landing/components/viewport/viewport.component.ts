import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.scss']
})
export class ViewportComponent implements AfterViewInit {
  private offset = 55;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private scrollSpyService: ScrollSpyService
  ) {
  }

  ngAfterViewInit() {
    this.scrollSpyService.reset();

    if (isPlatformBrowser(this.platformId)) {
      if (window.location.hash && window.location.hash !== '#') {
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
