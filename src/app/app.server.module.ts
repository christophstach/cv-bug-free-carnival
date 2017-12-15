import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './core/components/app-shell/app-shell.component';

const routes: Routes = [
  { path: 'shell', component: AppShellComponent }
];

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {
}
