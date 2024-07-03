// Core imports...
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

// Application imports...
import { AppState } from './hello-world-store/state/app-state';
import * as GreetingActions from './hello-world-store/actions/greeting.actions'
import * as WorldActions from './hello-world-store/actions/world.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-hello-world';

  constructor(
    private store: Store<AppState>
  ) { 
    console.log("AppComponent | constructor");
  }
  
  ngOnInit() {
    console.log("AppComponent | ngOnInit");
    this.store.dispatch(GreetingActions.loadGreetings());
    this.store.dispatch(WorldActions.loadWorlds());
  }

  ngOnChanges() {
    console.log("AppComponent | ngOnChanges")
  }

  ngDoCheck() {
    console.log("AppComponent | ngDoCheck")
  }
}
