import { AfterViewInit, Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      window.scroll(0, 1);
      window.scroll(0, 0);
    }
  }
}
