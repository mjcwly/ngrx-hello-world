// Core imports...
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

// Application imports...
import { AppState } from '../../hello-world-store/state/app-state';
import * as GreetingActions from '../../hello-world-store/actions/greeting.actions'
import { Greeting, selectAllGreetings, selectSelectedGreetingId } from '../../hello-world-store/entities/greeting.entity';

@Component({
  selector: 'app-greetings-table',
  templateUrl: './greetings-table.component.html',
  styleUrls: ['./greetings-table.component.css']
})
export class GreetingsTableComponent implements OnInit {

  greetings$: Observable<Greeting[]>;
  selectedGreetingId$: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) { 
    this.greetings$ = this.store.select(selectAllGreetings);
    this.selectedGreetingId$ = this.store.select(selectSelectedGreetingId);
  }

  ngOnInit() {
    this.store.dispatch(GreetingActions.loadGreetings());
  }

  onGreetingClicked(g: Greeting) {
    this.store.dispatch(GreetingActions.setSelectedGreeting({ greetingId: g.greetingId }));
  }

}
