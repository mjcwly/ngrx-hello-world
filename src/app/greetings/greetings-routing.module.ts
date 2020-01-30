// Core imports...
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Application imports...
import { GreetingsComponent } from './greetings.component';

const routes: Routes = [{ path: '', component: GreetingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreetingsRoutingModule { }
