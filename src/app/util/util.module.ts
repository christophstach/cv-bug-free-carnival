import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressRingComponent } from './progress-ring/progress-ring.component';
import { JqueryCircleProgressComponent } from './jquery-circle-progress/jquery-circle-progress.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineItemComponent } from './timeline/timeline-item/timeline-item.component';

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
export class UtilModule { }
