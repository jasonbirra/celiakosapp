import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaplocalPage } from './maplocal.page';

const routes: Routes = [
  {
    path: '',
    component: MaplocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaplocalPageRoutingModule {}
