import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaindexPage } from './maindex.page';

const routes: Routes = [
  {
    path: '',
    component: MaindexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaindexPageRoutingModule {}
