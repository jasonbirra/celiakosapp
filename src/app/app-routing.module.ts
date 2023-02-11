import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'medico/:id',
    loadChildren: () => import('./medico/medico.module').then( m => m.MedicoPageModule)
  },
  {
    path: 'info/:id',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'locales/:id',
    loadChildren: () => import('./locales/locales.module').then( m => m.LocalesPageModule)
  },
  {
    path: 'mapmedico/:lat/:lng/:nombre',
    loadChildren: () => import('./mapmedico/mapmedico.module').then( m => m.MapmedicoPageModule)
  },
  {
    path: 'maplocal/:lat/:lng/:nombre',
    loadChildren: () => import('./maplocal/maplocal.module').then( m => m.MaplocalPageModule)
  },
  {
    path: 'tienda/:id',
    loadChildren: () => import('./tienda/tienda.module').then( m => m.TiendaPageModule)
  },
  {
    path: 'maptienda/:lat/:lng/:nombre',
    loadChildren: () => import('./maptienda/maptienda.module').then( m => m.MaptiendaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
