import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SkillsComponent,
    WorkExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    ContactMeComponent
  ],
  exports: [
    SkillsComponent,
    WorkExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    ContactMeComponent
  ]
})
export class ContentModule {
}
