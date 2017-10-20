import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  @ViewChild('itemElement') itemElement: ElementRef;
  @Input() inverted = false;
  @Input() title = '';
  @Input() subTitle = '';
  @Input() date: Date = new Date();
  @Input() badgeType = 'default';

  constructor() {
  }

  ngOnInit() {

    let yetActivated = false;

    $(window).scroll((event) => {
      if (($(window).scrollTop() + $(window).height()) >= $(this.itemElement.nativeElement).offset().top && !yetActivated) {
        yetActivated = true;

        setTimeout(() => {
          if (this.inverted) {
            $(this.itemElement.nativeElement).css('left', 0);
          } else {
            $(this.itemElement.nativeElement).css('left', 0);
          }

        }, 500);
      }
    });

  }

  dateFormat(date: Date, format: string) {
    return moment(date).format(format);
  }

}
