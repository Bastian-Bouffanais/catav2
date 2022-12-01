import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripprogPage } from './tripprog.page';

const routes: Routes = [
  {
    path: '',
    component: TripprogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripprogPageRoutingModule {}
