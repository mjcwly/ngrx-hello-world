// Core imports...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application imports...
import { GreetingsRoutingModule } from './greetings-routing.module';
import { GreetingsComponent } from './greetings.component';
import { GreetingsTableComponent } from './greetings-table/greetings-table.component';
import { GreetingsCountComponent } from './greetings-count/greetings-count.component';
import { GreetingsButtonsComponent } from './greetings-buttons/greetings-buttons.component';

@NgModule({
  declarations: [
    GreetingsComponent,
    GreetingsTableComponent,
    GreetingsButtonsComponent,
    GreetingsCountComponent
  ],
  imports: [
    CommonModule,
    GreetingsRoutingModule
  ],
  exports: [
    GreetingsComponent,
    GreetingsButtonsComponent
  ]
})
export class GreetingsModule { }
