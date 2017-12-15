import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {


  constructor(private scrollSpyService: ScrollSpyService) {
  }

  ngAfterViewInit() {
    this.scrollSpyService.reset();
  }
}
