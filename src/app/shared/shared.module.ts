import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressRingComponent } from './components/progress-ring/progress-ring.component';
import { JqueryCircleProgressComponent } from './components/jquery-circle-progress/jquery-circle-progress.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelineItemComponent } from './components/timeline/timeline-item/timeline-item.component';
import { ScrollSpyDirective } from './directives/scroll-spy/scroll-spy.directive';
import { BootstrapCollapsibleNavDirective } from './directives/bootstrap-collapsible-nav/bootstrap-collapsible-nav.directive';
import { SmoothScrollDirective } from './directives/smooth-scroll/smooth-scroll.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProgressRingComponent,
    JqueryCircleProgressComponent,
    TimelineComponent,
    TimelineItemComponent,
    ScrollSpyDirective,
    BootstrapCollapsibleNavDirective,
    SmoothScrollDirective
  ],
  exports: [
    ProgressRingComponent,
    JqueryCircleProgressComponent,
    TimelineComponent,
    TimelineItemComponent,
    ScrollSpyDirective,
    BootstrapCollapsibleNavDirective,
    SmoothScrollDirective
  ]
})
export class SharedModule { }
