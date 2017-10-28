import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressRingComponent } from './components/progress-ring/progress-ring.component';
import { JqueryCircleProgressComponent } from './components/jquery-circle-progress/jquery-circle-progress.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelineItemComponent } from './components/timeline/timeline-item/timeline-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProgressRingComponent,
    JqueryCircleProgressComponent,
    TimelineComponent,
    TimelineItemComponent
  ],
  exports: [
    ProgressRingComponent,
    JqueryCircleProgressComponent,
    TimelineComponent,
    TimelineItemComponent
  ]
})
export class SharedModule { }
