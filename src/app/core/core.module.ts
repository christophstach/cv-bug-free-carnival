import { NgModule } from '@angular/core';
import { ScrollSpyService } from './services/scroll-spy.service';
import { GlobalElementService } from './services/global-element.service';
import { MailService } from './services/mail.service';
import { ContentModule } from '../content/content.module';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LayoutModule,
    ContentModule
  ],
  providers: [
    GlobalElementService,
    ScrollSpyService,
    MailService,
  ],
  declarations: [],
  exports: [
    LayoutModule,
    ContentModule
  ]
})
export class CoreModule {
}
