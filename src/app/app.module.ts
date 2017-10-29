import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContentModule } from './content/content.module';
import { SharedModule } from './shared/shared.module';
import { ScrollSpyModule } from 'ngx-scrollspy';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ScrollSpyModule.forRoot(),
    LayoutModule,
    ContentModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
