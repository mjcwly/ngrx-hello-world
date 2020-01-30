// Core imports...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Application imports...
import { GreetingEffects } from './effects/greeting.effects';
import { GreetingService } from './services/greeting.service';
import { reducers } from './reducers/reducer';
import { WorldService } from './services/world.service';
import { WorldEffects } from './effects/world.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([
      GreetingEffects,
      WorldEffects,
    ]),
  ],
  providers: [
    GreetingService,
    WorldService,
  ],
  exports: [
    StoreModule, 
    EffectsModule
  ]
})
export class HelloWorldStoreModule { }
