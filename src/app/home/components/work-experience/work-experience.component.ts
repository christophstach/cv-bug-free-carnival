import * as moment from 'moment';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { workExperience } from '../../../core/store/init/work-experience.data';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';
import { delay, filter, take } from 'rxjs/operators';


@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  private animationClass = 'fadeIn';

  @ViewChild('headline') headline: ElementRef;
  @ViewChild('timeline') timeline: ElementRef;

  timelineItems = workExperience;

  constructor(private scrollSpyService: ScrollSpyService) {
  }

  ngOnInit() {
    this.scrollSpyService.getScrollSpy().pipe(
      filter((data) => data['work-experience']),
      take(1),
      delay(1000)
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
