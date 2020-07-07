import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandadoPageRoutingModule } from './candado-routing.module';

import { CandadoPage } from './candado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandadoPageRoutingModule
  ],
  declarations: [CandadoPage]
})
export class CandadoPageModule {}
