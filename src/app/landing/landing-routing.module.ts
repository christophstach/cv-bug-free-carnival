import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewportComponent } from './components/viewport/viewport.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ViewportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {
}
