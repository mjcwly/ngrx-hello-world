import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldsRoutingModule } from './worlds-routing.module';
import { WorldsComponent } from './worlds.component';


@NgModule({
  declarations: [WorldsComponent],
  imports: [
    CommonModule,
    WorldsRoutingModule
  ]
})
export class WorldsModule { }
