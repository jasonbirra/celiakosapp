import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MedicoPageRoutingModule } from './medico-routing.module';
import { MedicoPage } from './medico.page';
import { GoogleMapsModule } from '@angular/google-maps'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapsModule,
    MedicoPageRoutingModule
  ],
  declarations: [MedicoPage]
})
export class MedicoPageModule {}


