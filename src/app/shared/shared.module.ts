import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCircleComponent } from './components/progress-circle/progress-circle.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelineItemComponent } from './components/timeline/timeline-item/timeline-item.component';
import { BootstrapCollapsibleNavDirective } from './directives/bootstrap-collapsible-nav/bootstrap-collapsible-nav.directive';
import { SmoothScrollDirective } from './directives/smooth-scroll/smooth-scroll.directive';
import { GlobalElementDirective } from './directives/global-element/global-element.directive';
import { ProgressCircleNewComponent } from './components/progress-circle-new/progress-circle-new.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProgressCircleComponent,
    ProgressCircleNewComponent,
    TimelineComponent,
    TimelineItemComponent,
    BootstrapCollapsibleNavDirective,
    SmoothScrollDirective,
    GlobalElementDirective
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ProgressCircleComponent,
    ProgressCircleNewComponent,
    TimelineComponent,
    TimelineItemComponent,
    BootstrapCollapsibleNavDirective,
    SmoothScrollDirective,
    GlobalElementDirective
  ]
})
export class SharedModule {
}
