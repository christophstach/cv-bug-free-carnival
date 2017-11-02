import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
  animations: [
    trigger('leftState', [
      state('normal', style({
        transform: 'rotate(0deg)'
      })),
      state('done', style({
        transform: 'rotate({{degrees}}deg)'
      }), { params: { degrees: 0 } }),
      transition('normal => done', animate(1000))
    ]),
    trigger('rightState', [
      state('normal', style({
        transform: 'rotate(0deg)'
      })),
      state('done', style({
        transform: 'rotate({{degrees}}deg)'
      }), { params: { degrees: 0 } }),
      transition('normal => done', animate(1000))
    ])
  ]
})
export class ProgressCircleComponent implements OnInit {
  leftState = 'normal';
  rightState = 'normal';

  @Input() value = 0;
  @Input() label: string = null;
  @Input() size: string = null;

  constructor() {
  }


  ngOnInit() {
    setTimeout(() => {
      this.rightState = 'done';
    }, 1000);
  }

  rightStateAnimationDone(event) {
    if (event.fromState === 'normal' && event.toState === 'done') {
      this.leftState = 'done';
    }
  }

  calculateLeftDegrees(): number {
    const n = (this.value - 0.5) * 2;

    if (n < 0) {
      return 0;
    } else {
      return n * 180;
    }
  }

  calculateRightDegrees(): number {
    const n = this.value * 2;

    if (n > 1) {
      return 180;
    } else {
      return n * 180;
    }
  }
}
