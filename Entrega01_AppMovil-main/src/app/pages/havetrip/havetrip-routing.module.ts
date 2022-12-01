import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HavetripPage } from './havetrip.page';

const routes: Routes = [
  {
    path: '',
    component: HavetripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HavetripPageRoutingModule {}
