import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaptiendaPageRoutingModule } from './maptienda-routing.module';

import { MaptiendaPage } from './maptienda.page';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapsModule,
    IonicModule,
    MaptiendaPageRoutingModule
  ],
  declarations: [MaptiendaPage]
})
export class MaptiendaPageModule {}
