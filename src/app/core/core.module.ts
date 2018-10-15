import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NavComponent,
    BackToTopComponent,
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    NavComponent,
    BackToTopComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule {
}
