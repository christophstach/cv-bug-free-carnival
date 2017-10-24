import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private animationClass = 'fadeIn';

  @ViewChild('headline') headline: ElementRef;

  constructor() { }

  ngOnInit() {
    let yetActivated = false;

    $(window).scroll((event) => {
      if (($(window).scrollTop() + $(window).height()) >= $(this.headline.nativeElement).offset().top && !yetActivated) {
        yetActivated = true;

        setTimeout(() => {
          this.headline.nativeElement.classList.toggle('animated', true);
          this.headline.nativeElement.classList.toggle(this.animationClass, true);
          this.headline.nativeElement.classList.toggle('will-animate', false);
        }, 500);
      }
    });
  }

}
