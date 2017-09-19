import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressRingComponent } from './progress-ring/progress-ring.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProgressRingComponent
  ],
  exports: [
    ProgressRingComponent
  ]
})
export class UtilModule { }
