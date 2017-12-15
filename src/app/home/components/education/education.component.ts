import * as moment from 'moment';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { educationalBackground } from '../../../core/store/init/educational-background.data';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';


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

  constructor(private scrollSpyService: ScrollSpyService) {
  }

  ngOnInit() {
    this.scrollSpyService.getScrollSpy()
      .filter((data) => data['education'])
      .take(1)
      .delay(1000)
      .subscribe(() => {
        this.headline.nativeElement.classList.toggle('animated', true);
        this.headline.nativeElement.classList.toggle(this.animationClass, true);
        this.headline.nativeElement.classList.toggle('will-animate', false);

        this.timeline.nativeElement.classList.toggle('animated', true);
        this.timeline.nativeElement.classList.toggle(this.animationClass, true);
        this.timeline.nativeElement.classList.toggle('will-animate', false);

        this.scrollSpyService.reset();
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
