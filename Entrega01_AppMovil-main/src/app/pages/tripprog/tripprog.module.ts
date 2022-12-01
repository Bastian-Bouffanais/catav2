import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripprogPageRoutingModule } from './tripprog-routing.module';

import { TripprogPage } from './tripprog.page';
import { ComponentsModules } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripprogPageRoutingModule, 
    ComponentsModules
  ],
  declarations: [TripprogPage]
})
export class TripprogPageModule {}
