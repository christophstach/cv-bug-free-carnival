import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MailService } from './services/mail.service';
import { ScrollSpyService } from './services/scroll-spy.service';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialNavComponent } from './components/social-nav/social-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AppShellComponent } from './components/app-shell/app-shell.component';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule
  ],
  providers: [
    MailService,
    ScrollSpyService
  ],
  declarations: [
    AppShellComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SocialNavComponent
  ],
  exports: [
    AppShellComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SocialNavComponent,
  ]
})
export class CoreModule {
}
