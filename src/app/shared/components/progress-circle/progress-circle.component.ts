import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as progressbar from 'progressbar.js';

declare interface ProgressBarOptions {
  // Stroke color.
  // Default: '#555'
  color?: string;

  // Width of the stroke.
  // Unit is percentage of SVG canvas' size.
  // Default: 1.0
  // NOTE: In Line shape, you should control
  // the stroke width by setting container's height.
  // WARNING: IE doesn't support values over 6, see this bug:
  //          https://github.com/kimmobrunfeldt/progressbar.js/issues/79
  strokeWidth?: number;

  // If trail options are not defined, trail won't be drawn

  // Color for lighter trail stroke
  // underneath the actual progress path.
  // Default: '#eee'
  trailColor?: string;

  // Width of the trail stroke. Trail is always centered relative to
  // actual progress path.
  // Default: same as strokeWidth
  trailWidth?: number;

  // Inline CSS styles for the created SVG element
  // Set null to disable all default styles.
  // You can disable individual defaults by setting them to `null`
  // If you specify anything in this object, none of the default styles
  // apply
  svgStyle?: any;

  // Text options. Text element is a <p> element appended to container
  // You can add CSS rules for the text element with the className
  // NOTE: When text is set, 'position: relative' will be set to the
  // container for centering. You can also prevent all default inline
  // styles with 'text.style: null'
  // Default: null
  text?: {
    // Initial value for text.
    // Default: null
    value?: string;

    // Class name for text element.
    // Default: 'progressbar-text'
    className?: string;

    // Inline CSS styles for the text element.
    // If you want to modify all CSS your self, set null to disable
    // all default styles.
    // If the style option contains values, container is automatically
    // set to position: relative. You can disable behavior this with
    // autoStyleContainer: false
    // If you specify anything in this object, none of the default styles
    // apply
    // Default: object speficied below
    style?: any;

    // Only effective if the text.style is not null
    // By default position: relative is applied to container if text
    // is set. Setting this to false disables that feature.
    autoStyleContainer?: boolean;

    // Only effective if the shape is SemiCircle.
    // If true, baseline for text is aligned with bottom of
    // the SVG canvas. If false, bottom line of SVG canvas
    // is in the center of text.
    // Default: true
    alignToBottom?: boolean;
  };

  // Fill color for the shape. If null, no fill.
  // Default: null
  fill?: string;

  // Duration for animation in milliseconds
  // Default: 800
  duration?: number;

  // Easing for animation. See #easing section.
  // Default: 'linear'
  easing?: string;

  // See #custom-animations section
  // Built-in shape passes reference to itself and a custom attachment
  // object to step function
  from?: { color?: string; };
  to?: { color?: string; };
  step?: any;

  // If true, some useful console.warn calls will be done if it seems
  // that progressbar is used incorrectly
  // Default: false
  warnings?: boolean;
}

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent implements OnInit {
  private circle: any;
  @ViewChild('container') container: ElementRef;


  @Input() options: ProgressBarOptions = {
    duration: 1200,
    strokeWidth: 5,
    color: '#00BCD4',
    trailWidth: 2,
    easing: 'easeInOut',
    text: {
      autoStyleContainer: true,
      style: {
        fontSize: '20px',
        position: 'absolute',
        width: '100%',
        color: '#000000',
        top: '50%',
        padding: 0,
        margin: 0,
        // You can specify styles which will be browser prefixed
        transform: {
          prefix: true,
          value: 'translate(0, -50%)'
        }
      }
    },
    step(state, circle) {
      const value = Math.round(circle.value() * 100);

      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + ' %');
      }
    }
  };

  @Input() value = 0;
  @Input() label: string = null;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.circle = new (progressbar as any).Circle(this.container.nativeElement, this.options);
    }
  }

  animate() {
    this.circle.animate(this.value);
  }
}
