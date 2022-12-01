import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HavetripPageRoutingModule } from './havetrip-routing.module';

import { HavetripPage } from './havetrip.page';
import { ComponentsModules } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HavetripPageRoutingModule,
    ComponentsModules
  ],
  declarations: [HavetripPage]
})
export class HavetripPageModule {}
