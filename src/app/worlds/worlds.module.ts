// Core imports...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application imports...
import { WorldsRoutingModule } from './worlds-routing.module';
import { WorldsComponent } from './worlds.component';

@NgModule({
  declarations: [
    WorldsComponent
  ],
  imports: [
    CommonModule,
    WorldsRoutingModule
  ]
})
export class WorldsModule { }
