import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jquery-circle-progress',
  templateUrl: './jquery-circle-progress.component.html',
  styleUrls: ['./jquery-circle-progress.component.scss']
})
export class JqueryCircleProgressComponent implements OnInit {
  @ViewChild('circleElement') circleElement: ElementRef;
  @ViewChild('labelElement') labelElement: ElementRef;
  @Input() value = 100;
  @Input() size = 175;
  @Input() label = '';

  constructor() {
  }

  ngOnInit() {
    let yetActivated = false;

    $(window).scroll((event) => {
      if (($(window).scrollTop() + $(window).height()) >= $(this.circleElement.nativeElement).offset().top && !yetActivated) {
        yetActivated = true;

        const circle = ($(this.circleElement.nativeElement) as any).circleProgress({
          value: 0,
          size: this.size,
          fill: {
            gradient: ['#CF9D63', '#4E568E', '#479368']
          }
        });
        setTimeout(() => {
          circle.circleProgress({ value: this.value });

          circle.on('circle-animation-progress', (e, progress, stepValue) => {
            $($(this.circleElement.nativeElement)).find('strong').html(Math.round(100 * stepValue) + '<small>%</small>');
          });
        }, 500);
      }
    });


  }

}
