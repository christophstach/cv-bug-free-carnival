import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import { GlobalElementService } from '../../shared/services/global-element/global-element.service';
import { ScrollSpyService } from '../../shared/services/scroll-spy/scroll-spy.service';
import { ProgressCircleNewComponent } from '../../shared/components/progress-circle-new/progress-circle-new.component';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private animationClass = 'fadeIn';

  @ViewChild('headline') headline: ElementRef;
  @ViewChildren(ProgressCircleNewComponent) circles: QueryList<ProgressCircleNewComponent>;

  constructor(private scrollSpyService: ScrollSpyService, private globalElementService: GlobalElementService) {
  }

  ngOnInit() {
    this.scrollSpyService.getObservable()
      .map(() => this.globalElementService.isInViewport('skills', -57))
      .filter(isInViewport => isInViewport)
      .take(1)
      .delay(1000)
      .subscribe(() => {
        this.headline.nativeElement.classList.toggle('animated', true);
        this.headline.nativeElement.classList.toggle(this.animationClass, true);
        this.headline.nativeElement.classList.toggle('will-animate', false);

        this.circles.forEach((circle) => {
          circle.animate();
        });
      });
  }

}
