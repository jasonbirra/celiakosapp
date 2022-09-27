import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaplocalPageRoutingModule } from './maplocal-routing.module';

import { MaplocalPage } from './maplocal.page';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapsModule,
    IonicModule,
    MaplocalPageRoutingModule
  ],
  declarations: [MaplocalPage]
})
export class MaplocalPageModule {}
