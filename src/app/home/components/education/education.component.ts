import * as moment from 'moment';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { educationalBackground } from '../../../core/store/init/educational-background.data';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';
import { delay, filter, take } from 'rxjs/operators';


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
    this.scrollSpyService.getScrollSpy().pipe(
      filter((data) => data['education']),
      take(1),
      delay(1000),
    ).subscribe(() => {
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
