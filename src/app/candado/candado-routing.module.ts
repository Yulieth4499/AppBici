import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandadoPage } from './candado.page';

const routes: Routes = [
  {
    path: '',
    component: CandadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandadoPageRoutingModule {}
