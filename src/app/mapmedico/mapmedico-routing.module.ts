import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapmedicoPage } from './mapmedico.page';

const routes: Routes = [
  {
    path: '',
    component: MapmedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapmedicoPageRoutingModule {}
