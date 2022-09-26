import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapmedicoPageRoutingModule } from './mapmedico-routing.module';
import { GoogleMapsModule } from '@angular/google-maps'; 
import { MapmedicoPage } from './mapmedico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapsModule,
    IonicModule,
    MapmedicoPageRoutingModule
  ],
  declarations: [MapmedicoPage]
})
export class MapmedicoPageModule {}
