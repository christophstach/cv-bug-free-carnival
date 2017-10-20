import { Component, OnInit } from '@angular/core';
import { workExperience } from '../../store/init/work-experience.data';
import * as moment from 'moment';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  timelineItems = workExperience;

  constructor() {
  }

  ngOnInit() {
  }

  dateFormat(date: Date | string, format: string) {
    if (date instanceof Date) {
      return moment(date).format(format);
    } else {
      return date;
    }
  }
}
