import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreetWorldRoutingModule } from './greet-world-routing.module';
import { GreetWorldComponent } from './greet-world.component';
import { GreetingsModule } from '../greetings/greetings.module';
import { WorldsModule } from '../worlds/worlds.module';


@NgModule({
  declarations: [
    GreetWorldComponent
  ],
  imports: [
    CommonModule,
    GreetWorldRoutingModule,
    GreetingsModule,
    WorldsModule
  ]
})
export class GreetWorldModule { }
