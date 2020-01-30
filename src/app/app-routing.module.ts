import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'greetings', loadChildren: () => import('./greetings/greetings.module').then(m => m.GreetingsModule) }, { path: 'worlds', loadChildren: () => import('./worlds/worlds.module').then(m => m.WorldsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
