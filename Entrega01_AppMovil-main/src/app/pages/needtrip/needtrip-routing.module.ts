import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeedtripPage } from './needtrip.page';

const routes: Routes = [
  {
    path: '',
    component: NeedtripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeedtripPageRoutingModule {}
