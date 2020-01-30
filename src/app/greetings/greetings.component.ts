// Core imports...
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

// Application imports...
import { AppState } from '../hello-world-store/state/app-state';
import * as GreetingActions from '../hello-world-store/actions/greeting.actions'
import { Greeting, selectGreetings } from '../hello-world-store/entities/greeting.entity';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  greetings$: Observable<Greeting[]>;

  constructor(
    private store: Store<AppState>
  ) { 
    this.greetings$ = this.store.select(selectGreetings);
  }

  ngOnInit() {
    this.store.dispatch(GreetingActions.loadGreetings());
  }

  onGreetingClicked(g: Greeting) {
    this.store.dispatch(GreetingActions.setSelectedGreeting({ greetingId: g.greetingId }));
  }

}
