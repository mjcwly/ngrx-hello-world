// Core imports...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application imports...
import { GreetingsRoutingModule } from './greetings-routing.module';
import { GreetingsComponent } from './greetings.component';
import { GreetingsTableComponent } from './greetings-table/greetings-table.component';

@NgModule({
  declarations: [
    GreetingsComponent,
    GreetingsTableComponent
  ],
  imports: [
    CommonModule,
    GreetingsRoutingModule
  ]
})
export class GreetingsModule { }
