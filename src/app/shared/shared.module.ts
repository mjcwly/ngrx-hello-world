import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetWorldComponent } from './greet-world/greet-world.component';
import { InstructionComponent } from './instruction/instruction.component';

@NgModule({
  declarations: [
    GreetWorldComponent,
    InstructionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreetWorldComponent,
    InstructionComponent
  ]
})
export class SharedModule { }
