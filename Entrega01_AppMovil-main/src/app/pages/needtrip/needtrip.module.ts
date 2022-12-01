import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeedtripPageRoutingModule } from './needtrip-routing.module';

import { NeedtripPage } from './needtrip.page';
import { ComponentsModules } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeedtripPageRoutingModule,
    ComponentsModules
  ],
  declarations: [NeedtripPage]
})
export class NeedtripPageModule {}
