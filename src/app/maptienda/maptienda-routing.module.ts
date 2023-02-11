import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaptiendaPage } from './maptienda.page';

const routes: Routes = [
  {
    path: '',
    component: MaptiendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaptiendaPageRoutingModule {}
