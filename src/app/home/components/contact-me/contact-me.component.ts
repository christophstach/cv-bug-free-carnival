import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MailService } from '../../../core/services/mail.service';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  @ViewChild('f') form: NgForm;
  @ViewChild('subjectInput') subjectInput: ElementRef;

  contactState: {
    step: number,
    from?: string,
    subject?: string,
    message?: string
  } = {
    step: 1
  };

  constructor(private mailService: MailService) {
  }


  onSubmit(event: Event) {
    this.contactState.step++;

    this.contactState = {
      ...this.contactState,
      ...this.form.value
    };

    switch (this.contactState.step) {
      case 2: {
        if (typeof window !== 'undefined') {
          setTimeout(() => {
            this.subjectInput.nativeElement.focus();
          });
        }

        break;
      }
      case 3: {
        this.mailService
          .sendMail(this.contactState.from, this.contactState.subject, this.contactState.message)
          .subscribe(() => this.contactState.step++);

        break;
      }
    }
  }
}
