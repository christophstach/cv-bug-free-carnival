import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ViewportComponent } from './components/viewport/viewport.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  imports: [
    SharedModule,
    LandingRoutingModule
  ],
  declarations: [
    ViewportComponent,
    ContactMeComponent,
    EducationComponent,
    SkillsComponent,
    WorkExperienceComponent
  ]
})
export class LandingModule {
}
