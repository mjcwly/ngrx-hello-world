import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetWorldComponent } from './greet-world.component';

const routes: Routes = [{ path: '', component: GreetWorldComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreetWorldRoutingModule { }
