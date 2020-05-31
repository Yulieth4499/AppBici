import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BicicletaPage } from './bicicleta.page';

const routes: Routes = [
  {
    path: '',
    component: BicicletaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BicicletaPageRoutingModule {}
