// Core imports...
import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';

// Application imports...
import { AppState } from '../../hello-world-store/state/app-state';
import * as GreetingActions from '../../hello-world-store/actions/greeting.actions'
import { Greeting, selectAllGreetings, selectSelectedGreetingId } from '../../hello-world-store/entities/greeting.entity';

@Component({
  selector: 'app-greetings-table',
  templateUrl: './greetings-table.component.html',
  styleUrls: ['./greetings-table.component.scss']
})
export class GreetingsTableComponent implements OnInit, OnChanges {

  greetings$: Observable<Greeting[]> = this.store.select(selectAllGreetings);
  
  selectedGreetingId$: Observable<number> = this.store.select(selectSelectedGreetingId);

  vm$ = combineLatest([
    this.greetings$,
    this.selectedGreetingId$
  ]).pipe(
    map(([greetings, selectedGreetingId]) => {
      return { greetings, selectedGreetingId };
    })
  );

  constructor(
    private store: Store<AppState>
  ) { 
    console.log("GreetingsTableComponent | constructor");
  }
  
  ngOnInit() {
    console.log("GreetingsTableComponent | ngOnInit");
  }

  ngOnChanges() {
    console.log("GreetingsTableComponent | ngOnChanges");
  }

  ngDoCheck() {
    console.log("GreetingsTableComponent | ngDoCheck")
  }

  onGreetingClicked(g: Greeting, selectedGreetingId: number) {
    const newSelectedGreetingId = (g.greetingId !== selectedGreetingId) ? g.greetingId : null; 
    this.store.dispatch(GreetingActions.setSelectedGreeting({ greetingId: newSelectedGreetingId }));
  }
}
