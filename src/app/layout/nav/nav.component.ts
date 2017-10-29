import { AfterViewInit, Component } from '@angular/core';
import { ScrollSpyService } from 'ngx-scrollspy';
import { GlobalElementService } from '../../shared/services/global-element/global-element.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {
  private offset = -57;

  homeInViewport$: Observable<boolean>;
  skillsInViewport$: Observable<boolean>;
  workExperienceInViewport$: Observable<boolean>;
  educationInViewport$: Observable<boolean>;

  constructor(private scrollSpyService: ScrollSpyService, private globalElementService: GlobalElementService) {
  }


  ngAfterViewInit() {
    this.homeInViewport$ = this.scrollSpyService
      .getObservable('window')
      .map(() => this.globalElementService.isInViewport('home', this.offset));

    this.skillsInViewport$ = this.scrollSpyService
      .getObservable('window')
      .map(() => this.globalElementService.isInViewport('skills', this.offset));

    this.workExperienceInViewport$ = this.scrollSpyService
      .getObservable('window')
      .map(() => this.globalElementService.isInViewport('work-experience', this.offset));

    this.educationInViewport$ = this.scrollSpyService
      .getObservable('window')
      .map(() => this.globalElementService.isInViewport('education', this.offset));

  }
}
