import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BicicletaPageRoutingModule } from './bicicleta-routing.module';

import { BicicletaPage } from './bicicleta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BicicletaPageRoutingModule
  ],
  declarations: [BicicletaPage]
})
export class BicicletaPageModule {}
