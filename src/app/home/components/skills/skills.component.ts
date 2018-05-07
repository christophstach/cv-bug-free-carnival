import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ProgressCircleComponent } from '../../../shared/components/progress-circle/progress-circle.component';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';
import { delay, filter, take } from 'rxjs/operators';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @ViewChild('headline') headline: ElementRef;
  @ViewChildren(ProgressCircleComponent) circles: QueryList<ProgressCircleComponent>;

  constructor(private scrollSpyService: ScrollSpyService) {
  }

  ngOnInit() {
    this.scrollSpyService.getScrollSpy().pipe(
      filter((data) => data['skills']),
      take(1),
      delay(1000)
    ).subscribe(() => {
      this.circles.forEach((circle) => {
        circle.animate();
      });
    });
  }
}
