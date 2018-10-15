import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { delay, filter, take } from 'rxjs/operators';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';
import { ProgressCircleComponent } from '../../../shared/components/progress-circle/progress-circle.component';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @ViewChild('headline') headline: ElementRef;
  @ViewChildren(ProgressCircleComponent) circles: QueryList<ProgressCircleComponent>;

  private delay = 100;

  constructor(private scrollSpyService: ScrollSpyService) {
  }

  ngOnInit() {
    this.scrollSpyService.getScrollSpy().pipe(
      filter((data) => data['skills']),
      take(1),
      delay(this.delay)
    ).subscribe(() => {
      this.circles.forEach((circle) => {
        circle.animate();
      });
    });
  }
}
