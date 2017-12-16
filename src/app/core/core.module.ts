import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MailService } from './services/mail.service';
import { ScrollSpyService } from './services/scroll-spy.service';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

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
    BackToTopComponent
  ],
  exports: [
    AppShellComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    BackToTopComponent
  ]
})
export class CoreModule {
}
