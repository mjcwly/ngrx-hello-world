// Core imports...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application imports...
import { SharedModule } from '../shared/shared.module';
import { GreetingsRoutingModule } from './greetings-routing.module';
import { GreetingsComponent } from './greetings.component';
import { GreetingsTableComponent } from './greetings-table/greetings-table.component';
import { GreetingsCountComponent } from './greetings-count/greetings-count.component';

@NgModule({
  declarations: [
    GreetingsComponent,
    GreetingsTableComponent,
    GreetingsCountComponent
  ],
  imports: [
    CommonModule,
    GreetingsRoutingModule,
    SharedModule
  ]
})
export class GreetingsModule { }
