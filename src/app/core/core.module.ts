import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GlobalElementService } from './services/global-element.service';
import { MailService } from './services/mail.service';
import { ScrollSpyService } from './services/scroll-spy.service';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialNavComponent } from './components/social-nav/social-nav.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule
  ],
  providers: [
    GlobalElementService,
    MailService,
    ScrollSpyService
  ],
  declarations: [
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SocialNavComponent
  ],
  exports: [
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SocialNavComponent,
  ]
})
export class CoreModule {
}
