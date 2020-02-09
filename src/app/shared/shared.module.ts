import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetWorldComponent } from './greet-world/greet-world.component';

@NgModule({
  declarations: [
    GreetWorldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreetWorldComponent
  ]
})
export class SharedModule { }
