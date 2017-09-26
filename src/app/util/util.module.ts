import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressRingComponent } from './progress-ring/progress-ring.component';
import { JqueryCircleProgressComponent } from './jquery-circle-progress/jquery-circle-progress.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProgressRingComponent,
    JqueryCircleProgressComponent
  ],
  exports: [
    ProgressRingComponent,
    JqueryCircleProgressComponent
  ]
})
export class UtilModule { }
