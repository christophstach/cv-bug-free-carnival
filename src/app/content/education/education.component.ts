import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { educationalBackground } from '../../store/init/educational-background.data';
import * as moment from 'moment';

import { GlobalElementService } from '../../shared/services/global-element/global-element.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import { ScrollSpyService } from '../../shared/services/scroll-spy/scroll-spy.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  private animationClass = 'fadeIn';

  @ViewChild('headline') headline: ElementRef;
  @ViewChild('timeline') timeline: ElementRef;

  timelineItems = educationalBackground;

  constructor(private scrollSpyService: ScrollSpyService, private globalElementService: GlobalElementService) {
  }

  ngOnInit() {
    this.scrollSpyService.getObservable()
      .map(() => this.globalElementService.isInViewport('education', -57))
      .filter(isInViewport => isInViewport)
      .take(1)
      .delay(1000)
      .subscribe(() => {
        this.headline.nativeElement.classList.toggle('animated', true);
        this.headline.nativeElement.classList.toggle(this.animationClass, true);
        this.headline.nativeElement.classList.toggle('will-animate', false);

        this.timeline.nativeElement.classList.toggle('animated', true);
        this.timeline.nativeElement.classList.toggle(this.animationClass, true);
        this.timeline.nativeElement.classList.toggle('will-animate', false);
      });
  }

  dateFormat(date: Date | string, format: string) {
    if (date instanceof Date) {
      return moment(date).format(format);
    } else {
      return date;
    }
  }
}
