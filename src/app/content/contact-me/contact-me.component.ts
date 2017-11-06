import { Component, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  @ViewChild('f') form: NgForm;
  contactState: {
    step: number,
    email?: string,
    subject?: string,
    message?: string
  } = {
    step: 1
  };

  constructor() {
  }


  onSubmit(event: Event) {
    this.contactState.step++;

    this.contactState = {
      ...this.contactState,
      ...this.form.value
    };
  }
}
