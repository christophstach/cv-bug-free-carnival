import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgressCircleComponent } from './components/progress-circle/progress-circle.component';
import { SocialNavComponent } from './components/social-nav/social-nav.component';
import { TimelineItemComponent } from './components/timeline/timeline-item/timeline-item.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { BootstrapCollapsibleNavDirective } from './directives/bootstrap-collapsible-nav/bootstrap-collapsible-nav.directive';
import { SmoothScrollDirective } from './directives/smooth-scroll/smooth-scroll.directive';
import { MomentPipe } from './pipes/moment.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    ProgressCircleComponent,
    SocialNavComponent,
    TimelineComponent,
    TimelineItemComponent,
    SmoothScrollDirective,
    BootstrapCollapsibleNavDirective,
    MomentPipe
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ProgressCircleComponent,
    SocialNavComponent,
    TimelineComponent,
    TimelineItemComponent,
    SmoothScrollDirective,
    BootstrapCollapsibleNavDirective,
    MomentPipe
  ]
})
export class SharedModule {
}
