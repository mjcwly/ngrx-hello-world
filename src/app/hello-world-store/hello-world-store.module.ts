// Core imports...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Application imports...
import { GreetingEffects } from './effects/greeting.effects';
import { reducers } from './reducers/reducer';
import { GreetingService } from './services/greeting.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([
      GreetingEffects
    ]),
  ],
  providers: [
    GreetingService
  ],
  exports: [
    StoreModule, 
    EffectsModule
  ]
})
export class HelloWorldStoreModule { }
