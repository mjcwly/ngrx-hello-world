// Core imports...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application imports...
import { GreetingsRoutingModule } from './greetings-routing.module';
import { GreetingsComponent } from './greetings.component';

@NgModule({
  declarations: [
    GreetingsComponent
  ],
  imports: [
    CommonModule,
    GreetingsRoutingModule
  ]
})
export class GreetingsModule { }
