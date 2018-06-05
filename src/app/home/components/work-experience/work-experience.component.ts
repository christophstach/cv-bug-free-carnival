import { Component, ElementRef, ViewChild } from '@angular/core';
import { workExperience } from '../../../core/store/init/work-experience.data';


@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  @ViewChild('headline') headline: ElementRef;
  @ViewChild('timeline') timeline: ElementRef;

  timelineItems = workExperience;

  constructor() {
  }
}
