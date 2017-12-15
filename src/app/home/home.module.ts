import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { EducationComponent } from './components/education/education.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    ContactMeComponent,
    EducationComponent,
    LanguagesComponent,
    SkillsComponent,
    WorkExperienceComponent
  ]
})
export class HomeModule {
}
