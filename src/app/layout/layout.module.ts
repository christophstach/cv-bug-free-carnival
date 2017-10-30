import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SocialNavComponent } from './social-nav/social-nav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    NavComponent,
    FooterComponent,
    HeaderComponent,
    SocialNavComponent
  ],
  exports: [
    NavComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class LayoutModule {
}
