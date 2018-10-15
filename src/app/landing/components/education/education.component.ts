import { Component, ElementRef, ViewChild } from '@angular/core';
import { educationalBackground } from '../../../core/store/init/educational-background.data';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @ViewChild('headline') headline: ElementRef;
  @ViewChild('timeline') timeline: ElementRef;

  timelineItems = educationalBackground;

  constructor() {
  }
}
