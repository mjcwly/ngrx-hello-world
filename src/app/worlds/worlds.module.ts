// Core imports...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application imports...
import { SharedModule } from '../shared/shared.module';
import { WorldsRoutingModule } from './worlds-routing.module';
import { WorldsComponent } from './worlds.component';
import { WorldsTableComponent } from './worlds-table/worlds-table.component';
import { WorldsCountComponent } from './worlds-count/worlds-count.component';

@NgModule({
  declarations: [
    WorldsComponent,
    WorldsTableComponent,
    WorldsCountComponent
  ],
  imports: [
    CommonModule,
    WorldsRoutingModule,
    SharedModule
  ]
})
export class WorldsModule { }
