import { Component, OnInit } from '@angular/core';
import { educationalBackground } from '../../store/init/educational-background.data';
import * as moment from 'moment';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timelineItems = educationalBackground;

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
