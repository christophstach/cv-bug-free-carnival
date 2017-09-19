import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-progress-ring',
  templateUrl: './progress-ring.component.html',
  styleUrls: ['./progress-ring.component.scss']
})
export class ProgressRingComponent implements OnInit {
  @Input('percent') percent = 50;
  @Input('label') label: string = null;
  @ViewChild('outerElement') outerElement: ElementRef;
  @ViewChild('innerElement') innerElement: ElementRef;

  constructor() {
  }


  ngOnInit(): void {
    $(this.outerElement.nativeElement).height($(this.outerElement.nativeElement).width());
    $(this.innerElement.nativeElement).height($(this.innerElement.nativeElement).width());

    $(window).on('resize', () => {
      $(this.outerElement.nativeElement).height($(this.outerElement.nativeElement).width());
      $(this.innerElement.nativeElement).height($(this.innerElement.nativeElement).width());
    });
  }
}
