import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { educationalBackground } from '../../store/init/educational-background.data';
import * as moment from 'moment';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  private animationClass = 'fadeIn';

  @ViewChild('headline') headline: ElementRef;

  timelineItems = educationalBackground;

  constructor() {
  }

  ngOnInit() {
    let yetActivated = false;

    $(window).scroll((event) => {
      if (($(window).scrollTop() + $(window).height()) >= $(this.headline.nativeElement).offset().top && !yetActivated) {
        yetActivated = true;

        setTimeout(() => {
          this.headline.nativeElement.classList.toggle('animated', true);
          this.headline.nativeElement.classList.toggle(this.animationClass, true);
          this.headline.nativeElement.classList.toggle('will-animate', false);
        }, 500);
      }
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
