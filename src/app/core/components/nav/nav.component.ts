import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ScrollSpyService } from '../../services/scroll-spy.service';
import { GlobalElementService } from '../../services/global-element.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {
  @ViewChild('collapsibleNavbar') collapsibleNavbar: ElementRef;

  private offset = -57;
  private isCollapsed = true;

  homeInViewport$: Observable<boolean>;
  skillsInViewport$: Observable<boolean>;
  workExperienceInViewport$: Observable<boolean>;
  educationInViewport$: Observable<boolean>;
  contactMeInViewport$: Observable<boolean>;

  constructor(private scrollSpyService: ScrollSpyService, private globalElementService: GlobalElementService, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.homeInViewport$ = this.scrollSpyService
      .getObservable()
      .map(() => this.globalElementService.isInViewport('home', this.offset));

    this.skillsInViewport$ = this.scrollSpyService
      .getObservable()
      .map(() => this.globalElementService.isInViewport('skills', this.offset));

    this.workExperienceInViewport$ = this.scrollSpyService
      .getObservable()
      .map(() => this.globalElementService.isInViewport('work-experience', this.offset));

    this.educationInViewport$ = this.scrollSpyService
      .getObservable()
      .map(() => this.globalElementService.isInViewport('education', this.offset));

    this.contactMeInViewport$ = this.scrollSpyService
      .getObservable()
      .map(() => this.globalElementService.isInViewport('contact-me', this.offset));
  }

  onToggleNavbar(event: Event) {
    if (this.isCollapsed) {
      this.renderer.removeClass(this.collapsibleNavbar.nativeElement, 'collapse');
    } else {
      this.renderer.addClass(this.collapsibleNavbar.nativeElement, 'collapse');
    }

    this.isCollapsed = !this.isCollapsed;
  }
}
