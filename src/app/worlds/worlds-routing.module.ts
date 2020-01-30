import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorldsComponent } from './worlds.component';

const routes: Routes = [{ path: '', component: WorldsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldsRoutingModule { }
