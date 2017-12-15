import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @ViewChild('collapsibleNavbar') collapsibleNavbar: ElementRef;

  private isCollapsed = true;


  constructor(private renderer: Renderer2) {
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
