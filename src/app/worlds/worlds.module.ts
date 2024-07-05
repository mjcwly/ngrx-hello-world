// Core imports...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application imports...
import { WorldsRoutingModule } from './worlds-routing.module';
import { WorldsComponent } from './worlds.component';
import { WorldsTableComponent } from './worlds-table/worlds-table.component';
import { WorldsCountComponent } from './worlds-count/worlds-count.component';
import { WorldsButtonsComponent } from './worlds-buttons/worlds-buttons.component';

@NgModule({
  declarations: [
    WorldsComponent,
    WorldsTableComponent,
    WorldsCountComponent,
    WorldsButtonsComponent
  ],
  imports: [
    CommonModule,
    WorldsRoutingModule,
  ],
  exports: [
    WorldsComponent,
    WorldsButtonsComponent
  ]
})
export class WorldsModule { }
