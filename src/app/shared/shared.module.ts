import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgressCircleNewComponent } from './components/progress-circle-new/progress-circle-new.component';
import { ProgressCircleComponent } from './components/progress-circle/progress-circle.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelineItemComponent } from './components/timeline/timeline-item/timeline-item.component';
import { BootstrapCollapsibleNavDirective } from './directives/bootstrap-collapsible-nav/bootstrap-collapsible-nav.directive';
import { SmoothScrollDirective } from './directives/smooth-scroll/smooth-scroll.directive';
import { MomentPipe } from './pipes/moment.pipe';
import { SocialNavComponent } from './components/social-nav/social-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BootstrapCollapsibleNavDirective,
    SmoothScrollDirective,
    MomentPipe,
    ProgressCircleNewComponent,
    ProgressCircleComponent,
    TimelineComponent,
    TimelineItemComponent,
    SocialNavComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    BootstrapCollapsibleNavDirective,
    SmoothScrollDirective,
    MomentPipe,
    ProgressCircleNewComponent,
    ProgressCircleComponent,
    TimelineComponent,
    TimelineItemComponent,
    SocialNavComponent
  ]
})
export class SharedModule {
}
