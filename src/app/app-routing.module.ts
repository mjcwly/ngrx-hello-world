// Core imports...
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'greet-world',
    loadChildren: () => import('./greet-world/greet-world.module').then(m => m.GreetWorldModule)
  },
  {
    path: 'greetings',
    loadChildren: () => import('./greetings/greetings.module').then(m => m.GreetingsModule)
  },
  {
    path: 'worlds',
    loadChildren: () => import('./worlds/worlds.module').then(m => m.WorldsModule)
  },
  {
    path: '',
    redirectTo: 'greet-world',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
