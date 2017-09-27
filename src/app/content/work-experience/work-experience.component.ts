import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  timelineItems = [
    {
      position: 'Frontend Engineer',
      employer: 'DERICON GmbH'
    },
    {
      position: 'Frontend Engineer',
      employer: 'DERICON GmbH'
    },
    {
      position: 'Frontend Engineer',
      employer: 'DERICON GmbH'
    },
    {
      position: 'Frontend Engineer',
      employer: 'DERICON GmbH'
    },
    {
      position: 'Frontend Engineer',
      employer: 'DERICON GmbH'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
