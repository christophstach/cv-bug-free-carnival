import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent {
  @Input() inverted = false;
  @Input() title = '';
  @Input() subTitle = '';
  @Input() date: Date = new Date();
  @Input() badgeType = 'default';

  dateFormat(date: Date, format: string) {
    return moment(date).format(format);
  }

}
