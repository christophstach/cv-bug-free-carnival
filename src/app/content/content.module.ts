import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';
import { FindMeComponent } from './find-me/find-me.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    SkillsComponent,
    WorkExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    FindMeComponent
  ],
  exports: [
    SkillsComponent,
    WorkExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    FindMeComponent
  ]
})
export class ContentModule {
}
