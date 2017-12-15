import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ProgressCircleNewComponent } from '../../../shared/components/progress-circle-new/progress-circle-new.component';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private animationClass = 'fadeIn';

  @ViewChild('headline') headline: ElementRef;
  @ViewChildren(ProgressCircleNewComponent) circles: QueryList<ProgressCircleNewComponent>;

  constructor(private scrollSpyService: ScrollSpyService) {
  }

  ngOnInit() {
    this.scrollSpyService.getScrollSpy()
      .filter((data) => data['skills'])
      .take(1)
      .delay(1000)
      .subscribe(() => {
        this.headline.nativeElement.classList.toggle('animated', true);
        this.headline.nativeElement.classList.toggle(this.animationClass, true);
        this.headline.nativeElement.classList.toggle('will-animate', false);

        this.circles.forEach((circle) => {
          circle.animate();
          this.scrollSpyService.reset();
        });
      });
  }

}
